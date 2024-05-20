import { useState } from "react"
import { Link, useLocation } from 'react-router-dom';
import axios from "@/api/axios"
const CoursePayment = () => {
  const item = useLocation()?.search
  const [isPending, setIsPending] = useState(false)
  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `courses/checkout/${item?.slice(81)}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          if (response?.status == 201) {
            alert('تهانينا تم شراء الكورس بنجاح')
          }
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
    }
  };
  return (
    <div className="d-flex " style={{ height: '100vh' }}>
      {!isPending && <div className="loading"></div>}
      <div className="modal fade" id="exampleModalToggle" aria-hidden="false" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header ">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">تأكيد شراء الكورس</h1>
              <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-end">
              <h4>
                تهانينا تم شراء الكورس بنجاح
              </h4>
            </div>
            <div className="modal-footer  justify-content-start">
              <Link to={'/courses'}>
                <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> تصفح المزيد من الكورسات   </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <a className="btn btn-primary m-auto" onClick={hanelSubmit} data-bs-toggle="modal" href="#exampleModalToggle" role="button"> تأكيد عملية الدفع لفتح الكورس </a>
    </ div>
  )
}

export default CoursePayment