import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import { Footer, Navbar } from "@/layout"
import axios from "@/api/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { authenticated, useAuth } from "@/context/Auth";
import { MdOutlineArrowBack } from "react-icons/md";

const DetailsPlaylistDevelopment = () => {
  const authed = authenticated()
  const { user } = useAuth()
  const item = useLocation()?.state?.item
  const id = useParams().id;
  const [loading, setLoading] = useState(false);
  const [getvideos, setGetvideos] = useState([])
  const [payment, setPayment] = useState([])
  const [pay, setPay] = useState([])
  const [course, setcourse] = useState()

  useEffect(() => {
    setLoading(true);
    axios.get(`/playlists/pay/${id}`)
      .then((response) => {
        setPayment(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });

  }, [])

  useEffect(() => {
    setLoading(true);
    axios.get(`/playlists/${id}/videos`)
      .then((response) => {
        setGetvideos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setPay(error?.status)
      });
  }, []);
  useEffect(() => {
    axios.get(`courses/${id}`)
      .then((response) => {
        setcourse(response.data.document);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setPay(error?.status)
      });


  }, [id])

  return (
    <div style={{ backgroundColor: "var(--darkblue-color)" }}>
      <Navbar />
      <div className="d-flex justify-content-between mx-4" >
        <Link to={'/development/create-video'} state={{item}} className='mb-3 d-flex flex-row-reverse'>
          <button type="button" className="fw-bold text-light bacground-color-darkblue fs-5 mt-3 ms-3 px-3 back-details-button"
          >اضافة فيديو</button>
        </Link>
        <Link to={'/auth/profile'} className='mb-3 d-flex flex-row-reverse'>
          <button type="button" className="fw-bold text-light bacground-color-darkblue fs-5 mt-3 ms-3 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
      </div>
      <div className="row align-items-start m-auto" style={{ backgroundColor: "var(--darkblue-color)" }}>
        <div className='m-auto d-flex justify-center'>
          <>
            <div className="container gold-dash text-end">
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <LazyLoadImage
                              src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                              alt={item?.title}
                              loading="lazy"
                              style={{ width: 'web' }}
                            />
                          </div>
                          <div className="row pt-5">
                            <div className="col-sm-3">
                              <p className="mb-0">  الاسم </p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{item?.title}</p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0"> السعر</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{item?.price} جنية مصري </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0"> الوصف الكامل</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">{item?.description}</p>
                            </div>
                          </div>

                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0">  مشاهده الفيديوهات</p>
                            </div>
                            {authed == false ? (
                              <Link
                                className="col-sm-9"
                                to={`/auth/login`}
                              >
                                <button className="text-light fs-3 px-2">شراء الكورس</button>
                              </Link>
                            ) : (
                              user?.role != 'mentor' ? (
                                <div className="col-sm-9">
                                  {!loading && payment.data == undefined && pay != 401 && authed == true ? (
                                    <Link
                                      to={`/development/details-video/${course?._id}`}
                                      state={{ course, item }}
                                    >مشاهده الفيديوهات</Link>
                                  ) : (
                                    <button>
                                      <a
                                        className="text-light fs-3 px-2"
                                        href={payment?.data}
                                        target="_blank"
                                        rel="noreferrer">
                                        شراء الكورس
                                      </a>
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  to={`/development/details-video/${item?._id}`}
                                  state={{ course, item }}
                                >مشاهده الفيديوهات</Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        </div>
        <div className='m-auto d-flex justify-content-center py-5'>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> تعليقات على الكورس</h2>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-start align-items-center">
                    {/* <img className="rounded-circle shadow-1-strong ms-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="60"
                      height="60" /> */}
                    <div>
                      <h6 className="fw-bold text-primary text-end mb-1">محمد احمد</h6>
                      <p className="text-muted small mb-0">
                        22/10/2024
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 mb-4 pb-2 text-end">
                    عند الانتهاء من العمل وتسليمه كاملاً يمكنك الضغط على زر تسليم الخدمة. إذا لم يكن لدى المشتري أي ملاحظات
                    أو تعديلات سيقوم بالموافقة على طلب التسليم وينتقل رصيد الخدمة إلى حسابك في خمسات،
                    ثم يمكنك سحبه إلى حسابك في باي بال أو الحسال البنكي من خلال الخطوات الموضحة في مقالة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default DetailsPlaylistDevelopment