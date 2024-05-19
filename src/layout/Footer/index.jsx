import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import './footer.module.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start tex-light "  >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3 text-end">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>
                <LazyLoadImage
                  src={`https://i.ibb.co/gt0pG6t/output.png`}
                  alt=""
                  effect="blur"
                  style={{ width: "10rem", height: "4rem", background: "rgb(233, 236, 239)", borderRadius: "10px", cursor: "pointer" }}
                />
              </h6>
              <p>
                pre-approved prior learning credits that may count toward the degree requirements according to institutional policies, which may consider any existing credits you may have. credits that may count toward the degree requirements according to institutional policies, which may consider any
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                روابط رئسية
              </h6>
              <p>
                <Link className="text-light" to={'/'}>
                  <a href="#home" className="text-reset"> الرئيسية</a>
                </Link>
              </p>
              {/* <p>
                <a href="#gold" className="text-reset">متجر سبائك </a>
              </p> */}
              <p>
                <Link className="text-light" to={'/club'}>
                  <a href="#club" className="text-reset"> الكورسات</a>
                </Link>
              </p>
              <p>
                <Link className="text-light" to={'/development'}>
                  <a href="#playlist" className="text-reset">احدث الكورسات  </a>
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                الوصى بيهم
              </h6>
              <p>
                <Link className="text-light" to={'/Consulting'}>
                  <a href="#consalt" className="text-reset">الاستشارات</a>
                </Link>
              </p>
              <p>
                <Link className="text-light" to={'/contactUS'}>
                  <a href="#contact-us" className="text-light text-reset">تواصل معنا</a>
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">طرق التواصل</h6>
              <p><i className="fas fa-home me-3"></i>الحرة -لبن الرياض 12936-6641  المملكة العربية السعودية</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                empoweringvisioncompany@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> (+966) 556627654</p>
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
              href="https://facebook.com/@selfrejoin"
              role="button"
            ><FaFacebook /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #55acee" }}
              href="https://x.com/Selfrejoin?t=KBEQJ-Qc4ULIda6uUpC-bg&s=09"
              role="button"
            ><FaXTwitter /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #dd4b39" }}
              href="https://www.tiktok.com/@sel9rejoin?_t=8lZjVNUP4Z6&_r=1"
              role="button"
            ><FaTiktok /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #ac2bac" }}
              href="https://www.instagram.com/selfrejoin?igsh=YzljYTk1ODg3Zg=="
              role="button"
            ><FaInstagram /></a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: " #ac2bac" }}
              href="http://www.linkedin.com/in/empowrinvisioncompany"
              role="button"
            ><FaLinkedin /></a>
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
  );
};

export default Footer;