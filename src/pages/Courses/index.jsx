import { Footer, Navbar } from "@/layout"
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '@/components/GoldCard/GoldCard.module.scss';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { goldCategory } from '@/db/data';
const Courses = () => {
  const item = useLocation()?.state?.item
  const [bookData, setBookData] = useState([])

  const getInitialState = () => {
    let value = item?.option;
    if (value == null) {
      (value = 'selectAll')
    }

    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(`/gold-bars/`)
  //     .then((response) => {
  //       setBookData(response.data);
  //       setLoading(false);
  //       window.scrollTo(0, 0);
  //       // console.log("bullion store", response.data);
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       console.log(error);
  //     });
  // }, []);
  ////////////////pagination///////////
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(10)

  const handelprev = () => {
    setPrev(count => count - 10)
    setNext(count => count - 10)
    if (prev <= 0) {
      setPrev(0);
      setNext(10)
    }
  }
  const handelNext = () => {
    setNext(count => count + 10);
    setPrev(count => count + 10)
    if (next < 10) {
      setPrev(0);
      setNext(10)

    }
  }

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
                    {goldCategory?.map((item, index) => (
                      item?.option == value && item?.option !== 'selectAll' ? (
                        <Link
                          key={index}
                          to={`/consault-store-item`}
                          state={{ item: item }}
                        >
                          <div className={styles['gold-div']}>
                            <div className='title-card'>
                              <LazyLoadImage
                                src={item?.image}
                                alt={item?.name}
                                loading="lazy"
                              />
                              <div className="news-date">
                                <label className="mx-2"> {item?.createdAt?.slice(0, 10)}</label>
                                <label className="news-date-time mx-2"> {item?.createdAt?.slice(11, 16)}</label>
                              </div>
                            </div>
                            <div>
                              <h3 className='text-center fw-bold'>{item.name}</h3>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        value == 'selectAll' ? (
                          index >= prev && index <= next ? (
                            <Link
                              key={index}
                              to={`/consault-store-item`}
                              state={{ item: item }}
                            >
                              <div className={styles['gold-div']}>
                                <div className='title-card'>
                                  <LazyLoadImage
                                    src={item.image}
                                    alt={item?.name}
                                    loading="lazy"
                                  />
                                  <div className="news-date">
                                    <label className="mx-2"> {item?.createdAt?.slice(0, 10)}</label>
                                    <label className="news-date-time mx-2"> {item?.createdAt?.slice(11, 16)}</label>
                                  </div>
                                </div>
                                <div>
                                  <h3 className='text-center fw-bold'>{item.name}</h3>
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
                        <button className={`btn btn-outline-info ${next >= bookData?.results ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
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
  )
}

export default Courses