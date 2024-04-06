import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from '@/api/axios';
import './login.scss';
import { Navbar } from '@/layout';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios.post(
        'auth/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('تم تسجيل الدخول بنجاح');
      navigate('/');
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error(err?.response?.data?.message);
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
                  <div className="col-xl-6 text-end">
                    <div className="card-body p-md-5 color-mainColor ">
                      <h3 className="text-center mb-4 text-uppercase">
                        تسجيل الدخول
                      </h3>
                      <h5 className="text-center mb-5">
                        مرحبًا بك مرة أخرى ، لقد اشتقنا إليك!
                      </h5>
                      <form className="pb-5 pt-2" onSubmit={handelSubmit}>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example1m1"
                          >
                            البريد الالكترونى
                          </label>
                          <input
                            type="text"
                            id="form3Example8"
                            className="form-control form-control-lg"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            الرقم السري
                          </label>
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="mb-3 form-check">
                          <Link
                            className="nav-link navli"
                            to={'/auth/forget-password'}
                          >
                            نسيت كلمة المرور ؟
                          </Link>
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            className={`btn btn-primary fs-4 ${
                              isPending ? 'disabled' : ''
                            }`}
                            type="submit"
                          >
                            تسجيل الدخول
                          </button>
                        </div>
                      </form>
                      <div className="mb-3 d-flex ">
                        ليس لديك حساب ؟
                        <Link
                          className="nav-link navli text-primary"
                          to={'/auth/sign-up'}
                        >
                          انشاء حساب جديد
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5dfa7d03cf5d5f33f1fd937c/1583528966995-2OMTHJMYK7L18UGWVNS3/siteBg.jpg"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: '.25rem',
                        borderBottomLeftRadius: '.25rem',
                        height: '90vh',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
