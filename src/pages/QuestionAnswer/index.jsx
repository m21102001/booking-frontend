import { Footer, Navbar } from "@/layout"
import axios from "@/api/axios";
import './styles.scss'
import { Fragment, useEffect, useState } from "react";

const QuestionAnswer = () => {
  const [loading, setLoading] = useState(false);
  const [allUser, setAlluser] = useState([])
  useEffect(() => {
    setLoading(true);
    axios.get('questions', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        setLoading(false);
        setAlluser(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <section className="bacground-color-darkblue">
        <div className='m-auto d-flex justify-content-center py-5'>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}>الاسئلة الشائعة</h2>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                {!loading && allUser?.document?.map((item, index) => (
                  <div key={index} className="card-body">
                    <div className="d-flex flex-start align-items-center">
                      <div className="fs-1 p-3 m-3 bg-danger shadow p-3 mb-5 rounded">س</div>
                      <p className="pb-2 text-end">
                        {item?.title}
                      </p>
                    </div>
                    <div className="d-flex flex-start align-items-center">
                      <div className="fs-1 p-3 m-3 px-4 bg-success shadow p-3 mb-5 rounded">ج</div>
                      <p className="pb-2 text-end">
                        {item?.answer}
                      </p>
                    </div>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >
      {/* commen question */}
      {/* <section className="bacground-color-darkblue">
        <div className='m-auto d-flex justify-content-center py-5'>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}>الاسئلة الشائعة</h2>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    {!loading && allUser?.document?.map((item, index) => (
                      <Fragment key={index}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls="collapseOne">
                          {item?.title}
                        </button>
                        <div id={`collapseOne${index}`} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            {item?.answer}
                          </div>
                        </div>
                      </Fragment>
                    ))}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section > */}
      <Footer />
    </>
  )
}

export default QuestionAnswer