import { useState } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { toast } from "react-toastify"

const UpdateConsFieldsDash = () => {
  const item = useLocation().state.item;
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [field, setField] = useState(item?.field)

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .put(
          `cons-fields/${item?._id}`,
          {
            field: field,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          toast.success('تم تعديل المسار بنجاح')
          setField('')
          navigate(`/dash/cons-fields`)
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('المسار موجود بالفعل')
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>اضافة مسار جديد </h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">تعديل اسم المسار </div>
          <input
            type="text"
            name="field"
            className="form-control  mb-4"
            id="field"
            required
            placeholder="ادخل اسم المسار *"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              تعديل
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4" disabled>
              جاري التعديل ...
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

export default UpdateConsFieldsDash