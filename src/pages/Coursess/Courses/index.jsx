import { Footer, Navbar } from '@/layout';
import axios from '@/api/axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '@/components/GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Courses = () => {
  const item = useLocation()?.state?.item;
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState([]);
  const [categorya, setCategory] = useState([]);
  const [categoryaShow, setCategoryShow] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`courses`)
      .then((response) => {
        setCourseData(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  let fetchContactForm = {
    method: 'get',
    url: 'cons-fields/',
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(fetchContactForm)
      .then((response) => {
        setCategory(response.data);
        console.log('xxxxx', response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const getInitialState = () => {
    let value = item?.option;
    if (value == null) {
      value = 'selectAll';
    }
    return value;
  };

  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    // axios.get(`courses/field/${value}`)
    axios
      .get(`courses/field/تكنولوجيا`)
      .then((response) => {
        setCategoryShow(response.data);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  console.log('log', categoryaShow);
  ///////////////////////////////
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(10);

  const handelprev = () => {
    setPrev((count) => count - 10);
    setNext((count) => count - 10);
    if (prev <= 0) {
      setPrev(0);
      setNext(10);
    }
  };
  const handelNext = () => {
    setNext((count) => count + 10);
    setPrev((count) => count + 10);
    if (next < 10) {
      setPrev(0);
      setNext(10);
    }
  };

  return (
    <>
      <Navbar />
      <div className="coursers-open goldNews py-5">
        <div className="m-auto d-flex justify-content-center mb-5">
          <span
            style={{
              zIndex: '0',
              backgroundColor: '#f8d25c',
              width: '50px',
              height: '3px',
              margin: 'auto 20px',
            }}
          ></span>
          <h2 className="text-center comunation fs-1 fw-bold">
            الكورسات المتاحة{' '}
          </h2>
          <span
            style={{
              zIndex: '0',
              backgroundColor: '#f8d25c',
              width: '50px',
              height: '3px',
              margin: 'auto 20px',
            }}
          ></span>
        </div>
        <div className="row align-items-start m-auto">
          <div className="col-md-3 d-flex">
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={value}
              onChange={handleChange}
            >
              <option defaultValue selected value="selectAll">
                كل الانواع
              </option>
              {!loading &&
                categorya?.document?.map((item, index) => (
                  <option key={index} value={item?.field}>
                    {item?.field}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-md-12">
            <div className="m-auto d-flex justify-center">
              <>
                <div className="container">
                  <div className={styles['home-grid']}>
                    {categoryaShow?.data?.map((item, index) => (
                      // item?.option == value && item?.option !== 'selectAll' ? (
                      <Link
                        key={index}
                        to={`/consault-store-item/course-detalis/${item._id}`}
                        state={{ item: item }}
                      >
                        <div className={styles['gold-div']}>
                          <div className="title-card">
                            <LazyLoadImage
                              src={`${import.meta.env.VITE_IMAGE_URL}${
                                item?.image
                              }`}
                              alt={item?.title}
                              loading="lazy"
                            />
                            <div className="news-date">
                              <label className="mx-2">
                                {' '}
                                {item?.createdAt?.slice(0, 10)}
                              </label>
                              <label className="news-date-time mx-2">
                                {' '}
                                {item?.createdAt?.slice(11, 16)}
                              </label>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-center fw-bold">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                      // ) : (null
                      // value == 'selectAll' ? (
                      //   courseData?.document?.map((item, index) => (
                      //     // index >= prev && index <= next ? (
                      //     <Link
                      //       key={index}
                      //       to={`/consault-store-item/course-detalis/${item?._id}`}
                      //       state={{ item: item }}
                      //     >
                      //       <div className={styles['gold-div']}>
                      //         <div className='title-card'>
                      //           <LazyLoadImage
                      //             src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                      //             alt={item?.title}
                      //             loading="lazy"
                      //           />
                      //           <div className="news-date">
                      //             <label className="mx-2"> {item?.createdAt?.slice(0, 10)}</label>
                      //             <label className="news-date-time mx-2"> {item?.createdAt?.slice(11, 16)}</label>
                      //           </div>
                      //         </div>
                      //         <div>
                      //           <h3 className='text-center fw-bold'>{item.title}</h3>
                      //         </div>
                      //       </div>
                      //     </Link>
                      //     // ) : null
                      //   ))
                      // ) : ('nnn')
                      // )
                    ))}
                  </div>
                  {value == 'selectAll' ? (
                    <div className="pt-5 mt-5 d-flex justify-content-around ">
                      <button
                        className={`btn btn-outline-info ${
                          next >= categoryaShow?.length ? 'disabled' : ''
                        }`}
                        onClick={handelNext}
                      >
                        {' '}
                        next
                      </button>
                      <button
                        className={`btn btn-outline-info ${
                          prev == 0 ? 'disabled' : ''
                        }`}
                        onClick={handelprev}
                      >
                        {' '}
                        prev
                      </button>
                    </div>
                  ) : null}
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
