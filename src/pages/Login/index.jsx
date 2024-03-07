import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from '@/api/axios';
import './login.scss'
import { Navbar } from '@/layout';

const Login = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const { data } = await axios.post(
        '/auth/login', { withCredentials: false },
        {
          email: email,
          password: password
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
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
                          <label className="form-label" htmlFor="form3Example1m1">
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
                          <label className="form-label" htmlFor="form3Example4cg">
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
                          <Link className="nav-link navli" to={'/auth/forget-password'}>
                            نسيت كلمة المرور ؟
                          </Link>
                        </div>
                        <div className="d-grid gap-2">
                          <button className="btn btn-primary fs-4" type="submit">
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
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: '.25rem',
                        borderBottomLeftRadius: '.25rem',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Login;
