import { Navbar } from "@/layout"
import { Link } from "react-router-dom"

const TermsCondition = () => {
  return (
    <>
      <Navbar />
      <div className="terms-condition p-5">
        <div className="text-end ">
          <Link to={'/'} className="fs-5 ">الرئيسية</Link>
          <h2 className="fw-semibold py-4 color-mainColor">شروط الاستخدام</h2>
        </div>
        <div className="shadow p-3 mb-5 bg-body rounded">
          <div className="pt-5">
            <div className="nav nav-tabs justify-content-evenly" id="nav-tab" role="tablist">
              <button
                className="nav-link fs-3 color-mainColor active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >طالب
              </button>

              <button
                className="nav-link fs-3 color-mainColor"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >مستشار
              </button>

              <button
                className="nav-link fs-3 color-mainColor"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >عام
              </button>
            </div>
          </div>
          <div className="tab-content pt-5" id="nav-tabContent">
            <div
              className="tab-pane fade pb-5 show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne">
                      الشروط الاساسية
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>الشروط الاساسية</strong>
                      - تمكّن المنتجات ("المتعلمين") من التواصل مع المحاضرين
                      المتعاقدين المستقلين ("المحاضرين") الذين يقدمون خدمات تعليمية مباشرة ومسجلة عبر غرف الصف المتوفرة لدينا ("الدورات").
                      المتعاقدين المستقلين ("المحاضرين") الذين يقدمون خدمات تعليمية مباشرة ومسجلة عبر غرف الصف المتوفرة لدينا ("الدورات").
                      المتعاقدين المستقلين ("المحاضرين") الذين يقدمون خدمات تعليمية مباشرة ومسجلة عبر غرف الصف المتوفرة لدينا ("الدورات").
                      المتعاقدين المستقلين ("المحاضرين") الذين يقدمون خدمات تعليمية مباشرة ومسجلة عبر غرف الصف المتوفرة لدينا ("الدورات").
                      <code>.accordion-body</code>
                      - المتعلمين والمحاضرين ، بشكل عام هم  ، "مستخدمون".
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>الشروط الاساسية</strong>
                      المتعاقدين المستقلين ("المحاضرين") الذين يقدمون خدمات تعليمية مباشرة ومسجلة عبر غرف الصف المتوفرة لدينا ("الدورات").
                      المتعاقدين المستقلين ("المحاضرين") الذين يقدمون خدمات تعليمية مباشرة ومسجلة عبر غرف الصف المتوفرة لدينا ("الدورات").
                      المتعاقدين المستقلين ("المحاضرين") الذين يقدمون خدمات تعليمية مباشرة ومسجلة عبر غرف الصف المتوفرة لدينا ("الدورات").
                      <code>.accordion-body</code>
                      , though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third items accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade pb-5"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabIndex="0"
            >f
            </div>
            <div
              className="tab-pane fade pb-5"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabIndex="0"
            >..
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsCondition