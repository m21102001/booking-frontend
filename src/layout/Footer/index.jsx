import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>

      <footer className="text-center text-lg-start tex-light "  >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3 text-end">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i><img src={'https://seeklogo.com/images/C/coursera-logo-16F431BFD5-seeklogo.com.png'} alt="تقديم استشارات " style={{ width: "10rem", height: "4rem", background: "rgb(233, 236, 239)", borderRadius: "10px", cursor: "pointer" }} />
                </h6>
                <p>
                  شركة متخصصة في تقديم خدمات الاستشارات الفنيـة فـي الاستثمار في قطاع المعـادن
                  الثمينة وبيع وشـراء سبائك الذهب وتقديم إرشـادات وتحليلات يوميـة عـن سـوق الذهب
                  والفضة، كمـا يقـدم النـادي استشارات فـي عـالم المـال والاستثمار وكـل مـا يخـص مجتمع
                  ريادة الاعمال.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  روابط رئسية
                </h6>
                <p>
                  <Link className="text-dark" to={'/'}>
                    <a href="#home" className="text-reset"> الرئيسية</a>
                  </Link>
                </p>
                {/* <p>
                <a href="#gold" className="text-reset">متجر سبائك </a>
              </p> */}
                <p>
                  <Link className="text-dark" to={'/club'}>
                    <a href="#club" className="text-reset">الرئيسية</a>
                  </Link>
                </p>
                <p>
                  <Link className="text-dark" to={'/development'}>
                    <a href="#playlist" className="text-reset">الرئيسية </a>
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  روابط هامة
                </h6>
                <p>
                  <Link className="text-dark" to={'/Consulting'}>
                    <a href="#consalt" className="text-reset">الاستشارات</a>
                  </Link>
                </p>
                <p>
                  <Link className="text-dark" to={'/about-us'}>
                    <a href="#about-us" className="text-reset">من نحن</a>
                  </Link>
                </p>
                <p>
                  <Link className="text-dark" to={'/contactUS'}>
                    <a href="#contact-us" className="text-dark text-reset">تواصل معنا</a>
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">طرق التواصل</h6>
                <p><i className="fas fa-home me-3"></i> شارع سبيل الخازندار - العباسية (37) </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  cambridgetime2024@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i>+20(1011497247)</p>
                {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
              </div>
            </div>
          </div>
        </section>

        <footer className="tex-light text-center " >
          <div className="container p-4 pb-0">
            <section className="mb-4 d-flex justify-content-center">
              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: " #3b5998" }}
                href="https://facebook.com"
                role="button"
              ><FaFacebook /></a>

              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: " #55acee" }}
                href="https://x.com/"
                role="button"
              ><FaXTwitter /></a>

              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: " #dd4b39" }}
                href="https://www.tiktok.com/"
                role="button"
              ><FaTiktok /></a>

              <a
                data-mdb-ripple-init
                className="btn text-white btn-floating m-1"
                style={{ backgroundColor: " #ac2bac" }}
                href="https://www.instagram.com"
                role="button"
              ><FaInstagram /></a>
            </section>
          </div>

          <div className=" copyRight text-center p-3" style={{ backgroundColor: "rgb(133 133 133 / 5%)" }}>
            Copyright © 2024
            {/* <a className="love" href="https://google.com/"> 
          </a> */}
            {/* make by Love */}
          </div>
        </footer>
      </footer>

    </div>
  )
}

export default Footer
