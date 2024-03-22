import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import {
  AccountProfile,
  AdviceAdvisors,
  AllUsersDash,
  ConsaultStore,
  ConsaultStoreItem,
  ContactFormDash,
  ContactUS,
  Courses,
  CoursesDash,
  CreatePlaylistDash,
  CreateVideosDash,
  Dashboard,
  DetailsPlaylistDash,
  DetailsVideosDash,
  ErrorPage,
  ForgetPassword,
  Home,
  Login,
  Payment,
  QuestionAnswer,
  ResatPassword,
  ReservationTicket,
  Shop,
  SignUp,
  SignUpStudent,
  TermsCondition,
  UpdatePlaylistDash,
  VerifyCode,
  VerifyEmailCode,
} from '@/pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authenticated, useAuth } from '@/context/Auth';
// import axios from '@/api/axios';

// eslint-disable-next-line react/prop-types
// function Protect({ children, protect = false, path = '', role = 'user' }) {
//   const { user } = useAuth();
//   console.log(user);
//   const authed = authenticated();
//   if (
//     authed === protect &&
//     (role === 'admin' || role === 'godAdmin' || role === 'manager') &&
//     path === 'dash'
//   ) {
//     return children;
//   }

//   if (
//     authed === protect &&
//     role === 'user' &&
//     authed !== true &&
//     path !== 'login'
//   )
//     return <Navigate to={'/'} />;
//   if (authed === protect && path !== 'dash') return children;
//   return <Navigate to={protect ? '/auth/login' : '/'} />;
// }
const Routers = () => {
  const { user, Loggedin } = useAuth();
  // const { data } = axios.get('users/me/', {
  //   withCredentials: true,
  // });
  // console.log(data);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consault-store" element={<ConsaultStore />} />
          <Route path="/consault-store-item" element={<ConsaultStoreItem />} />
          <Route path="question-and-answer" element={<QuestionAnswer />} />
          <Route path="/Advice-advisors" element={<AdviceAdvisors />} />
          <Route path="/auth/profile" element={<AccountProfile />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/contactUs" element={<ContactUS />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          {/* -----------------------auth -------------------- */}
          <Route
            path="/auth/reservation-ticket"
            element={<ReservationTicket />}
          />
          <Route path="/auth/sign-up/student" element={<SignUpStudent />} />
          <Route path="/auth/sign-up/instractor" element={<SignUp />} />
          <Route path="/auth/verifyEmailCode" element={<VerifyEmailCode />} />
          <Route path="/auth/forget-password" element={<ForgetPassword />} />
          <Route path="/auth/verify-forget-password" element={<VerifyCode />} />
          <Route path="/auth/resat-password" element={<ResatPassword />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          {/* --------------------Dashboard---------------------- */}
          <Route path="/dash/dashboard" element={<Dashboard />} />
          <Route path="/dash/contact-form" element={<ContactFormDash />} />
          <Route path="/dash/courses" element={<CoursesDash />} />
          <Route
            path="/dash/update-playlist/:id"
            element={<UpdatePlaylistDash />}
          />
          <Route
            path="/dash/details-playlist/:id"
            element={<DetailsPlaylistDash />}
          />
          <Route
            path="/dash/create-playlist-item"
            element={<CreatePlaylistDash />}
          />
          <Route
            path="/dash/create-video-item"
            element={<CreateVideosDash />}
          />
          <Route
            path="/dash/details-videos/:id"
            element={<DetailsVideosDash />}
          />
          {/* <Route path="/dash/video-update/:id" element={<VideosUpdate />} /> */}
          <Route path="/dash/all-users" element={<AllUsersDash />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default Routers;
