import { useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { RxAvatar } from 'react-icons/rx';
import { useAuth } from '@/context/Auth';
import axios from '@/api/axios';

const Navbar = () => {
  const navigate = useNavigate()
  const { setRole, setuser, setLoggedin, user } = useAuth();
  const handelLogout = async () => {
    try {
      await axios.post('auth/logout', {
        withCredentials: true,
      }).then((res) => {
        navigate('/auth/login')
      });
    } catch (error) {
      // console.log(error.response);
    } finally {
      setuser(undefined);
      setLoggedin(false);
      setRole(undefined);
      Navigate('/auth/login');

    }
  };

  const [setIsLoggedIn] = useState(false); // Initialize isLoggedIn state

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    // console.log(isLoggedIn);
  };

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg mainNavbar"
        style={{
          background: 'var(--darkblue-color)',
          borderBottom: ' 1px solid var(--bs-gray-300)',
        }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <LazyLoadImage
              className="img-logo"
              src={`https://i.ibb.co/gt0pG6t/output.png`}
              alt=""
              effect="blur"
              style={{
                height: '3rem',
              }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse me-5"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-2 ">
                <NavLink
                  className={`nav-link navli active text-light`}
                  aria-current="page"
                  to="/"
                >
                  الرئيسية
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink
                  className="nav-link navli text-light"
                  to="/consault-store"
                >
                  المستشارين
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli text-light" to="/courses">
                  الكورسات
                </NavLink>
              </li>
              {/* {user?.role !== 'mentor' ? ( */}
              <li className="nav-item ms-2 ">
                <NavLink
                  className="nav-link navli text-light"
                  to="/cons-tickets/field"
                >
                  الاستشارات
                </NavLink>
              </li>
              {/* ) : null} */}
              <li className="nav-item ms-2 ">
                <NavLink
                  className="nav-link navli text-light"
                  to="/question-and-answer"
                >
                  اسئلة شائعة
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli text-light" to={'/who-us'}>
                  من نحن
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink
                  className="nav-link navli text-light"
                  to={'/contactUS'}
                >
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
            {user == undefined ? (
              <div className="d-flex text-light">
                <Link to={'/auth/login'}>
                  <button
                    type="button"
                    className="mx-2 btn btn-primary bg-dark:hover"
                    onClick={handleLogin}
                  >
                    سجل دخول
                  </button>
                </Link>
                <button
                  type="button"
                  className="mx-2 btn btn-primary"
                  data-bs-toggle="modal"
                  href="#exampleModalToggle"
                  role="button"
                >
                  انشاء حساب
                </button>
              </div>
            ) : (
              <>
                <Link to={'/auth/profile'}>
                  <RxAvatar className="fs-1 avatar text-light" />
                </Link>
                <button
                  onClick={handelLogout}
                  className={`logout-btn mx-4 p-2 fs-5`}
                >
                  تسجيل خروج
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                مرحباً بكم في سايس الابتكار
              </h1>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ margin: 'initial' }}
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-end">
                نحن منصة وطنية نهدف الى تقديم أفضل تجربة نقل للمستخدم والناقل ،
                عن طريق الربط بين افضل العروض المقدمة من اكفاء الناقلين
                للمستخدمين / اصحاب الاعمال بكل أمن .
              </p>
              <div
                className="d-flex flex-row"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                <Link
                  to={'/auth/sign-up/instractor'}
                  className="card mx-2"
                  style={{ width: '18rem' }}
                >
                  <LazyLoadImage
                    src={
                      'https://t3.ftcdn.net/jpg/02/94/21/42/360_F_294214205_ZmptWrtSwORSWadAIHSWqwSa319XlQiB.jpg'
                    }
                    className="card-img-top"
                    alt={'تسجيل الدخول كمستشار'}
                  />
                  <div className="card-body">
                    <p className="card-text">تسجيل كمستشار</p>
                  </div>
                </Link>
                <Link
                  to={'/auth/sign-up/student'}
                  className="card mx-2"
                  style={{ width: '18rem' }}
                >
                  <LazyLoadImage
                    src={
                      'https://media.istockphoto.com/id/1336832660/photo/male-teenage-student-in-yellow-background-stock-photo.jpg?s=612x612&w=0&k=20&c=24LklaK0hoPbe7bGCSHZPbaWJKV6yH0F1b8lABbOS30='
                    }
                    className="card-img-top"
                    alt={'تسجيل الدخول كمستخدم'}
                  />
                  <div className="card-body">
                    <p className="card-text">تسجيل كمستخدم</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
