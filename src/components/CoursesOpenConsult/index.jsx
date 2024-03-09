import { Link } from 'react-router-dom';
import styles from '../GoldCard/GoldCard.module.scss';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { newCourses } from '@/db/data';
const CoursesOpenConsult = () => {
  return (
    <div className='coursers-open'>
      <div className='m-auto d-flex justify-content-center my-5'>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}>الكورسات الخاصة بالمستشار</h2>
        <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {newCourses?.map((item, index) => (
                index < 8 ? (
                  <div key={index} className={styles['gold-div']}>
                    <div>
                      <LazyLoadImage
                        src={item?.image}
                        alt={item?.title}
                        loading="lazy" />
                    </div>
                    <div className=''>
                      <h3 className=' fw-700'>{item.title}</h3>
                      <Link
                        to={`/consault-store-item/course-detalis`}
                        state={{ item: item }}
                      >
                        <button> شراء </button>
                      </Link>
                    </div>
                  </div>
                ) : ('')
              ))}
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default CoursesOpenConsult