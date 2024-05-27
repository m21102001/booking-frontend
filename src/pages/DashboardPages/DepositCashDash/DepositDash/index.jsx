import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios";
import { useAuth } from "@/context/Auth";
import { toast } from "react-toastify";

const DepositDash = () => {
  const user = useAuth()
  const [loading, setLoading] = useState(false);
  const [accepted, setAccepted] = useState([])
  const [pending, setPending] = useState([])

  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get('/mentors/accepted-deposites', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          setLoading(false);
          setAccepted(response.data);
        })
        .catch((error) => {
          setLoading(false);
        });

      axios?.get(`mentors/pending-deposites/`)
        .then(res => {
          setLoading(false);
          setPending(res.data);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, []);

  const handelAccept = async (id) => {
    setLoading(true)
    axios?.post(`mentors/accept-deposite/${id}`)
      .then(res => {
        setLoading(false)
        toast.success('تمت العملية بنجاح')
      })
      .catch((error) => {
        setLoading(false)
        toast.error('حدث خطأ ما')
      });

  }
  const tableRef = useRef(null);
  return (
    <div className="dashboard d-flex flex-row">
      {loading && <div className="loading"></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'> طالبات السحب </h2>
        </div>
        <table ref={tableRef} className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">رقم العميل </th>
              <th scope="col">القيمة </th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && pending?.data?.map((item, index) => (
              item?.accepted == false ? (
                <tr key={index} className="table-active">
                  <th scope="row">{index + 1}</th>
                  <td>{item?.mentor}</td>
                  <td>{item?.equity}</td>
                  <td>
                    <Link
                      to={`/dash/deposit/cash/details/${item._id}`}
                      state={{ item: item }}
                    >
                      <button className="btn btn-outline-info mx-2 px-4">التفاصيل</button>
                    </Link>
                    <button onClick={() => handelAccept(item?._id)} className="btn btn-info mx-2 px-4">قبول السحب</button>
                  </td>
                </tr>
              ) : null
            ))}
            {!loading && accepted?.data?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.mentor}</td>
                <td>{item?.equity}</td>
                <td>
                  <Link
                    to={`/dash/deposit/cash/details/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-info mx-2 px-4">التفاصيل</button>
                  </Link>
                    <button className="btn btn-outline-success mx-2 px-4" disabled>تم قبول السحب</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading == true ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        }
      </div>
    </div>
  )
}

export default DepositDash