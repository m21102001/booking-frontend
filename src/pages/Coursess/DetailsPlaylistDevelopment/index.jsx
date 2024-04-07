import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from 'react-router-dom';
import { Footer, Navbar } from "@/layout"
import axios from "@/api/axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { authenticated, useAuth } from "@/context/Auth";
import { MdOutlineArrowBack } from "react-icons/md";
import { toast } from "react-toastify";
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
  const [message, setMessage] = useState()
  const [comment, setComment] = useState([])
  const [showMore, setShowMore] = useState(false)
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

  useEffect(() => {
    axios.get(`comments/course/${id}`)
      .then((response) => {
        setComment(response.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setPay(error?.status)
      });
  }, [])

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(`comments/${item?._id}`, {
          text: message,
        }, { credentials: true })
        .then((response) => {
          // console.log('created successful', response.data);
          setMessage('')
          toast.success('تم اضافة تعليق بنجاح');
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
      console.log('message', err.message);
      toast.error('خطأ فى الارسال');
    }
    setLoading(false)
    return;
  };

  return (
    <div style={{ backgroundColor: "var(--darkblue-color)" }}>
      <Navbar />
      <div className="d-flex justify-content-between mx-4" >
        <Link to={'/development/create-video'} state={{ item }} className='mb-3 d-flex flex-row-reverse'>
          <button type="button" className="fw-bold text-light bacground-color-darkblue fs-6 mt-3  back-details-button"
          >اضافة فيديو</button>
        </Link>
        <Link to={'/auth/profile'} className='mb-3 d-flex flex-row-reverse'>
          <button type="button" className="fw-bold text-light bacground-color-darkblue fs-5 mt-3 ms-3 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
      </div>
      <div className="row align-items-start m-auto mt-5" style={{ backgroundColor: "var(--darkblue-color)" }}>
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
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> اضافة تعليق على الكورس</h2>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className='card-form form-control container rounded-4 text-end my-4'>
                <p className="pt-3 fw-bold fs-5 ">سوف يتم ظهور التعليق للجميع</p>
                <form className="row g-3" onSubmit={hanelSubmit}>
                  <div className="col-12">
                    <label
                      htmlFor="inputAddress2"
                      className="form-label"
                    >اضافة تعليق </label>
                    <textarea
                      name='exampleFormControlTextarea1'
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder='اضافة تعليق ...'></textarea>
                  </div>
                  <div className="col-12">
                    {!loading && (
                      <button className='d-flex m-auto fs-4 send'>
                        إرسال
                      </button>
                    )}
                    {loading && (
                      <button className='d-flex m-auto send' disabled>
                        جاري الارسال ...
                      </button>
                    )}

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='m-auto d-flex justify-content-center py-5'>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> تعليقات على الكورس</h2>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              {comment?.map((item, index) => (
                <div className="card mb-5" key={index}>
                  <div className="card-body pb-0">
                    <p className="text-end">{item?.text}</p>
                    <p className="text-end mb-0">{item?.createdAt?.slice(0, 10)}</p>
                  </div>
                  <hr />
                  {/* <form className="mx-3"> */}
                  <h3 className="text-end text-dark fs-4 lh-lg mx-3">
                    {showMore ? "رد على التعليق" : ""}
                    <div className="mb-3">
                      <button
                        onClick={() => setShowMore(!showMore)}
                        className="btn btn-dark px-4 mx-3"
                        style={{ color: 'var(--gold-color)', cursor: 'pointer', transitionTimingFunction: "ease" }}>{showMore ? "اخفاء" : " ظهور الرد"}
                      </button>
                    </div>
                  </h3>
                  {/* </form> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}

export default DetailsPlaylistDevelopment
