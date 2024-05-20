import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { toast } from "react-toastify"

const CreateHonorBoard = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [mentor, setMentor] = useState('')
  const [allUser, setAlluser] = useState([])
  const getInitialState = () => {
    let value = allUser;
    if (value == null) {
      (value = '')
    }

    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    setIsPending(true);
    axios.get('mentors/active', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        setIsPending(false);
        setAlluser(response.data);
      })
      .catch((error) => {
        setIsPending(false);
      });
  }, []);

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `honor-board`,
          {
            mentor: value,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          toast.success('تم اضافة المستشار بنجاح')
          setMentor('')
          navigate(`/dash/honor-board`)
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('المستشار موجود بالفعل')
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
          <div className="label-form">اضف لينك الحساب  </div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={value}
            onChange={handleChange}
          >
            {!isPending && allUser?.data?.map((item, index) => (
              <option key={index} value={item?._id}>{item?.name}</option>
            ))}
          </select>
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