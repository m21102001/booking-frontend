import { Link, NavLink} from 'react-router-dom';
const Navbar = () => {
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
          <NavLink className="navbar-brand" href="/">
            <img
              className="img-logo"
              src={`https://seeklogo.com/images/C/coursera-logo-16F431BFD5-seeklogo.com.png`}
              alt=""
              style={{
                width: '10rem',
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
          <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
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
                <NavLink className="nav-link navli text-light" to="/courses">
                  الكورسات
                </NavLink>
              </li>
              <li className="nav-item ms-2 ">
                <NavLink className="nav-link navli text-light" to={'/contactUS'}>
                  تواصل معنا
                </NavLink>
              </li>
            </ul>
            <div className='d-flex text-light'>
              <Link to={'/auth/login'}>
              <button type="button" className="mx-2 btn btn-primary bg-dark:hover">سجل دخول</button>
              </Link>
              <Link to={'/auth/sign-up'}>
                <button type="button" className="mx-2 btn btn-primary" >انشاء حساب</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;