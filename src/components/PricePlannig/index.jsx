import { Fragment, useState } from "react"
import "./PricePlannig.scss"
import axios from '@/api/axios'
import { planning, planninggolden } from "@/db/data"
import { Link } from "react-router-dom"
const PricePlannig = () => {
  const [loading, setLoading] = useState(false)
  const [plannigPay, setPlanningPay] = useState([])
  const [plannigPayGold, setPlanningPayGold] = useState([])
  const subscribeSilver = async () => {
    try {
      await axios.post(`/users/pay/silver/`)
        .then(response => {
          setPlanningPay(response.data)
        })
    } catch (error) {
      setLoading(false)
    }
  };

  const subscribeGolden = async () => {
    try {
      await axios.post(`/users/pay/gold/`)
        .then(response => {
          setPlanningPayGold(response.data)
          // console.log(response.data);
        })
    } catch (error) {

      setLoading(false)
    }
  };
  return (
    <div className="container-fluid planing" style={{ background: "linear-gradient(90deg, var(--main-color) 0%, var(--darkblue-color) 100%)" }}>
      <h3 className="text-center py-5 fw-bold" style={{ wordSpacing: '2px', fontSize: '3rem', color: 'var(--gold-color)' }}> نادى كامبردج</h3>
      <h4 className="text-center text-light fw-bold">اهلا وسهلا بيك</h4>
      <p className="text-center text-light fw-bold">نادى كامبردج هو مساحتك الشخصية للاستثمار ف الذهب</p>
      <p className="text-center text-light fw-bold">اشترك معنا واحصل على العديد من الفوائد التى تساهم فى تطوير عميلة استثمارك فى الذهب لاتفوت الفرصة <Link to={'/club'}> <span className="text-danger fs-4 cursour-pointer">واشترك الان!</span></Link></p>
      <div className="container p-5">
        <div className="row">
          {planning?.map((item, index) => (
            < div key={index} className="col-lg-6 col-md-12 mb-4" >
              <div className="card h-100 shadow-lg card-transmation">
                <div className="card-body">
                  <div className="text-center p-3">
                    <h5 className="card-title">{item?.title}</h5>
                    <small>Individual</small>
                    <br /><br />
                    <span className="h2">{item?.price}</span>
                    <br /><br />
                  </div>
                </div>
                {item?.features.map((item, index) => (
                  <Fragment key={index}>
                    <div className="row text-end">
                      <div className="col-md-12 d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <p className="mb-0 fs-5">{item?.title}</p>
                      </div>
                    </div>
                    <hr />
                  </ Fragment>
                ))}
              </div>
            </div>
          ))}
          {planninggolden?.map((item, index) => (
            < div key={index} className="col-lg-6 col-md-12 mb-4" >
              <div className="card h-100 shadow-lg card-transmation">
                <div className="card-body">
                  <div className="text-center p-3">
                    <h5 className="card-title">{item?.title}</h5>
                    <small>Individual</small>
                    <br /><br />
                    <span className="h2">{item?.price}</span>
                    <br /><br />
                  </div>
                </div>
                {item?.features.map((item, index) => (
                  <Fragment key={index}>
                    <div className="row text-end">
                      <div className="col-md-12 d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                          <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                        </svg>
                        <p className="mb-0 fs-5">{item?.title}</p>
                      </div>
                    </div>
                    <hr />
                  </ Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >

  )
}

export default PricePlannig