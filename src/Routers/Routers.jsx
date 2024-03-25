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
  CourseDetails,
  CourseUpdate,
  EditProfile,
  DetailsPlaylistDevelopment,
  CreateReservationTicket,
  DeatilsContactFormDash,
  DetailsAllUsersDash,
  UpdateRoleUsersDash,
  AllMentorsmDash,
  DetailsMentorsmDash,
  AllInActieMentorsmDash,
  DetailsInActiveMentorsmDash,
  DetailsMentorsDetailsDash,
  UpdateVideosDash,
  ConsFieldsDash,
  CreateConsFieldsDash,
  UpdateConsFieldsDash,
  FAQ,
  DetailsFAQDash,
  CreateFAQDash,
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
          <Route path="/Courses" element={<Courses />} />
          <Route path="/development/details-playlist/:id" element={<DetailsPlaylistDevelopment />} />
          <Route path="/courses/course-details" element={<CourseDetails />} />
          <Route path="/courses/course-update" element={<CourseUpdate />} />

          <Route path="/contactUs" element={<ContactUS />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          {/* -----------------------auth -------------------- */}
          <Route path="/auth/profile" element={<AccountProfile />} />
          <Route path="/auth/profile/edit-profile" element={<EditProfile />} />
          <Route
            path="/auth/reservation-ticket"
            element={<ReservationTicket />}
          />
          <Route
            path="/auth/create-reservation-ticket"
            element={<CreateReservationTicket />}
          />
          <Route path="/auth/login" element={<Login />} />
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
          <Route
            path="/dash/details-contact-form/:id"
            element={
              <DeatilsContactFormDash />
            }
          />
          <Route
            path="/dash/mentors"
            element={
              <AllMentorsmDash />
            }
          />
          <Route
            path="/dash/mentors/mentor-updated/:id"
            element={
              <DetailsMentorsmDash />
            }
          />
          <Route
            path="/dash/mentors/mentor-details/:id"
            element={
              <DetailsMentorsDetailsDash />
            }
          />
          <Route
            path="/dash/mentors/inactive"
            element={
              <AllInActieMentorsmDash />
            }
          />
          <Route
            path="/dash/mentors/inActive/mentor-details/:id"
            element={
              <DetailsInActiveMentorsmDash />
            }
          />
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
            path="/dash/update-videos/:id"
            element={<UpdateVideosDash />}
          />
          <Route
            path="/dash/details-videos/:id"
            element={<DetailsVideosDash />}
          />
          <Route
            path="/dash/cons-fields"
            element={<ConsFieldsDash />}
          />
          <Route
            path="/dash/cons-fields/create-item"
            element={<CreateConsFieldsDash />}
          />
          <Route
            path="/dash/cons-fields/update-item/:id"
            element={<UpdateConsFieldsDash />}
          />
          <Route
            path="/dash/frequently-asked-questions"
            element={<FAQ />}
          />
          <Route
            path="/dash/frequently-asked-questions/details/:id"
            element={<DetailsFAQDash />}
          />
          <Route
            path="/dash/frequently-asked-questions/cteate-item"
            element={<CreateFAQDash />}
          />
          {/* <Route path="/dash/video-update/:id" element={<VideosUpdate />} /> */}
          <Route path="/dash/all-users" element={<AllUsersDash />} />
          <Route
            path="/dash/all-users/:id"
            element={
              <DetailsAllUsersDash />
            }
          />
          <Route
            path="/dash/update-role-user/:id"
            element={
              <UpdateRoleUsersDash />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default Routers;
