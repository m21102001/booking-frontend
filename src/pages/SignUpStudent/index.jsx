import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '@/api/axios';
import { Navbar } from '@/layout';

const SignUpStudent = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [check, setCheack] = useState(false);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          'auth/signup',
          {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log(response);
          navigate('/auth/verifyEmailCode');
        });
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
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
                    <div className="card-body p-md-5 color-mainColor">
                      <h3 className="mb-5 text-center text-uppercase ">
                        إنشاء حساب
                      </h3>
                      <form className="pb-5 pt-2" onSubmit={handelSubmit}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <label
                                className="form-label"
                                htmlFor="form3Example1m"
                              >

                                الاسم الاول
                              </label>
                              <input
                                type="text"
                                id="form3Example1m"
                                className="form-control form-control-lg"
                                placeholder=" محمد"
                                value={fname}
                                required
                                onChange={(e) => setFname(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <label
                                className="form-label"
                                htmlFor="form3Example1n"
                              >
                                الاسم الاخير
                              </label>
                              <input
                                type="text"
                                id="form3Example1n"
                                className="form-control form-control-lg"
                                placeholder=" احمد"
                                value={lname}
                                required
                                onChange={(e) => setLname(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 mb-4">
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
                                placeholder="example@email.com "
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cg">
                            الرقم السري
                          </label>
                          <input
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            placeholder="xxxxxxx"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cdg"
                          >
                            تأكيد الرقم السري
                          </label>
                          <input
                            type="password"
                            id="form3Example4cdg"
                            className="form-control form-control-lg"
                            placeholder="xxxxxxx"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={check}
                            onChange={() => setCheack(check ? false : true)}
                            id="flexCheckDefault"
                            required
                          />
                          <label
                            className="form-check-label me-3"
                            htmlFor="flexCheckDefault"
                          >
                            نعم، أريد الاشتراك. أوافق على تطبيق
                            <Link to={'/terms-condition'}> الشروط والأحكام </Link>.
                          </label>
                        </div>
                        <div
                          // state={{ item: email }}
                          // to={'/auth/verifyEmailCode'}
                          className="d-grid gap-2"
                        >
                          <button
                            type="submit"
                            className={`btn btn-primary btn-lg ms-2 ${check ? '' : 'disabled'
                              }`}
                          >
                            انشاء حساب جديد
                          </button>
                        </div>
                      </form>
                      <div className="mb-3 d-flex ">
                        هل لديك حساب بالفعل ؟
                        <Link
                          className="nav-link navli text-primary"
                          to={'/auth/login'}
                        >
                          سجل الدخول الان
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://media.istockphoto.com/id/1336832660/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=24LklaK0hoPbe7bGCSHZPbaWJKV6yH0F1b8lABbOS30="
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: '.25rem',
                        borderBottomLeftRadius: '.25rem',
                        height: '-webkit-fill-available',
                        width: '-webkit-fill-available',
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

export default SignUpStudent;