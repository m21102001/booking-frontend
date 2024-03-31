import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { useAuth } from "@/context/Auth";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { LazyLoadImage } from "react-lazy-load-image-component";
const HonorBoard = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false);
  const [contactForm, setContactForm] = useState([])
  const tableRef = useRef(null);
  let fetchContactForm = {
    method: 'get',
    url: 'honor-board',
  };
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios
        .request(fetchContactForm)
        .then((response) => {
          setContactForm(response.data);
          // console.log('xxxxx', response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
  }, []);

  const handelDelete = async (id) => {
    let config = {
      method: 'delete',
      url: `honor-board/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
    };
    setLoading(true);
    await axios
      .request(config, {
      })
      .then((response) => {
        axios.request(fetchContactForm).then((response) => {
          setContactForm(response.data);
          setLoading(false);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
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
  return (
    <div className="dashboard d-flex flex-row">
      {loading && <div className="loading"></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Honor board  </h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <Link to="/dash/honor-board/create-item">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة جديد</button>
          </Link>
          <DownloadTableExcel
            filename="users table"
            sheet="users"
            currentTableRef={tableRef.current}
          >
            <button type="button" className="btn btn-info d-block m-3 ">  تحميل ملف اكسيل </button>
          </DownloadTableExcel>
        </div>
        <table ref={tableRef} className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">صوره المستشار</th>
              <th scope="col">اسم المستشار</th>
              <th scope="col">المجال</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && contactForm?.documents?.map((item, index) => (
              index >= prev && index <= next ? (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item?.mentor.image}`}
                      alt={item?.mentor?.image}
                      loading="lazy"
                      style={{
                        width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%'
                      }}
                    />
                  </td>
                  <td>{item?.mentor?.name}</td>
                  <td>{item?.mentor?.field}</td>
                  <td>
                    <Link
                      to={`/dash/honor-board/update-item/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                    </Link>
                    <button onClick={() => handelDelete(item._id)} className="btn btn-outline-danger mx-2 px-4">حذف</button>
                  </td>
                </tr>
              ) : null
            ))}
          </tbody>
        </table>
        {user?.role != 'manager' ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        }
        <div className="d-flex justify-content-around">
          <button className={`btn btn-outline-info ${next >= contactForm?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
          <h3 className="text-light"> {contactForm?.length}/ {prev} </h3>
          <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
        </div>
      </div>
    </div>
  )
}

export default HonorBoard