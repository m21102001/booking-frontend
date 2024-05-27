import { SidebarDashboard } from '@/layout'
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import axios from "@/api/axios";
import { useEffect, useState } from 'react';
import { useAuth } from "@/context/Auth";
const DetailsDepositDash = () => {
  const user = useAuth()
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState(false);
  const [deposit, setDeposit] = useState(null)
  useEffect(() => {
    setLoading(true);
    if (user.role == 'manager') {
      axios.get(`mentors/deposite-request/${item?._id}`, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => {
          setLoading(false);
          setDeposit(response.data?.data);
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }, []);
  return (
    <div className="dashboard d-flex flex-row">
      {loading && <div className='loading'></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تفاصيل الفاتورة </h2>
        </div>
        <Link to={'/dash/deposit/cash'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <section style={{ backgroundColor: "#eee" }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الاسم بالكامل</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{deposit?.mentor?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">البريدالالكترونى</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{deposit?.mentor?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{deposit?.mentor?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">العنوان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{deposit?.mentor?.address}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">المحفظة</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{deposit?.mentor?.balance}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">نسبة الخصم</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{deposit?.mentor?.fees}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">قيمة السحب</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{deposit?.equity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DetailsDepositDash