import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { useAuth } from "@/context/Auth";
import { DownloadTableExcel } from 'react-export-table-to-excel';

const FAQ = () => {
  const [loading, setLoading] = useState(false);
  const [allUser, setAlluser] = useState([])
  const { user } = useAuth();
  // console.log(user.role);
  //////////////////pagination///////////////////
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(10)

  const handelprev = () => {
    setPrev(count => count - 10)
    setNext(count => count - 10)
    if (prev <= 0) {
      setPrev(0);
      setNext(10)
    }
  }
  const handelNext = () => {
    setNext(count => count + 10);
    setPrev(count => count + 10)
    if (next < 10) {
      setPrev(0);
      setNext(10)

    }
  }
  // console.log(allUser.results,prev, next);

  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get('questions', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          setLoading(false);
          setAlluser(response.data);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, []);
  const tableRef = useRef(null);
  return (
    <div className="dashboard d-flex flex-row">
      {user?.role != 'manager' && <div className="loading"></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>الاسئلة الشائعة </h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <Link to="/dash/frequently-asked-questions/cteate-item">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة سؤال جديد</button>
          </Link>
          <DownloadTableExcel
            filename="users table"
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button type="button" className="btn btn-info m-3 ">  تحميل ملف اكسيل </button>
          </DownloadTableExcel>
        </div>
        <table ref={tableRef} className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">عنوان السؤال</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && allUser?.document?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td>
                    <Link
                      to={`/dash/frequently-asked-questions/details/${item?._id}`}
                      state={{ item }}
                    >
                      <button className="btn btn-outline-info mx-2 px-4">تفاصيل</button>
                    </Link>
                    <Link
                      to={`/dash/mentors/mentor-update/${item?._id}`}
                      state={{ item }}
                    >
                      <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                    </Link>
                    <Link
                      to={`/dash/mentors/mentor-update/${item?._id}`}
                      state={{ item }}
                    >
                      <button className="btn btn-outline-danger mx-2 px-4">حذف</button>
                    </Link>
                  </td>
                </tr>
              ) : null

            ))}
          </tbody>
        </table>
        {loading == true ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        }
        <div className="d-flex justify-content-around">
          <button className={`btn btn-outline-info ${next >= allUser.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <h3 className="text-light"> {allUser?.length}/ {prev} </h3>
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default FAQ