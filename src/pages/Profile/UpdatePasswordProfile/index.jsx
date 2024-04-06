import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/layout';
import axios from '@/api/axios';
import { toast } from 'react-toastify';
const UpdatePasswordProfile = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [password, setPassword] = useState('');
  const [Comfirmpassword, setComfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password !== Comfirmpassword) {
      toast.error('الرقم السري غير متطابق');
      return;
    }
    setIsPending(true);
    try {
      await axios.put(
        'users/update-password/',
        {
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('تم تعديل كلمة المرور بنجاح');
      navigate('/auth/profile');
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('حدث خطأ عند تعديل البيانات');
      console.log('response', err);
    }
  };
  return (
    <>
      <Navbar />
      <section className="h-100 bg-light">
        {isPending && <div className="loading"></div>}
        <div className="h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 mx-0">
            <div className="col px-0">
              <div className="card card-registration">
                <div className="row g-0">
                  <div className="col text-end">
                    <div className="card-body p-md-5 mx-md-5 color-mainColor ">
                      <h3 className="text-center mb-4 text-uppercase">
                        تعديل كلمة المرور
                      </h3>
                      <form className="pb-5 pt-2 mx-md-5" onSubmit={handelSubmit}>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example1m1"
                          >
                            كلمة المرور
                          </label>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="form3Example81"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-button mt-3"
                          >
                            {showPassword ? 'اخفاء' : 'ظهور'}
                          </button>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example1m12"
                          >
                            تأكيد كلمة المرور
                          </label>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="form3Example8"
                            className="form-control form-control-lg"
                            value={Comfirmpassword}
                            onChange={(e) => setComfirmPassword(e.target.value)}
                          />
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-primary fs-4"
                            type="submit"
                          >
                            تعديل البيانات
                          </button>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UpdatePasswordProfile