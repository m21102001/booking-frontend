<<<<<<< Updated upstream
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
=======
import { Footer, Navbar } from '@/layout';
import { useState } from 'react';

const AccountProfile = () => {
  const [avatarImage, setAvatarImage] = useState(
    'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
  );

  // Function to handle click event of the "Edit profile" button
  const handleEditProfile = () => {
    // Change the avatar image URL to the new image URL
    setAvatarImage('NEW_IMAGE_URL_HERE');
  };
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <Link
                      to={`/auth/profile/edit-profile`}
                      className="btn btn-outline-dark"
                      style={{ zIndex: 1 }}
                      data-mdb-ripple-color="dark"
                    >
                      {/* <button
=======
                    <button
>>>>>>> Stashed changes
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: '1' }}
<<<<<<< Updated upstream
=======
                      onClick={handleEditProfile}
>>>>>>> Stashed changes
                    >
                      Edit profile
                    </button> */}
                      Edit profile
                    </Link>
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
<<<<<<< Updated upstream
                    <h5>{user?.name}</h5>
=======
                    <h5>Andy Horwitz</h5>
>>>>>>> Stashed changes
                    <p>New York</p>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: '#f8f9fa' }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">253</p>
                      <p className="small text-muted mb-0">Photos</p>
                    </div>
                    {/* <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Followers</p>
                    </div> */}
                    {/* <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Following</p>
                    </div> */}
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
<<<<<<< Updated upstream
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
=======
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                      <p className="font-italic mb-1">Web Developer</p>
                      <p className="font-italic mb-1">Lives in New York</p>
                      <p className="font-italic mb-0">Photographer</p>
                    </div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
                          to={`/dash/details-playlist/${item?._id}`}
                          state={{ item }}
                          className="d-grid gap-2"
                        >
                          <button className="btn btn-primary" type="button">
                            تفاصيل
                          </button>
                        </Link>
                      </div>
                    ))}
=======
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col mb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
                    <div className="col">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </div>
>>>>>>> Stashed changes
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
