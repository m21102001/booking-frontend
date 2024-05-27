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
import { toast } from 'react-toastify';
const AccountProfile = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [RequestCourses, setRequestCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [consultation, setConsultation] = useState([])
  const [equity, setEquity] = useState('')

  useEffect(() => {
    setLoading(true);
    axios
      .get(`courses/my-courses`)
      .then((response) => {
        setLoading(false);
        setCourses(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });
    axios.get('courses/request')
      .then((response) => {
        setLoading(false);
        setRequestCourses(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });

  }, []);

  useEffect(() => {
    setLoading(true);
    axios.get(`cons-tickets/mentor/${user?._id}`)
      .then((response) => {
        setLoading(false)
        setConsultation(response.data)
      })
      .catch((error) => {
        setLoading(false);
      });

  }, [])
  const handelDelete = async (id) => {
    setLoading(true);
    await axios
      .delete(`courses/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then((response) => {
        axios.get('/courses/').then((response) => {
          setConsultation(response.data)
          setLoading(false);
        });
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const depositRequest = async (e) => {
    e.preventDefault()
    setLoading(true)
    await axios.post('mentors/deposite-request',
      {
        equity: equity,
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }

    ).then(res => {
      setLoading(false)
      toast.success('تم ارسال طلب بنجاح');

    }).catch((error) => {
      setLoading(false);
      toast.error('حدث خطأ ما');
    });
  }

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
                    {user?.role == 'mentor' ? (
                      <img
                        src={`${import.meta.env.VITE_IMAGE_URL}${user?.image}`}
                        alt={user?.name}
                        className="img-fluid img-thumbnail mt-4 mb-2"
                        style={{ width: '150px', zIndex: '1' }}
                      />
                    ) : (
                      <img
                        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                        alt="Generic placeholder image"
                        className="img-fluid img-thumbnail my-4"
                        style={{ width: '150px', zIndex: '1' }}
                      />
                    )}
                    <Link
                      to={`/auth/profile/edit-profile/update-password`}
                      className="btn btn-outline-dark"
                      style={{ zIndex: 1 }}
                      data-mdb-ripple-color="dark"
                    >
                      تعديل كلمة المرور
                    </Link>
                  </div>
                  <div className="ms-3" style={{ marginTop: '130px' }}>
                    <h5>{user?.name}</h5>
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
                      <div className='d-flex justify-content-between align-item-center'>
                        <p className="lead text-center fw-bold mb-1">
                          تفاصيل عن المستخدم
                        </p>
                        <Link
                          to={`/auth/profile/edit-profile`}
                          className="btn btn-outline-dark"
                          style={{ zIndex: 1 }}
                          data-mdb-ripple-color="dark"
                        >
                          Edit profile
                        </Link>
                      </div>
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
                                {user?.role == 'mentor' ? (
                                  <>
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
                                        <p className="mb-0">معدل الخصم</p>
                                      </div>
                                      <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                          {user?.fees} %
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <p className="mb-0">المجال</p>
                                      </div>
                                      <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                          {user?.field}
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <p className="mb-0">محفظتى</p>
                                      </div>
                                      <div className="col-sm-9">
                                        <p className="text-muted mb-0">
                                          {user?.balance} ريال سعودى
                                        </p>
                                      </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                      <div className="col-sm-3">
                                        <p className="mb-0">طلب سحب نقدى</p>
                                      </div>
                                      <div className="col-sm-9">
                                        <form onSubmit={depositRequest}>
                                          <div className="mb-3">
                                            <input
                                              type="number"
                                              className="form-control"
                                              aria-describedby="numberHelp"
                                              placeholder='200 ريال سعودى'
                                              value={equity}
                                              onChange={(e) => setEquity(e.target.value)}
                                              required
                                            />
                                          </div>
                                          <button type="submit" className="btn btn-outline-dark">سحب مبلغ</button>
                                        </form>

                                        <form >
                                        </form>
                                      </div>
                                    </div>
                                    <hr />
                                  </>
                                ) : null}
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
                                {/* {user?.active == true ? (
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
                                    <hr />
                                  </>
                                ) : null} */}

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  {user?.role == 'mentor' ? (
                    <>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="lead fw-normal mb-0">
                          الاستشارات المتاحة
                        </p>
                        <p className="mb-0">
                          <Link
                            to={'/auth/reservation-ticket'}
                            className="text-bold fs-4 text-decoration-underline"
                          >
                            الكل
                          </Link>
                        </p>
                        <p>
                          <Link
                            to={'/auth/create-reservation-ticket'}
                            className="text-bold fs-5 text-decoration-underline"
                          >
                            انشاء استشارة جديدة
                          </Link>
                        </p>
                      </div>
                      <div className=" row g-2">
                        <div className="container text-center pt-5">
                          {!loading && consultation?.data?.map((item, index) => (
                            index < 3 ? (

                              <Link
                                // to={`/auth/shop`}
                                to={`/auth/reservation-ticket`}
                                state={{ item }}
                                key={index}
                                className="row row-striped shadow-lg p-3 mb-5 bg-body rounded"
                              >
                                <div className="col-2 text-right">
                                  <h1 className="display-4">
                                    <span className="badge badge-secondary date">
                                      {item?.day?.slice(8, 10)}
                                    </span>
                                  </h1>
                                  <h2>
                                    {item?.day?.slice(5, 7)}
                                  </h2>
                                </div>
                                <div className="col-10 fs-4 text-end">
                                  <div className="mb-3 d-flex justify-content-between align-items-start">
                                    <h3 className="text-uppercase">
                                      <strong>
                                        {item?.title}
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
                                      {item?.startDate}
                                    </li>
                                    <li className="list-inline-item mx-3">
                                      <MdTimer
                                        size={30}
                                        color={'var(--gold-color)'}
                                      />
                                      {item?.duration}
                                      دقيقة
                                    </li>
                                    <li className="list-inline-item mx-3">
                                      <ImLocation2 size={30} color={'blue'} />
                                      {item?.type}
                                    </li>
                                  </ul>
                                  <ul className="list-inline">
                                    <li className="list-inline-item mx-3">
                                      <FaMoneyBillAlt size={30} color={'#198754'} />
                                      {item?.price}
                                      جنية
                                    </li>
                                  </ul>
                                </div>
                              </Link>
                            ) : null
                          ))}
                        </div>
                      </div>
                    </>
                  ) : null}
                  {user?.role == 'mentor' ? (
                    <>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <p className="lead fw-normal mb-0">كورساتى </p>
                        {/* <p className="mb-0">
                          <a href="#!" className="text-muted">
                            الكل
                          </a>
                        </p> */}
                        <p>
                          <Link
                            to={'/auth/create-new-course'}
                            className="text-bold fs-5 text-decoration-underline"
                          >
                            انشاء كورس جديد
                          </Link>

                        </p>
                      </div>
                      <div className=" row g-2">
                        {courses?.data?.map((item, index) => (
                          <div
                            key={index}
                            className="col-sm-12 col-md-4 col-lg-3 shadow p-3 m-2 bg-body rounded text-end"
                          >
                            <LazyLoadImage
                              src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
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
                              className="d-grid gap-2 mb-3"
                            >
                              <button className="btn btn-primary" type="button">
                                تفاصيل
                              </button>
                            </Link>
                            <Link
                              to={`/consault-store-item/update-course-detalis/${item?._id}`}
                              state={{ item }}
                              className="d-grid gap-2 mb-3 "
                            >
                              <button
                                className="btn btn-info"
                                type="button"
                              >
                                تعديل
                              </button>
                            </Link>
                            <Link
                              className="d-grid gap-2"
                            >
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => handelDelete(item._id)}
                              >
                                حذف
                              </button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    user?.role == 'user' ? (
                      <>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <p className="lead fw-normal mb-0">الكورسات تم شرائها</p>
                          <p className="mb-0">
                            <a href="#!" className="text-muted">
                              الكل
                            </a>
                          </p>
                          <p>
                          </p>
                        </div>
                        <div className=" row g-2">
                          {RequestCourses?.data?.map((item, index) => (
                            <div
                              key={index}
                              className="col-sm-12 col-md-4 col-lg-3 shadow p-3 m-2 bg-body rounded text-end"
                            >
                              <h4 className="mt-n1 my-3 fw-semibold">
                                عنوان الكورس: {item?.course?.title}
                              </h4>
                              <p className="fw-semibold">
                                اسم المحاضر: {' '}
                                <span className="text-danger">{item?.user?.name}</span>{' '}
                                ريال سعودى
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
                      </>
                    ) : null
                  )}
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