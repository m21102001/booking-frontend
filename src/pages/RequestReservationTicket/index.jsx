import { useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom';
import axios from "@/api/axios"
const RequestReservationTicket = () => {
  const item = useLocation()?.state?.item
  const [isPending, setIsPending] = useState(false)
  const [ticket, setTicket] = useState([])
  useEffect(() => {
    setIsPending(true);
    axios.post(`cons-tickets/payment/${item?._id}`)
      .then((response) => {
        setIsPending(false)
        setTicket(response.data)
      })
      .catch((error) => {
        setIsPending(false);
      });
  }, [])
  return (
    <div className="d-flex " style={{ height: '100vh' }}>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">تأكيد حجز التذكرة</h1>
              <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-end">
              <h4>
                سيتم تحويلك لاستكمال عملية الدفع
              </h4>
            </div>
              <div className="modal-footer  justify-content-start">
                <Link to={ticket?.data?.url}>
                  <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">ادفع الان</button>
                </Link>
              </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary m-auto" data-bs-toggle="modal" href="#exampleModalToggle" role="button"> تأكيد الدفع لحجز التذكرة  </a>
    </ div>
  )
}

export default RequestReservationTicket