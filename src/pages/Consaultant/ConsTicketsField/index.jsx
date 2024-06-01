import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Navbar } from '@/layout';
import { FaClock, FaMoneyBillAlt } from 'react-icons/fa';
import { MdTimer } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import axios from '@/api/axios';
const ConsTicketsField = () => {
  const [loading, setLoading] = useState(false);
  const [consultation, setConsultation] = useState([]);
  const [category, setCategory] = useState([]);

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
  const [value2, setValue2] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`cons-tickets/field?field=${value2}`)
      .then((response) => {
        setLoading(false);
        setConsultation(response.data);
        // console.log('response', response.data);
      })
      .catch((error) => {
        setLoading(false);
        // console.log('لايوجد كورسات متاحه');
      });
  }, [value2]);

  return (
    <div style={{ color: 'var(--darkblue-color)' }}>
      <Navbar />
      <div className="m-auto d-flex justify-content-center my-5">
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
          الاستشارات المتاحة{' '}
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
      <div className="container text-center pt-5">
        <div className="col-md-3 d-flex">
          <select
            className="form-select mb-3"
            aria-label="Default select example"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          >
            <option value="selectAll">كل الاستشارات</option>
            {!loading &&
              category?.document?.map((item, index) => (
                <option key={index} value={item?.field}>
                  {item?.field}
                </option>
              ))}
          </select>
        </div>
        {!loading &&
          consultation?.data?.map((item, index) =>
             value2 == '' ? (
              <Link
                to={`/auth/request/reservation-ticket`}
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
                  <h2>{item?.day?.slice(5, 7)}</h2>
                </div>
                <div className="col-10 fs-4 text-end">
                  <div className="mb-3 d-flex justify-content-between align-items-start">
                    <h3 className="text-uppercase">
                      <strong>{item?.title}</strong>
                    </h3>
                    <button type="button" className="btn btn-success">
                      ادفع الان
                    </button>
                  </div>
                  <ul className="list-inline">
                    <li className="list-inline-item mx-3">
                      <FaClock size={30} color={'var(--gold-color)'} />
                      {item?.startDate}
                    </li>
                    <li className="list-inline-item mx-3">
                      <MdTimer size={30} color={'var(--gold-color)'} />
                      {item?.duration} دقيقة
                    </li>
                    <li className="list-inline-item mx-3">
                      <ImLocation2 size={30} color={'blue'} /> {item?.type}
                    </li>
                  </ul>
                  <ul className="list-inline">
                    <li className="list-inline-item mx-3">
                      <FaMoneyBillAlt size={30} color={'#198754'} />{' '}
                      {item?.price}جنية مصري{' '}
                    </li>
                  </ul>
                </div>
              </Link>
            ) : (
              value2 == 'selectAll' || item?.field == value2 ? (
                <Link
                  to={`/auth/request/reservation-ticket`}
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
                    <h2>{item?.day?.slice(5, 7)}</h2>
                  </div>
                  <div className="col-10 fs-4 text-end">
                    <div className="mb-3 d-flex justify-content-between align-items-start">
                      <h3 className="text-uppercase">
                        <strong>{item?.title}</strong>
                      </h3>
                      <button type="button" className="btn btn-success">
                        ادفع الان
                      </button>
                    </div>
                    <ul className="list-inline">
                      <li className="list-inline-item mx-3">
                        <FaClock size={30} color={'var(--gold-color)'} />
                        {item?.startDate}
                      </li>
                      <li className="list-inline-item mx-3">
                        <MdTimer size={30} color={'var(--gold-color)'} />
                        {item?.duration} دقيقة
                      </li>
                      <li className="list-inline-item mx-3">
                        <ImLocation2 size={30} color={'blue'} /> {item?.type}
                      </li>
                    </ul>
                    <ul className="list-inline">
                      <li className="list-inline-item mx-3">
                        <FaMoneyBillAlt size={30} color={'#198754'} />{' '}
                        {item?.price}جنية مصري{' '}
                      </li>
                    </ul>
                  </div>
                </Link>
              ) : (null)
            )
          )}
      </div>
      <Footer />
    </div>
  );
};

export default ConsTicketsField;
