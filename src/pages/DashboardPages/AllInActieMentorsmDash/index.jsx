import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { useAuth } from "@/context/Auth";
import { DownloadTableExcel } from 'react-export-table-to-excel';

const AllInActieMentorsmDash = () => {
  const [loading, setLoading] = useState(false);
  const [allUser, setAlluser] = useState([])
  const { user } = useAuth();
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

  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get('mentors/not-active', {
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
          <h2 className='fs-1 fw-bold'> مستشارين منتظرين الموافقة علي حسابهم</h2>
        </div>
        <DownloadTableExcel
          filename="users table"
          sheet="users"
          currentTableRef={tableRef.current}
        >
          <button type="button" className="btn btn-info d-block m-3 ">  تحميل ملف اكسيل </button>
        </DownloadTableExcel>
        <table ref={tableRef} className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">الاسم بالكامل</th>
              <th scope="col">البريد الالكترونى</th>
              <th scope="col">رقم الهاتف</th>
              <th scope="col">المجال</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && allUser?.data?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.field}</td>
                  <td>
                    <Link
                      to={`/dash/mentors/mentor-details/${item?._id}`}
                      state={{ item }}
                    >
                      <button className="btn btn-outline-info mx-2 px-4">تفاصيل</button>
                    </Link>
                    <Link
                      to={`/dash/mentors/inActive/mentor-details/${item?._id}`}
                      state={{ item }}
                    >
                      <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
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
          <button className={`btn btn-outline-info ${next >= allUser.results ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <h3 className="text-light"> {allUser?.results}/ {prev} </h3>
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default AllInActieMentorsmDash