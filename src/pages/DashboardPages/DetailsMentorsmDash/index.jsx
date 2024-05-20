import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '@/api/axios';
import { SidebarDashboard } from '@/layout';
import { toast } from "react-toastify"

const DetailsMentorsmDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    // setValue(e.target.value);
    try {
      await axios
        .post(
          `mentors/unactivate/${item?._id}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          toast.success("تم الموافقة بنجاح");
          navigate('/dash/mentors')
        });
        setIsPending(false);
      } catch (err) {
        setIsPending(false);
        toast.error("لم يتم الموافقة");
    }
  };


  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>ايقاف حساب المستشار  </h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-start align-content-center flex-wrap my-4"
        >

          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mt-3">
              ايقاف
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mt-3">
              جاري الايقاف ...
            </button>
          )}
          <button onClick={() => navigate('/dash/mentors')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default DetailsMentorsmDash 