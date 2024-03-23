import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbLogout } from 'react-icons/tb';
import { PiFlagFill } from 'react-icons/pi';
import { FaMessage } from 'react-icons/fa6';
import { FaTicketAlt, FaUsers } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '@/assets/logo.svg';
import './sidebarDashboard.scss';

function SidebarDashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <div className="main-div">
      <div
        className={`sidebar-div ${sidebarOpen ? 'sidebar-open' : 'sidebar-close'
          }`}
      >
        <NavLink style={{ background: 'var(--darkblue-color)' }}>
          <button
            // onClick={handelLogout}
            type="button"
            className="btn btn-danger"
          >
            <TbLogout color="#fff" size={30} />
            تسجيل الخروج
          </button>
        </NavLink>
        <div>
          <NavLink to={'/'}>
            <div className="sidebar-logo">
              <LazyLoadImage
                src={logo}
                effect="blur"
                alt=""
                width={180}
                height={64}
                style={{ borderRadius: '10px' }}
              />
            </div>
          </NavLink>
          <NavLink to="/dash/dashboard ">
            <AiFillHome /> <p className="fs-5 fw-bold me-4">الرئيسية</p>
          </NavLink>
          <NavLink to="/dash/Courses ">
            <AiFillHome /> <p className="fs-5 fw-bold me-4">الكورسات</p>
          </NavLink>
          <NavLink to="/dash/club ">
            <PiFlagFill /> <p className="fs-5 fw-bold me-4">التوصيات </p>
          </NavLink>
          <NavLink to="/dash/contact-form ">
            <FaMessage /> <p className="fs-5 fw-bold me-4">الرسائل</p>
          </NavLink>
          {/* <NavLink to="/dash/consultations ">
            <FaTicketAlt /> <p className="fs-5 fw-bold me-4">التذاكر</p>
          </NavLink>
          <NavLink to="/dash/consultations-ticket ">
            <FaTicketAlt />{' '}
            <p className="fs-5 fw-bold me-4">التذاكر المحجوزة</p>
          </NavLink> */}
          <NavLink to="/dash/all-users ">
            <FaUsers /> <p className="fs-5 fw-bold me-4">كل المستخدمين</p>
          </NavLink>
        </div>
        <div
          className="d-flex justify-content-start"
          style={{ padding: '8px' }}
          onClick={() => setSidebarOpen((pre) => !pre)}
        >
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default SidebarDashboard;