import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Navbar } from "@/layout"
// import { ToastContainer, toast } from 'react-toastify';
import axios from '@/api/axios'

const VerifyEmailCode = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [emailVerifyCode, setEmailVerifyCode] = useState('')

  // const notify = () => toast.error("sorry, please check phone or password!", {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "colored",
  // });

  const handelSubmit = async (e) => {
    e.preventDefault()
    setIsPending(true)
    try {
      await axios.post('auth/verify-email', {
        emailVerifyCode: emailVerifyCode,
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          setIsPending(false)
          console.log(response);
          if (response?.status === 200) {
            navigate("/auth/login")
          }
        })

    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
      alert('من فضلك تأكد من كتابة الكود بشكل سليم  او يوجد تأخير فى موعد كتابة الرسالة')
    }
  }
  const resendVerifycationCode = async (e) => {
    e.preventDefault()
    setIsPending(true)
    try {
      await axios.post('auth/resend-code', {
        emailVerifyCode: "mm@gmail.com",
      },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          setIsPending(false)
          console.log(response);
        })

    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
    }
  }

  return (
    <>
      {isPending && <div className="loading"></div>}
      <div className='login-page'>
        <Navbar />
        <div className="Container pt-5 login">
          <div className="container text-end d-flex flex-column justify-content-center m-auto body-card" >
            <div className="shadow-lg p-3 mb-5 bg-body rounded">
              <form className='pb-4 pt-2' onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="form-label fs-5 fw-bold"
                  >  من فضلك أدخل الكود*</label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPhone1"
                    aria-describedby="emailHelp"
                    value={emailVerifyCode}
                    onChange={e => setEmailVerifyCode(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  {/* <ToastContainer /> */}
                  {/* <button onClick={notify}>ارسال</button> */}
                  <button >ارسال</button>
                </div>
              </form>
              <p className="fs-5 fw-normal"> اعد ارسال الكود مره اخري بعد 15 ثانية <strong className="text-danger pointer" onClick={resendVerifycationCode} > ارسال</strong></p>
              <p id="create-account" className="my-15 text-center fs-6 fw-bold"> هل لديك حساب بالفعل ؟
                <Link
                  to={"/auth/login"}
                  className="text-sabaek-gold fs-6 fw-bold"
                  style={{ cursor: "pointer" }}
                > قم بتسجيل الدخول</Link>
              </p>
            </div>

          </div>

        </div>
      </div >
    </>
  )
}

export default VerifyEmailCode