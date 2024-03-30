import { SidebarDashboard } from '@/layout'
import axios from '@/api/axios';
import { useEffect, useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Fragment } from 'react';

const DetailsMentorsDetailsDash = () => {
  const item = useLocation()?.state?.item
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`mentors/${item?._id}`)
      .then((res) => {
        setData(res.data.data);
      }),
      (err) => { console.error(err) };
  }, [])
  console.log(data);
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تفاصيل المستخدم </h2>
        </div>
        <Link to={'/dash/mentors'} className='mb-3 d-flex flex-row-reverse'>
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
                      <div className="col-sm-12">
                        <LazyLoadImage
                          className="text-muted mb-0"
                          src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                          alt={data?.name}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الاسم بالكامل</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">البريدالالكترونى</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">تاريخ الميلاد </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.birthdate?.slice(0, 10)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">العنوان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.address}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">المجال</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.field}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row" >
                      <div className="col-sm-3">
                        <p className="mb-0">حساب فيسبوك</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0"><a href={data?.socialMedia?.facebook} target="_blank" rel="noopener noreferrer">facebook</a></p>
                      </div>
                    </div>
                    <hr />
                    <div className="row" >
                      <div className="col-sm-3">
                        <p className="mb-0">حساب انستغرام</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0"><a href={data?.socialMedia?.instagram} target="_blank" rel="noopener noreferrer">instagram</a></p>
                      </div>
                    </div>
                    <hr />
                    <div className="row" >
                      <div className="col-sm-3">
                        <p className="mb-0">حساب لينكدان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0"><a href={data?.socialMedia?.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a></p>
                      </div>
                    </div>
                    <hr />
                    <div className="row" >
                      <div className="col-sm-3">
                        <p className="mb-0">حساب تويتر</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0"><a href={data?.socialMedia?.twitter} target="_blank" rel="noopener noreferrer">twitter</a></p>
                      </div>
                    </div>
                    <hr />

                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الصلاحية</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{data?.role}</p>
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

export default DetailsMentorsDetailsDash