import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '@/api/axios';
import { SidebarDashboard } from '@/layout';

const UpdateRoleUsersDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();

  const [isPending, setIsPending] = useState(false)

  const getInitialState = () => {
    const value = "user";
    return value;
  };
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    // setValue(e.target.value);
    try {
      await axios
        .put(
          `/users/updateRole/${item?._id}`,
          {
            role: value,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
    }
  };


  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>تعديل الصلاحيات للمستخدم</h2>
        </div>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-start align-content-center flex-wrap my-4"
        >
          <div className="label-form mb-3">تغير الصلاحيات*</div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={value}
            onChange={handleChange}
          >
            {/* <option defaultValue selected>Open this select menu</option> */}
            <option value="mentor">mentor</option>
            <option value="manager">Manager</option>
            <option value="user">User</option>
          </select>
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mt-3">
              تعديل
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mt-3">
              جاري التعديل...
            </button>
          )}
          <button onClick={() => navigate('/dash/all-users')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mt-3">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateRoleUsersDash 