import { Link } from "react-router-dom"
import styles from '../GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { explorecourse } from "@/db/data";

const DigitalMarkting = () => {


  return (
    <div className='coursers-open'>
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}> استكشف سايس الابتكار   </h2>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container gold-dash">
            <div className={styles['home-grid']} >
              {explorecourse?.map((item, index) => (
                index < 3 ? (
                  <div key={index} className={styles['gold-div']} >
                    <div>
                      <LazyLoadImage
                        src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                        alt={item?.title}
                      />
                    </div>
                    <div className=''>
                      <h3 className=' fw-700'>{item.title}</h3>
                      <Link
                        to={`/development/details-playlist/${item?._id}`}
                        state={{ item: item }}
                      >
                        <button>تفاصيل اضافية</button>
                      </Link>
                    </div>
                  </div>
                ) : ('')
              ))}
            </div>
          </div>
        </>
      </div>
      {explorecourse?.length == 0 ? (
        <h3 className={`text-center fs-2 alert alert-danger`} role="alert">please <Link to={'/auth/login'}>Login</Link> for show it here</h3>
      ) : ('')}
      <Link to="/development">
        <h4 className="fw-bold text-center my-5 text-decoration-underline text-opacity-75" data-bs-title="Another tooltip"> المزيد من القوائم  </h4>
      </Link>
    </div >
  )
}

export default DigitalMarkting