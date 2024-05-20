import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarDashboard } from '@/layout';
import axios from '@/api/axios';
import { MdOutlineArrowBack } from 'react-icons/md';

const DetailsFAQDash = () => {
  const item = useLocation()?.state?.item;
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState([])
  useEffect(() => {
    setLoading(true);
    axios
      .get(`questions/${item?._id}`)
      .then((response) => {
        setLoading(false);
        setQuestion(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });
    }, []);
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className="fs-1 fw-bold">تفاصيل السؤال</h2>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={'/dash/frequently-asked-questions'} className="mb-3 d-flex flex-row-reverse">
            <button type="butto" className="fw-bold fs-5 back-details-button">
              <MdOutlineArrowBack size={30} />
            </button>
          </Link>
        </div>
        <section style={{ backgroundColor: '#eee' }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">عنوان السؤال </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{question?.title}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الاجابة </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{question?.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailsFAQDash;
