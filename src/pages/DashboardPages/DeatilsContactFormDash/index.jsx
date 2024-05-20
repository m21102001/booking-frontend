import { SidebarDashboard } from '@/layout';
import axios from '@/api/axios';
import { useEffect, useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const DeatilsContactFormDash = () => {
  const item = useLocation()?.state?.item
  const [loading, setLoading] = useState()
  const [courses, setCourseData] = useState([])

  useEffect(() => {
    setLoading(true);
    axios.get(`contact/${item?._id}`)
      .then((response) => {
        setCourseData(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        setLoading(false);
      });
    }, []);
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تفاصيل طلب التواصل   </h2>
        </div>
        <Link to={'/dash/contact-form'} className='mb-3 d-flex flex-row-reverse'>
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
                        <p className="text-muted mb-0">{courses?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">البريدالالكترونى</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{courses?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{courses?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">العنوان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{courses?.address}</p>
                      </div>
                    </div>
                    <hr />
                    {/* <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">اسم الشركة</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{courses?.company}</p>
                      </div>
                    </div>
                    <hr /> */}
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">محتوى الرسالة</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{courses?.message}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الوقت</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{courses?.createdAt?.slice(11,16)}/ {courses?.createdAt?.slice(0,10)}</p>
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

export default DeatilsContactFormDash