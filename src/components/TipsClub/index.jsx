import { useEffect, useState } from 'react';
import axios from '@/api/axios';
import { MdTipsAndUpdates } from "react-icons/md";
import styles from '../GoldCard/GoldCard.module.scss';

const GoldStore = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState([])

  useEffect(() => {
    setLoading(true)
    axios.get(`/club`)
      .then((response) => {
        setMessage(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error);
      });
  }, [])

  // console.log('ffff',message);
  ////////////////pagination///////////
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(10)

  const handelprev = () => {
    setPrev(count => count - 10)
    setNext(count => count - 10)
    if (prev <= 0) {
      setPrev(0);
      setNext(10)
    }
  }
  const handelNext = () => {
    setNext(count => count + 10);
    setPrev(count => count + 10)
    if (next < 10) {
      setPrev(0);
      setNext(10)

    }
  }
  // console.log(prev, next);

  return (
    <div className='coursers-open goldNews py-5'>
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'> نصايح المستشارين </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-center'>
        <>
          <div className="container">
            <div className={styles['home-grid']}>
              {!loading && message?.messages?.map((item, index) => (
                index >= prev && index <= next ? (
                  <div key={index} className="card text-end" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <h5 className="card-title fw-bold" style={{ color: 'var(--main-color)' }}>
                        <MdTipsAndUpdates size={40} color="#ffcc00" />
                        {item?.title}
                      </h5>
                      <p>{item?.description}</p>
                      <div className="news-date">
                        <label className="mx-2">التاريخ : {item?.createdAt?.split('T', 1)} </label>
                      </div>
                    </div>
                  </div>
                ) : null
              ))}
            </div>
            {/* test only */}
            <div className={styles['home-grid']}>
              <div className="card text-end" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: 'var(--main-color)' }}>
                    <MdTipsAndUpdates size={40} color="#ffcc00" />
                    محافظي البنوك المركزية. ارتفعت مبيعات التجزئة
                  </h5>
                  <p>
                    أساس شهري في ديسمبر 2023، متجاوزة توقعات النمو بنسبة 0.4% ومضرة بفكرة التيسير النقدي في
                    وقت سابق. في السابق، قال محافظ الاحتياطي الفيدرالي كريستوفر والر إنه
                  </p>
                  <div className="news-date d-flex flex-column text-primary">
                    <label className="mx-2"> المستشار: احمد محمود</label>
                    <label className="mx-2">تاريخ لاضافة : 23/10/2024 </label>
                  </div>
                </div>
              </div>
              <div className="card text-end" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: 'var(--main-color)' }}>
                    <MdTipsAndUpdates size={40} color="#ffcc00" />
                    محافظي البنوك المركزية. ارتفعت مبيعات التجزئة
                  </h5>
                  <p>
                    أساس شهري في ديسمبر 2023، متجاوزة توقعات النمو بنسبة 0.4% ومضرة بفكرة التيسير النقدي في
                    وقت سابق. في السابق، قال محافظ الاحتياطي الفيدرالي كريستوفر والر إنه
                    لا يرى سببًا لخفض أسعار الفائدة بالسرعة التي كان عليها في الماضي، مما
                  </p>
                  <div className="news-date d-flex flex-column text-primary">
                    <label className="mx-2"> المستشار: احمد محمود</label>
                    <label className="mx-2">تاريخ لاضافة : 23/10/2024 </label>
                  </div>
                </div>
              </div>
              <div className="card text-end" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title fw-bold" style={{ color: 'var(--main-color)' }}>
                    <MdTipsAndUpdates size={40} color="#ffcc00" />
                    محافظي البنوك المركزية. ارتفعت مبيعات التجزئة
                  </h5>
                  <p>
                    أساس شهري في ديسمبر 2023، متجاوزة توقعات النمو بنسبة 0.4% ومضرة بفكرة التيسير النقدي في
                    وقت سابق. في السابق، قال محافظ الاحتياطي الفيدرالي كريستوفر والر إنه
                    الفيدرالي في مارس، بانخفاض ملحوظ من 76.9% في الجلسة السابقة، وفقًا لأداة FedWatch التابعة لمجموعة
                    CME. يتطلع المستثمرون الآن إلى المزيد من تعليقات بنك الاحتياطي الفيدرالي هذا الأسبوع
                  </p>
                  <div className="news-date d-flex flex-column text-primary">
                    <label className="mx-2"> المستشار: احمد محمود</label>
                    <label className="mx-2">تاريخ لاضافة : 23/10/2024 </label>
                  </div>
                </div>
              </div>
            </div>
            < div className="pt-5 mt-5 d-flex justify-content-around " >
              <button className={`btn btn-outline-info ${next >= message?.length ? ('disabled') : ('')}`} onClick={handelNext}> next</button>
              <button className={`btn btn-outline-info ${prev == 0 ? ('disabled') : ('')}`} onClick={handelprev}> prev</button>
            </div>
          </div>
        </>
      </div>
    </div >
  )
}

export default GoldStore
