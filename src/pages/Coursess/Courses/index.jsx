import { Footer, Navbar } from '@/layout';
import axios from '@/api/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/components/GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [categorya, setCategory] = useState([]);
  const [categoryaShow, setCategoryShow] = useState([]);
  const [value, setValue] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get('cons-fields/')
      .then((response) => {
        setCategory(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`courses/field/${value}`)
      .then((response) => {
        setCategoryShow(response?.data);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [value]);
  ///////////////////////////////


  return (
    <>
      <Navbar />
      <div className="coursers-open  py-5 ">
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
          <h2
            className="text-center comunation text-blue-600 fs-1 fw-bold"
            style={{ color: 'var(--gold-color2)' }}
          >
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
              onChange={(e) => setValue(e.target.value)}
            >
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
                    {categoryaShow?.data?.map(
                      (item, index) =>
                        // item?.option == value && item?.option !== 'selectAll' ? (
                        item?.field === value ? (
                          <Link
                            key={index}
                            to={`/consault-store-item/course-detalis/${item._id}`}
                            state={{ item: item }}
                          >
                            <div className={styles['gold-div']}>
                              <div className="title-card">
                                <LazyLoadImage
                                  src={`${import.meta.env.VITE_IMAGE_URL}${item?.image
                                    }`}
                                  alt={item?.title}
                                  loading="lazy"
                                />
                                <div className="news-date">
                                  <label className="mx-2">
                                    {item?.createdAt?.slice(0, 10)}
                                  </label>
                                  <label className="news-date-time mx-2">
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
                        ) : null
                    )}
                  </div>
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
