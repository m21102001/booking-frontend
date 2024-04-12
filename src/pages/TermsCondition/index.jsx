import { condationAndTerms } from "@/db/data"
import { Navbar } from "@/layout"
import { Link } from "react-router-dom"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import leftHandIcon from '@/assets/left-hand-icon.svg'
import { LazyLoadImage } from "react-lazy-load-image-component"
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
          <Tabs>
            <TabList>
              <Tab>طالب</Tab>
              <Tab>المستشار </Tab>
              <Tab>عام</Tab>
            </TabList>
            {condationAndTerms?.map((item, index) => (
              <>
                <TabPanel>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      {item?.student?.map((item, index) => (
                        <>
                          <h2 className="accordion-header" id={index}>
                            <button className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapseOne${index}`}
                              aria-expanded="false"
                              aria-controls={`collapseOne${index}`}>
                             {item?.title}
                            </button>
                          </h2>
                          <div
                            id={`collapseOne${index}`}
                            className="accordion-collapse collapse show text-end"
                            aria-labelledby={index}
                            data-bs-parent="#accordionExample"
                          >
                            {item?.description?.map((item,index)=>(
                              <div key={index} className="accordion-body">
                               <LazyLoadImage
                               src={leftHandIcon}
                               alt='right hand icon' 
                               width={30}
                               className="ms-2"
                               />
                                {item?.title}
                            </div>
                            ))}
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      {item?.consult?.map((item, index) => (
                        <>
                          <h2 className="accordion-header" id={index}>
                            <button className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapseOne${index}`}
                              aria-expanded="false"
                              aria-controls={`collapseOne${index}`}>
                             {item?.title}
                            </button>
                          </h2>
                          <div
                            id={`collapseOne${index}`}
                            className="accordion-collapse collapse show text-end"
                            aria-labelledby={index}
                            data-bs-parent="#accordionExample"
                          >
                            {item?.description?.map((item,index)=>(
                              <div key={index} className="accordion-body">
                               <LazyLoadImage
                               src={leftHandIcon}
                               alt='right hand icon' 
                               width={30}
                               className="ms-2"
                               />
                                {item?.title}
                            </div>
                            ))}
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
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
                          المتعاقدين المستقلين ("المحاضرين") الذين يقدمون خدمات تعليمية مباشرة ومسجلة عبر غرف الصف المتوفرة لدينا ("الدورات").
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default TermsCondition