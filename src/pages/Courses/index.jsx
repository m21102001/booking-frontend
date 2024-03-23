import { Footer, Navbar } from '@/layout';
import axios from '@/api/axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '@/components/GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { goldCategory } from '@/db/data';
const Courses = () => {

  const item = useLocation()?.state?.item;
  const [loading, setLoading] = useState(true)
  const [courseData, setCourseData] = useState([]);


  useEffect(() => {
    setLoading(true);
    axios.get(`courses`)
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
  console.log("bullion store", courseData);

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
      <div className='coursers-open goldNews py-5'>
        <div className='m-auto d-flex justify-content-center mb-5'>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold'>الكورسات المتاحة  </h2>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className="row align-items-start m-auto">
          <div className="col-md-3 d-flex">
            <select
              className="form-select mb-3"
              aria-label="Default select example"
              value={value}
              onChange={handleChange}
            >
              <option defaultValue selected value="selectAll">كل الانواع</option>
              <option value="lang">برمجة</option>
              <option value="primaryschool">هندسة</option>
              <option value="secschool">استشارات اسرية</option>
              <option value="uni">جامعات</option>
            </select>
          </div>
          <div className="col-md-12">
            <div className='m-auto d-flex justify-center'>
              <>
                <div className="container">
                  <div className={styles['home-grid']}>
                    {courseData?.document?.map((item, index) => (
                      item?.option == value && item?.option !== 'selectAll' ? (
                        <Link
                          key={index}
                          to={`/development/details-playlist/${item._id}`}
                          state={{ item: item }}
                        >
                          <div className={styles['gold-div']}>
                            <div className='title-card'>
                              <LazyLoadImage
                                src={'data:image/jpeg;base64,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'}
                                // src={item?.image}
                                alt={item?.title}
                                loading="lazy"
                              />
                              <div className="news-date">
                                <label className="mx-2"> {item?.createdAt?.slice(0, 10)}</label>
                                <label className="news-date-time mx-2"> {item?.createdAt?.slice(11, 16)}</label>
                              </div>
                            </div>
                            <div>
                              <h3 className='text-center fw-bold'>{item.title}</h3>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        value == 'selectAll' ? (
                          index >= prev && index <= next ? (
                            <Link
                              key={index}
                              to={`/development/details-playlist/${item?._id}`}
                              state={{ item: item }}
                            >
                              <div className={styles['gold-div']}>
                                <div className='title-card'>
                                  <LazyLoadImage
                                    src={'data:image/jpeg;base64,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'}
                                    // src={item.image}
                                    alt={item?.title}
                                    loading="lazy"
                                  />
                                  <div className="news-date">
                                    <label className="mx-2"> {item?.createdAt?.slice(0, 10)}</label>
                                    <label className="news-date-time mx-2"> {item?.createdAt?.slice(11, 16)}</label>
                                  </div>
                                </div>
                                <div>
                                  <h3 className='text-center fw-bold'>{item.title}</h3>
                                </div>
                              </div>
                            </Link>
                          ) : null
                        ) : ('')
                      )
                    ))}
                  </div>
                  {
                    value == 'selectAll' ? (
                      < div className="pt-5 mt-5 d-flex justify-content-around " >
                        <button className={`btn btn-outline-info ${next >= courseData?.results ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
                        <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
                      </div>
                    ) : null}
                </div>
              </>
            </div>
          </div>
        </div>
      </div >

      <Footer />
    </>
  );
};

export default Courses;
