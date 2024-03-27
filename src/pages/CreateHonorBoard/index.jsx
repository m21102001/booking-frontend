import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { toast } from "react-toastify"

const CreateHonorBoard = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [image, setImage] = useState('')
  const [profileLink, setProfileLink] = useState('')

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `honor-board`,
          {
            image: image,
            profileLink: profileLink
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          toast.success('تم اضافة جديد بنجاح')
          setProfileLink('')
          setImage('')
          navigate(`/dash/honor-board`)
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('المستشار موجود بالفعل')
      console.log('response', err.response);
      console.log('message', err.message);
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>Add  New Honor Board Member</h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">اضف صوره للمستشار</div>
          <input
            type="text"
            name="image"
            className="form-control  mb-4"
            id="image"
            required
            placeholder="ادخل لينك الصورة *"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <div className="label-form">اضف لينك الحساب  </div>
          <input
            type="text"
            name="profileLink"
            className="form-control  mb-4"
            id="profileLink"
            required
            placeholder="اضف لينك الحساب   *"
            value={profileLink}
            onChange={(e) => setProfileLink(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة مسار جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/cons-fields`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateHonorBoard