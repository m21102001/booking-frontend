import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from '@/api/axios';

const VerifyCode = () => {
  const [isPending, setIsPending] = useState(false);
  const [code, setCode] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const { data } = await axios.post(
        '/auth/login',
        {
          code: code,
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
                     ادخل الكود 
                    </h3>
                    <form className="pb-5 pt-2" onSubmit={handelSubmit}>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1m1">
                        الكود المرسل
                        </label>
                        <input
                          type="number"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="d-grid gap-2">
                        <button className="btn btn-primary fs-4" type="submit">
                        ارسال
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
  );
};

export default VerifyCode;
