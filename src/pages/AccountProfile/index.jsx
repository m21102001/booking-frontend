import { useEffect, useState } from 'react';
import { Footer, Navbar } from '@/layout';
import { useAuth } from '@/context/Auth';
import axios from '@/api/axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { MdTimer } from 'react-icons/md';
import { FaClock } from 'react-icons/fa6';
const AccountProfile = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`courses`)
      .then((response) => {
        setLoading(false);
        setCourses(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  console.log('user', user);

  return (
    <>
      {loading && <div className="loading"></div>}
      <Navbar />
      <section className="mx-2 gradient-custom-2">
        <div className="my-5">
          <div className="row d-flex justify-content-center align-items-center h-100 mx-1">
            <div className="col col-lg-12 col-xl-10">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: '#000', height: '200px' }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: '150px' }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: '150px', zIndex: '1' }}
                    />
                    <Link
                      to={`/auth/profile/edit-profile`}
                      className="btn btn-outline-dark"
                      style={{ zIndex: 1 }}
                      data-mdb-ripple-color="dark"
                    >

                      Edit profile
                    </Link>
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <h5>{user?.name}</h5>

                    <p>New York</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: '#f8f9fa' }}
                >
                </div>

                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <section>
                      <p className="lead text-end fw-normal mb-1">
                        تفاصيل عن المستخدم
                      </p>
                      <div className=" pb-4 pt-3 text-start">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="card mb-4">
                              <div className="card-body text-end">
                                <div className="row">
                                  <div className="col-sm-3">
                                    <p className="mb-0">الاسم بالكامل</p>
                                  </div>
                                  <div className="col-sm-9">
                                    <p className="text-muted mb-0">
                                      {user?.name
                                        ? user?.name
                                        : 'الاسم غير موجود'}
                                    </p>
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                  <div className="col-sm-3">
                                    <p className="mb-0">البريد الالكترونى</p>
                                  </div>
                                  <div className="col-sm-9">
                                    <p className="text-muted mb-0">
                                      {user?.email
                                        ? user?.email
                                        : 'البريد الالكترونى غير موجود'}
                                    </p>
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                  <div className="col-sm-3">
                                    <p className="mb-0">رقم الهاتف</p>
                                  </div>
                                  <div className="col-sm-9">
                                    <p className="text-muted mb-0">
                                      {user?.phone
                                        ? user?.phone
                                        : 'رقم الهاتف غير موجود'}
                                    </p>
                                  </div>
                                </div>
                                <hr />
                                <div className="row">
                                  <div className="col-sm-3">
                                    <p className="mb-0">العضوية </p>
                                  </div>
                                  <div className="col-sm-9">
                                    <p className="text-muted mb-0">
                                      {user?.role
                                        ? user?.role
                                        : 'قم بتسجيل الدخول'}
                                    </p>
                                  </div>
                                </div>
                                {user?.active == true ? (
                                  <>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <p className="mb-0">
                                          الاستشارات الحضورية المتاحة مجانا{' '}
                                        </p>
                                      </div>
                                      <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                          {user?.freeOflineConsultations
                                            ? user?.freeOflineConsultations
                                            : 'لا يوجد استشارات متاحة'}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <p className="mb-0">
                                          الاستشارات الهاتفية المتاحة مجانا{' '}
                                        </p>
                                      </div>
                                      <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                          {user?.freeOnlineConsultations
                                            ? user?.freeOnlineConsultations
                                            : 'لا يوجد استشارات متاحة '}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <p className="mb-0">
                                          تاريخ بداية الانضمام{' '}
                                        </p>
                                      </div>
                                      <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                          {user?.createdAt?.slice(0, 10)}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <hr /> */}
                                  </>
                                ) : null}
                                {/* <div className="row">
                                  <div className="col-sm-3">
                                    <p className="mb-0">محفظتى</p>
                                  </div>
                                  <div className="col-sm-9">
                                    <Link to={'/auth/my-wallet'} className="mb-0 text-primary fw-bold">محفظتى</Link>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  {user?.role != 'user' ? (
                    <>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="lead fw-normal mb-0">
                          الاستشارات المتاحة
                        </p>
                        <p className="mb-0">
                          <Link
                            to={'/auth/reservation-ticket'}
                            className="text-muted"
                          >
                            الكل
                          </Link>
                        </p>
                        <p>
                          <Link
                            to={'/auth/create-reservation-ticket'}
                            className="text-muted"
                          >
                            انشاء استشارة جديدة
                          </Link>

                        </p>
                      </div>
                      <div className=" row g-2">
                        <div className="container text-center pt-5">
                          {/* {!loading && consultation?.data?.map((item, index) => ( */}
                          <Link
                            // to={`/auth/shop`}
                            to={`/auth/reservation-ticket`}
                            // state={{ item }}
                            // key={index}
                            className="row row-striped shadow-lg p-3 mb-5 bg-body rounded"
                          >
                            <div className="col-2 text-right">
                              <h1 className="display-4">
                                <span className="badge badge-secondary date">
                                  {/* {item?.day?.slice(8, 10)} */}
                                  08
                                </span>
                              </h1>
                              <h2>
                                {/* {item?.day?.slice(5, 7)} */}
                                12
                              </h2>
                            </div>
                            <div className="col-10 fs-4 text-end">
                              <div className="mb-3 d-flex justify-content-between align-items-start">
                                <h3 className="text-uppercase">
                                  <strong>
                                    {/* {item?.title}*/} مثال للاستشارات المتاحة
                                  </strong>
                                </h3>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                >
                                  ادفع الان
                                </button>
                              </div>
                              <ul className="list-inline">
                                <li className="list-inline-item mx-3">
                                  <FaClock
                                    size={30}
                                    color={'var(--gold-color)'}
                                  />
                                  {/* {item?.startDate} */}
                                  17:10
                                </li>
                                <li className="list-inline-item mx-3">
                                  <MdTimer
                                    size={30}
                                    color={'var(--gold-color)'}
                                  />
                                  {/* {item?.duration}  */}
                                  44 دقيقه
                                </li>
                                <li className="list-inline-item mx-3">
                                  <ImLocation2 size={30} color={'blue'} />
                                  {/* {item?.type} */}
                                  حضورية
                                </li>
                              </ul>
                              <ul className="list-inline">
                                <li className="list-inline-item mx-3">
                                  <FaMoneyBillAlt size={30} color={'#198754'} />
                                  {/* {item?.price} */}
                                  50 جنية
                                </li>
                              </ul>
                            </div>
                          </Link>
                          {/* ))} */}
                          {/* <h3 className="fw-bold text-center">سيتم عرض التذاكر عندما تكون متاحة</h3> */}
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">الكورسات الاخيرة</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        الكل
                      </a>
                    </p>
                  </div>
                  <div className=" row g-2">
                    {courses?.document?.map((item, index) => (
                      <div
                        key={index}
                        className="col-sm-12 col-md-4 col-lg-3 shadow p-3 m-2 bg-body rounded text-end"
                      >
                        <LazyLoadImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                          // src={item?.image}
                          alt={item?.title}
                          className="w-100 rounded-3"
                        />
                        <h4 className="mt-n1 my-3 fw-semibold">
                          {item?.title}
                        </h4>
                        <p className="fw-semibold">
                          سعر الكورس{' '}
                          <span className="text-danger">{item?.price}</span>{' '}
                          جنية
                        </p>
                        <Link
                          to={`/consault-store-item/course-detalis/${item?._id}`}
                          state={{ item }}
                          className="d-grid gap-2"
                        >
                          <button className="btn btn-primary" type="button">
                            تفاصيل
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AccountProfile;