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
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}>احدث الاسئلة المنشورة</h2>
          <span style={{ zIndex: "0", backgroundColor: "var(--gold-color2)", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-start align-items-center">
                    <img className="rounded-circle shadow-1-strong ms-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="60"
                      height="60" />
                    <div>
                      <h6 className="fw-bold text-primary text-end mb-1">محمد احمد</h6>
                      <p className="text-muted small mb-0">
                        22/10/2024
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 mb-4 pb-2 text-end">
                    عند الانتهاء من العمل وتسليمه كاملاً يمكنك الضغط على زر تسليم الخدمة. إذا لم يكن لدى المشتري أي ملاحظات
                    أو تعديلات سيقوم بالموافقة على طلب التسليم وينتقل رصيد الخدمة إلى حسابك في خمسات،
                    ثم يمكنك سحبه إلى حسابك في باي بال أو الحسال البنكي من خلال الخطوات الموضحة في مقالة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section >
      {/* commen question */}
      <section className="bacground-color-darkblue">
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
      </section >
      <Footer />
    </>
  )
}

export default QuestionAnswer