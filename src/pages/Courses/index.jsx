import { Footer, Navbar } from '@/layout';

import { DownloadTableExcel } from 'react-export-table-to-excel';

import axios from '@/api/axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const Courses = () => {
  const [loading, setLoading] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  // const { user } = useAuth();
  const tableRef = useRef(null);
  useEffect(() => {
    setLoading(true);
    // if (user.role == 'manager') {
    axios
      .get('courses')
      .then((response) => {
        setLoading(false);
        setPlaylists(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
    // }
  }, []);

  const handelDelete = async (id) => {
    setLoading(true);
    await axios
      .delete(`courses/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        axios.get('/courses/').then((response) => {
          setPlaylists(response.data);
          setLoading(false);
          console.log(response.data);
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  //////////////////pagination///////////////////
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

  // const item = useLocation()?.state?.item;
  // const [bookData, setBookData] = useState([]);

  // const getInitialState = () => {
  //   let value = item?.option;
  //   if (value == null) {
  //     value = 'selectAll';
  //   }

  //   return value;
  // };
  // const [value, setValue] = useState(getInitialState);
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };

  // const [prev, setPrev] = useState(0);
  // const [next, setNext] = useState(10);

  // const handelprev = () => {
  //   setPrev((count) => count - 10);
  //   setNext((count) => count - 10);
  //   if (prev <= 0) {
  //     setPrev(0);
  //     setNext(10);
  //   }
  // };
  // const handelNext = () => {
  //   setNext((count) => count + 10);
  //   setPrev((count) => count + 10);
  //   if (next < 10) {
  //     setPrev(0);
  //     setNext(10);
  //   }
  // };

  return (
    <>
      <Navbar />
      {/* <div className='coursers-open goldNews py-5'>
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
      </div > */}
      <div className="dashboard d-flex flex-row">
        {/* {user.role != 'manager' && <div className="loading"></div>} */}

        <div className="container text-center">
          <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
            <h2 className="fs-1 fw-bold">الكورسات المتاحة</h2>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <Link to="/dash/create-playlist-item">
              <button
                type="button"
                className="btn btn-primary d-block m-3"
                style={{ padding: '7px 6rem' }}
              >
                اضافة قائمة جديد
              </button>
            </Link>
            <DownloadTableExcel
              filename="users table"
              sheet="users"
              currentTableRef={tableRef.current}
            >
              <button type="button" className="btn btn-info m-3 ">
                {' '}
                تحميل ملف اكسيل{' '}
              </button>
            </DownloadTableExcel>
          </div>
          <table ref={tableRef} className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">العنوان</th>
                <th scope="col">السعر</th>
                <th scope="col" colSpan={2}>
                  الاحداث
                </th>
              </tr>
            </thead>
            <tbody>
              {!loading &&
                playlists?.document?.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item?.title}</td>
                    <td>{item?.price}دينار كويتى</td>
                    <td>
                      <Link
                        to={`/courses/course-update/${item._id}`}
                        state={{ item: item }}
                      >
                        <button className="btn btn-outline-success mx-2 px-4">
                          تعديل
                        </button>
                      </Link>
                      <Link
                        to={`/courses/course-details/${item._id}`}
                        state={{ item: item }}
                      >
                        <button className="btn btn-outline-info mx-2 px-4">
                          التفاصيل
                        </button>
                      </Link>
                      <button
                        onClick={() => handelDelete(item._id)}
                        className="btn btn-outline-danger mx-2 px-4"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* {user.role != 'manager' ? (
          <h3 className="text-light"> YOU ARE NOT PROVIDE </h3>
        ) : null
        } */}
          <div className="d-flex justify-content-around">
            <button
              className={`btn btn-outline-info ${
                next >= playlists?.length ? 'disabled' : ''
              }`}
              onClick={handelNext}
            >
              {' '}
              next
            </button>
            <h3 className="text-light">
              {' '}
              {playlists?.length}/ {prev}{' '}
            </h3>
            <button
              className={`btn btn-outline-info ${prev == 0 ? 'disabled' : ''}`}
              onClick={handelprev}
            >
              {' '}
              prev
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
