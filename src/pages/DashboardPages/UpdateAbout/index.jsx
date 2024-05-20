import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from '@/layout';
import axios from '@/api/axios';
import { MdOutlineArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';

const UpdateAbout = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [text1, setText1] = useState(item?.text1)
  const [text2, setText2] = useState(item?.text2)
  const [text3, setText3] = useState(item?.text3)
  const [text4, setText4] = useState(item?.text4)
  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .put(
          `about-us/${item?._id}`,
          {
            text1: text1,
            text2: text2,
            text3: 'text3',
            text4: 'text4',
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          toast.success('تم التعديل بنجاح')
          navigate('/dash/about')
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('لم تنجح عملية التعديل')
    }
  };
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تعديل فى التفاصيل </h2>
        </div>
        <Link to={'/dash/about'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">النص الاول *</div>
          <textarea
            rows={5}
            type="text"
            name="text1"
            className="form-control mb-3"
            id="text1"
            required
            placeholder="النص الاول *"
            value={text1}
            onChange={(e) => setText1(e.target.value)}
          />
          <div className="label-form">النص التانى *</div>
          <textarea
            rows={5}
            type="text"
            name="text2"
            className="form-control mb-3"
            id="text2"
            required
            placeholder="النص التانى *"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
          />
          {/* <div className="label-form">النص الثالث *</div>
          <textarea
            rows={5}
            type="text"
            name="text3"
            className="form-control mb-3"
            id="text3"
            required
            placeholder="النص الثالث *"
            value={text3}
            onChange={(e) => setText3(e.target.value)}
          />
          <div className="label-form">النص الرابع *</div>
          <textarea
            rows={5}
            type="text"
            name="text4"
            className="form-control mb-3"
            id="text4"
            required
            placeholder="النص الرابع *"
            value={text4}
            onChange={(e) => setText4(e.target.value)}
          /> */}
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mt-3">
              تعديل
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mt-3">
              جاري التعديل ...
            </button>
          )}
          <button onClick={() => navigate('/dash/courses')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateAbout