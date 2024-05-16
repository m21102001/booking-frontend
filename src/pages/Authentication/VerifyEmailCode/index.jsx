import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '@/layout';
// import { ToastContainer, toast } from 'react-toastify';
import axios from '@/api/axios';
import { toast } from 'react-toastify';

const VerifyEmailCode = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [emailVerifyCode, setEmailVerifyCode] = useState('');
  const [email, setEmail] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          'auth/verify-email',
          {
            emailVerifyCode: emailVerifyCode,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          setIsPending(false);
          console.log(response);
          if (response?.status === 200) {
            toast.success('(ان كنت مستشار يجب الانتظار حتى يتم الموافقة على الايميل من خلال صاحب مدير المتجر) مبرووك ,تم تأكيد الحساب بنجاح');
            navigate('/auth/login');
          }
        });
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      toast.error(
        'من فضلك تأكد من كتابة الكود بشكل سليم  او يوجد تأخير فى موعد كتابة الرسالة'
      );
    }
  };
  const resendVerifycationCode = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          'auth/resend-code',
          {
            email: email,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          setIsPending(false);
          console.log(response);
        });
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
    }
  };

  return (
    <>
      {isPending && <div className="loading"></div>}
      <div className="login-page">
        <Navbar />
        <div className="Container pt-5 login">
          <div className="container text-end d-flex flex-column justify-content-center m-auto body-card">
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
              <form className="pb-4 pt-2" onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fs-5 fw-bold"
                  >
                    {' '}
                    من فضلك أدخل الكود*
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPhone1"
                    aria-describedby="emailHelp"
                    value={emailVerifyCode}
                    onChange={(e) => setEmailVerifyCode(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button>ارسال</button>
                </div>
              </form>
              <p className="fs-5 fw-normal">
                {' '}
                اعد ارسال الكود مره اخري بعد 15 ثانية{' '}
                <button
                  className="btn btn-outline-light border-0 text-danger text-bold pointer"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-whatever="@fat"
                // onClick={resendVerifycationCode}
                >
                  {' '}
                  ارسال
                </button>
              </p>
              <p id="create-account" className="my-15 text-center fs-6 fw-bold">
                {' '}
                هل لديك حساب بالفعل ؟
                <Link
                  to={'/auth/login'}
                  className="text-sabaek-gold fs-6 fw-bold"
                  style={{ cursor: 'pointer' }}
                >
                  {' '}
                  قم بتسجيل الدخول
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">اعد ارسال الكود مره اخري </h1>
              <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={resendVerifycationCode} >
                <div className="mb-3 text-end">
                  <label
                    htmlFor="recipient-name"
                    className="col-form-label"
                  >البريد الالكترونى:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="recipient-name"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >Close</button>
              <button
              onClick={resendVerifycationCode}
                type="submit"
                className="btn btn-primary"
              >Send message</button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default VerifyEmailCode;
