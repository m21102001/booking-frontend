import { Footer, Navbar } from "@/layout"
import { FaRegComment, FaRegThumbsUp, FaShare } from "react-icons/fa6"
import './styles.scss'

const QuestionAnswer = () => {
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

                  <div className="small d-flex justify-content-start">
                    <a href="#!" className="d-flex align-items-center me-3">
                      <FaRegThumbsUp size={18} />
                      <p className="mx-3 mb-0 fs-5">Like</p>
                    </a>
                    <a href="#!" className="d-flex align-items-center me-3">
                      <FaRegComment size={18} />
                      <p className="mx-3 mb-0 fs-5">Comment</p>
                    </a>
                  </div>
                </div>
                <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                  <div className="d-flex flex-start w-100">
                    <img className="rounded-circle shadow-1-strong ms-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                      height="40" />
                    <div className="form-outline w-100">
                      <textarea className="form-control" id="textAreaExample" rows="2" placeholder="اضف تعليق..."
                        style={{ background: "#fff " }}></textarea>
                      <button type="button" className="btn btn-primary d-flex mt-4">اضافة تعليق</button>
                    </div>
                  </div>
                </div>
                <section className="gradient-custom">
                  <div className="row d-flex justify-content-center">
                    <div className="col-11">
                      <div className="card my-4">
                        <div className="card-body p-2">
                          <div className="row">
                            <div className="col">
                              <div className="d-flex flex-start">
                                <img className="rounded-circle shadow-1-strong me-3"
                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar" width="45"
                                  height="45" />
                                <div className="flex-grow-1 flex-shrink-1">
                                  <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                      <p className="mb-1">
                                        احمد محمد <span className="small">- 23/10/2024 - 03:40</span>
                                      </p>
                                      <a href="#!"><FaShare size={18} /><span className="small"> رد</span></a>
                                    </div>
                                    <p className="small mb-0">
                                      نطلب من المستخدم في بعض الأحيان
                                      توثيق حسابه بالهوية الشخصية. هذا الإجراء روتيني وقد نطلبه من جميع المستخدمين في
                                      الموقع لتحقيق بيئة عمل آمنة. لمزيد من التوضيحات حول أسباب طلب الوثائق نرجو العودة
                                    </p>
                                  </div>

                                  <div className="d-flex flex-start mt-4">
                                    <a className="me-3" href="#">
                                      <img className="rounded-circle shadow-1-strong"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(11).webp" alt="avatar"
                                        width="45" height="45" />
                                    </a>
                                    <div className="flex-grow-1 flex-shrink-1">
                                      <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="mb-1">
                                            Simona Disa <span className="small">- 3 hours ago</span>
                                          </p>
                                        </div>
                                        <p className="small mb-0">
                                          letters, as opposed to using Content here, content here,
                                          making it look like readable English.
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="d-flex flex-start mt-4">
                                    <a className="me-3" href="#">
                                      <img className="rounded-circle shadow-1-strong"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                                        width="45" height="45" />
                                    </a>
                                    <div className="flex-grow-1 flex-shrink-1">
                                      <div>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <p className="mb-1">
                                            John Smith <span className="small">- 4 hours ago</span>
                                          </p>
                                        </div>
                                        <p className="small mb-0">
                                          the majority have suffered alteration in some form, by
                                          injected humour, or randomised words.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      بحماية حقوقك ونضمن استلام الخدمة حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>بحماية حقوقك ونضمن استلام الخدمة يخالف أياً من شروط الاستخدام </strong>
                      بحماية حقوقك ونضمن استلام الخدمة التي
                      اشتريتها لمدة 14 يوماً بعد استلامها طالما
                      أن الاتفاق مع البائع حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                      بحماية حقوقك ونضمن استلام الخدمة التي
                      اشتريتها لمدة 14 يوماً بعد استلامها طالما
                      أن الاتفاق مع البائع حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                      بحماية حقوقك ونضمن استلام الخدمة التي
                      اشتريتها لمدة 14 يوماً بعد استلامها طالما
                      أن الاتفاق مع البائع حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                      بحماية حقوقك ونضمن استلام الخدمة التي
                      اشتريتها لمدة 14 يوماً بعد استلامها طالما
                      أن الاتفاق مع البائع حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                      بحماية حقوقك ونضمن استلام الخدمة التي
                      اشتريتها لمدة 14 يوماً بعد استلامها طالما
                      أن الاتفاق مع البائع حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      بحماية حقوقك ونضمن استلام الخدمة حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>بحماية حقوقك ونضمن استلام الخدمة يخالف أياً من شروط الاستخدام</strong>
                      بحماية حقوقك ونضمن استلام الخدمة التي
                      اشتريتها لمدة 14 يوماً بعد استلامها طالما
                      أن الاتفاق مع البائع حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      بحماية حقوقك ونضمن استلام الخدمة حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>بحماية حقوقك ونضمن استلام الخدمة يخالف أياً من شروط الاستخدام</strong>
                      بحماية حقوقك ونضمن استلام الخدمة التي
                      اشتريتها لمدة 14 يوماً بعد استلامها طالما
                      أن الاتفاق مع البائع حصل داخل الموقع ولم يخالف أياً من شروط الاستخدام
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card">
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

                  <div className="small d-flex justify-content-start">
                    <a href="#!" className="d-flex align-items-center me-3">
                      <FaRegThumbsUp size={18} />
                      <p className="mx-3 mb-0 fs-5">Like</p>
                    </a>
                    <a href="#!" className="d-flex align-items-center me-3">
                      <FaRegComment size={18} />
                      <p className="mx-3 mb-0 fs-5">Comment</p>
                    </a>
                  </div>
                </div>
                <div className="card-footer py-3 border-0" style={{ backgroundColor: "#f8f9fa" }}>
                  <div className="d-flex flex-start w-100">
                    <img className="rounded-circle shadow-1-strong ms-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp" alt="avatar" width="40"
                      height="40" />
                    <div className="form-outline w-100">
                      <textarea className="form-control" id="textAreaExample" rows="2" placeholder="اضف تعليق..."
                        style={{ background: "#fff " }}></textarea>
                      <button type="button" className="btn btn-primary d-flex mt-4">اضافة تعليق</button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section >
      <Footer />
    </>
  )
}

export default QuestionAnswer