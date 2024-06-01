import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../GoldCard/GoldCard.module.scss';
import axios from '@/api/axios';
import './goldStore.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import 'react-tabs/style/react-tabs.css';
const GoldStore = () => {
  const item = useLocation()?.state?.item;
  const [loading, setLoading] = useState(false);
  const [allUser, setAlluser] = useState([]);
  const [category, setCategory] = useState([]);
  const [categorySemester, setCategorySemester] = useState([]);

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

  const getInitialState2 = () => {
    const selectType = 'summer';
    return selectType;
  };
  const [type, setType] = useState(getInitialState2);
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`mentors/semester/${type}`)
      .then((response) => {
        setCategorySemester(response.data?.mentors);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const getInitialState = () => {
    let value = item?.option;
    if (value == null) {
      value = '';
    }

    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`mentors/field/?field=${value}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setLoading(false);
        setAlluser(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [value]);


  return (
    <div className="coursers-open  py-5">
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
          className="text-center comunation fs-1 fw-bold"
          style={{ color: 'var(--gold-color2)' }}
        >
          المستشارين الموصي بهم
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
        <Tabs>
          <TabList>
            <Tab>مجالات المستشارين</Tab>
            <Tab>فصول السنة </Tab>
          </TabList>

          <TabPanel>
            <div className="col-md-3 d-flex py-3">
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                value={value}
                onChange={handleChange}
              >
                <option value="selectAll">عرض الكل</option>
                {!loading &&
                  category?.document?.map((item, index) => (
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
                      {!loading &&
                        allUser?.mentors?.map((item, index) =>
                          item?.field === value || item?.type == value ? (
                            <Link
                              key={index}
                              to={`/consault-store-item`}
                              state={{ item: item }}
                            >
                              <div className={styles['gold-div']}>
                                <div className="title-card">
                                  <LazyLoadImage
                                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                                    alt={item?.name}
                                    loading="lazy"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-center fw-bold">
                                    {item.name}
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          ) : (
                            <Link
                              key={index}
                              to={`/consault-store-item`}
                              state={{ item: item }}
                            >
                              <div className={styles['gold-div']}>
                                <div className="title-card">
                                  <LazyLoadImage
                                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                                    alt={item?.name}
                                    loading="lazy"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-center fw-bold">
                                    {item.name}
                                  </h3>
                                </div>
                              </div>
                            </Link>
                          )
                        )}
                    </div>
                  </div>
                </>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="col-md-3 d-flex py-3">
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                value={type}
                onChange={handleChangeType}
              >
                <option value="summer">الصيف</option>
                <option value="winter">الشتاء</option>
                <option value="spring">الربيع</option>
                <option value="fall">الخريف</option>
              </select>
            </div>
            <div className="col-md-12">
              <div className="m-auto d-flex justify-center">
                <>
                  <div className="container">
                    <div className={styles['home-grid']}>
                      {!loading &&
                        categorySemester?.map((item, index) =>
                          <Link
                            key={index}
                            to={`/consault-store-item`}
                            state={{ item: item }}
                          >
                            <div className={styles['gold-div']}>
                              <div className="title-card">
                                <LazyLoadImage
                                  src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                                  alt={item?.name}
                                  loading="lazy"
                                />
                              </div>
                              <div>
                                <h3 className="text-center fw-bold">
                                  {item.name}
                                </h3>
                              </div>
                            </div>
                          </Link>
                        )}
                    </div>
                  </div>
                </>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default GoldStore;
