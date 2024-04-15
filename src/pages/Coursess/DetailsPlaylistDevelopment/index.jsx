import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Footer, Navbar } from '@/layout';
import axios from '@/api/axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { authenticated, useAuth } from '@/context/Auth';
import { toast } from 'react-toastify';
const DetailsPlaylistDevelopment = () => {
  const authed = authenticated();
  const { user } = useAuth();
  const item = useLocation()?.state?.item;
  const id = useParams().id;
  const [loading, setLoading] = useState(false);
  const [getvideos, setGetvideos] = useState([]);
  const [payment, setPayment] = useState([]);
  const [pay, setPay] = useState([]);
  const [course, setcourse] = useState();
  const [message, setMessage] = useState();
  const [comment, setComment] = useState([]);
  const [showMoreStates, setShowMoreStates] = useState({});
  const [replayComment, setReplayComment] = useState('');

  // Function to toggle showMore for a specific comment
  const toggleShowMore = (index) => {
    setShowMoreStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state for the specific comment
    }));
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/playlists/pay/${id}`)
      .then((response) => {
        setPayment(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/playlists/${id}/videos`)
      .then((response) => {
        setGetvideos(response?.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setPay(error?.status);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`courses/${id}`)
      .then((response) => {
        setcourse(response?.data?.document);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setPay(error?.status);
      });
  }, [id]);
  const hanelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios
        .post(
          `comments/${item?._id}`,
          {
            text: message,
          },
          { credentials: true }
        )
        .then((response) => {
          // console.log('created successful', response.data);
          setMessage('');
          toast.success('تم اضافة تعليق بنجاح');
          setLoading(false);
        });
    } catch (err) {
      setLoading(false);
      console.log('message', err.message);
      toast.error(err.message);
    }
    setLoading(false);
    return;
  };

  // useEffect(() => {
  //   axios
  //     .get(`comments/course/${id}`)
  //     .then((response) => {
  //       setComment(response?.data?.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setPay(error?.status);
  //     });
  // }, [ id]);

  useEffect(() => {
    axios
      .get(`comments/course/${id}`)
      .then((response) => {
        setComment(response?.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setPay(error?.status);
      });
  }, [message, id]);
console.log('comment',comment);
  const handelReplay = async ({ e, id }) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`replies/${id}`,
        {
          text: replayComment
        },
        { credentials: true }
      )
        .then((response) => {
          setComment('')
          toast.success('تم الرد على التعليق بنجاح');
          setLoading(false);
        })
    } catch (err) {
      setLoading(false);
      console.log('message', err?.message);
      toast.error(err.message);
    }
    setLoading(false);
    return;
  }


  ////////////////pagination///////////
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(5);

  const handelprev = () => {
    setPrev((count) => count - 5);
    setNext((count) => count - 5);
    if (prev <= 0) {
      setPrev(0);
      setNext(5);
    }
  };
  const handelNext = () => {
    setNext((count) => count + 5);
    setPrev((count) => count + 5);
    if (next < 5) {
      setPrev(0);
      setNext(5);
    }
  };
  return (
    <div style={{ backgroundColor: 'var(--darkblue-color)' }}>
      <Navbar />
      <div
        className="row align-items-start m-auto mt-5"
        style={{ backgroundColor: 'var(--darkblue-color)' }}
      >
        <div className="m-auto d-flex justify-center">
          <>
            <div className="container gold-dash text-end">
              <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card mb-4">
                        <div className="card-body">
                          <div className="row">
                            <LazyLoadImage
                              src={`${import.meta.env.VITE_IMAGE_URL}${item?.image
                                }`}
                              alt={item?.title}
                              loading="lazy"
                              style={{ width: 'web' }}
                            />
                          </div>
                          <div className="row pt-5">
                            <div className="col-sm-3">
                              <p className="mb-0"> الاسم </p>
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
                              <p className="text-muted mb-0">
                                {item?.price} جنية مصري{' '}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0"> الوصف الكامل</p>
                            </div>
                            <div className="col-sm-9">
                              <p className="text-muted mb-0">
                                {item?.description}
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div className="row">
                            <div className="col-sm-3">
                              <p className="mb-0"> مشاهده الفيديوهات</p>
                            </div>
                            {authed == false ? (
                              <Link className="col-sm-9" to={`/auth/login`}>
                                <button className="text-light fs-3 px-2">
                                  شراء الكورس
                                </button>
                              </Link>
                            ) : user?.role != 'mentor' ? (
                              <div className="col-sm-9">
                                {!loading &&
                                  payment.data == undefined &&
                                  pay != 401 &&
                                  authed == true ? (
                                  <Link
                                    to={`/development/details-video/${course?._id}`}
                                    state={{ course, item }}
                                  >
                                    مشاهده الفيديوهات
                                  </Link>
                                ) : (
                                  <button>
                                    <a
                                      className="text-light fs-3 px-2"
                                      href={payment?.data}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      شراء الكورس
                                    </a>
                                  </button>
                                )}
                              </div>
                            ) : (
                              <Link
                                to={`/development/details-video/${item?._id}`}
                                state={{ course, item }}
                              >
                                مشاهده الفيديوهات
                              </Link>
                            )}
                          </div>
                          {user?.role == 'mentor' ? (
                            <>
                              <hr />
                              <div className="row">
                                <div className="col-sm-3">
                                  <p className="mb-0"> اضافة فيديو</p>
                                </div>
                                <div className="col-sm-9">
                                  <Link
                                    to={'/development/create-video'}
                                    state={{ item }}
                                    className="mb-3 d-flex flex-row"
                                  >
                                    <button
                                      type="button"
                                      className="fw-bold fs-6  back-details-button"
                                    >
                                      اضافة فيديو
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        </div>
        <div className="m-auto d-flex justify-content-center py-5">
          <span
            style={{
              zIndex: '0',
              backgroundColor: 'var(--gold-color2)',
              width: '50px',
              height: '3px',
              margin: 'auto 20px',
            }}
          ></span>
          <h2
            className="text-center comunation fs-1 fw-bold"
            style={{ color: 'var(--gold-color2)' }}
          >
            {' '}
            اضافة تعليق على الكورس
          </h2>
          <span
            style={{
              zIndex: '0',
              backgroundColor: 'var(--gold-color2)',
              width: '50px',
              height: '3px',
              margin: 'auto 20px',
            }}
          ></span>
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card-form form-control container rounded-4 text-end my-4">
                <p className="pt-3 fw-bold fs-5 ">
                  سوف يتم ظهور التعليق للجميع
                </p>
                <form className="row g-3" onSubmit={hanelSubmit}>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
                      اضافة تعليق{' '}
                    </label>
                    <textarea
                      name="exampleFormControlTextarea1"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="اضافة تعليق ..."
                    ></textarea>
                  </div>
                  <div className="col-12">
                    {!loading && (
                      <button className="d-flex m-auto fs-4 send">إرسال</button>
                    )}
                    {loading && (
                      <button className="d-flex m-auto send" disabled>
                        جاري الارسال ...
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="m-auto d-flex justify-content-center py-5">
          <span
            style={{
              zIndex: '0',
              backgroundColor: 'var(--gold-color2)',
              width: '50px',
              height: '3px',
              margin: 'auto 20px',
            }}
          ></span>
          <h2
            className="text-center comunation fs-1 fw-bold"
            style={{ color: 'var(--gold-color2)' }}
          >
            {' '}
            تعليقات على الكورس
          </h2>
          <span
            style={{
              zIndex: '0',
              backgroundColor: 'var(--gold-color2)',
              width: '50px',
              height: '3px',
              margin: 'auto 20px',
            }}
          ></span>
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              {comment?.data?.map((item, index) => (
                index >= prev && index <= next ? (
                  <div className="card mb-5" key={index}>
                    <div className="card-body pb-0">
                      <p className="text-end">{item?.text}</p>
                      <p className="text-end mb-0">
                        {item?.createdAt?.slice(0, 10)}
                      </p>
                    </div>
                    <hr />
                    {item?.replies?.map((item,index)=>(
                    <h3 key={index} className="text-end text-dark fs-4 lh-lg mx-3">
                      {showMoreStates[index] ? ( item?.text) : ''}
                      <div className="mb-3">
                        <button
                          onClick={() => toggleShowMore(index)}
                          className="btn btn-dark px-4 mx-3"
                          style={{
                            color: 'var(--gold-color)',
                            cursor: 'pointer',
                            transitionTimingFunction: 'ease',
                          }}
                        >
                          {showMoreStates[index] ? 'اخفاء' : ' ظهور الرد'}
                        </button>
                      </div>
                    </h3>
                    ))}

                    {user?._id == item?.owner ? (
                      <form className='container text-end pb-3' onSubmit={(e) => handelReplay({ e, id: item?._id })}>
                        <div className="mb-3">
                          <label
                            htmlFor="replay"
                            className="form-label"
                          >
                            رد على التعليق
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="replay"
                            aria-describedby="replay"
                            value={replayComment}
                            onChange={(e) => setReplayComment(e?.target?.value)}
                            required
                          />
                        </div>
                        <button type="submit" className="btn btn-success px-4">ارسال</button>
                      </form>
                    ) : null}
                  </div>
                ) : null
              ))}
            </div>
            < div className="pt-5 mt-5 d-flex justify-content-around " >
              <button className={`btn btn-outline-info ${next >= comment?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
              <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailsPlaylistDevelopment;
