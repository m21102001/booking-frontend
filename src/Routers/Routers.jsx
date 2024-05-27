import {
  Routes,
  Route,
  BrowserRouter  as Router,
  Navigate,
} from 'react-router-dom';
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
  HonorBoard,
  CreateHonorBoard,
  UpdateHonorBoard,
  CreateNewCourse,
  UpdateCourse,
  CreateNewVideo,
  UpdatePlaylistDevelopment,
  UpdateFAQDash,
  EditProfile,
  WhoUs,
  UpdatePasswordProfile,
  ConsTicketsField,
  DashUpdateHeader,
  CoursePayment,
  TicketPayment,
  About,
  UpdateAbout,
  Tools,
  UpdateTools,
  CreateTools,
  RequestReservationTicket,
  CreateAbout,
  DepositDash,
  DetailsDepositDash,
} from '@/pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authenticated, useAuth } from '@/context/Auth';

// eslint-disable-next-line react/prop-types
function Protect({ children, protect = false, path = '', role = 'user' }) {
  const authed = authenticated();
  if (
    authed === protect &&
    (role === 'admin' || role === 'manager') &&
    path === 'dash'
  ) {
    return children;
  }

  if (
    authed === protect &&
    role === 'user' &&
    authed !== true &&
    path !== 'login'
  )
    return <Navigate to={'/'} />;
  if (authed === protect && path !== 'dash') return children;
  return <Navigate to={protect ? '/auth/login' : '/'} />;
}
const Routers = () => {
  const allowed = useAuth().user;
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consault-store" element={<ConsaultStore />} />
          <Route path="/consault-store-item" element={<ConsaultStoreItem />} />
          <Route path="/question-and-answer" element={<QuestionAnswer />} />
          <Route path="/Advice-advisors" element={<AdviceAdvisors />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/cons-tickets/field" element={<ConsTicketsField />} />
          <Route
            path="/consault-store-item/course-detalis/:id"
            element={<DetailsPlaylistDevelopment />}
          />
          <Route
            path="/consault-store-item/update-course-detalis/:id"
            element={<UpdatePlaylistDevelopment />}
          />
          <Route
            path="/development/details-video/:id"
            element={<CourseDetails />}
          />
          <Route
            path="/development/update-video/:id"
            element={<UpdateCourse />}
          />
          <Route
            path="/development/create-video"
            element={<CreateNewVideo />}
          />
          <Route path="/courses/course-update" element={<CourseUpdate />} />
          <Route path="/contactUs" element={<ContactUS />} />
          <Route path="/who-us" element={<WhoUs />} />
          <Route path="auth/payment/fail" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          {/* -----------------------auth -------------------- */}
          <Route path="/auth/profile" element={<AccountProfile />} />
          <Route path="/auth/profile/edit-profile" element={<EditProfile />} />
          <Route
            path="/auth/profile/edit-profile/update-password"
            element={
              <UpdatePasswordProfile />
            } />
          <Route
            path="/auth/Course-payment"
            element={<CoursePayment />}
          />
          <Route
            path="/auth/ticket-payment"
            element={<TicketPayment />}
          />
          <Route
            path="/auth/reservation-ticket"
            element={<ReservationTicket />}
          />
          <Route
            path="/auth/request/reservation-ticket"
            element={<RequestReservationTicket />}
          />
          <Route
            path="/auth/create-reservation-ticket"
            element={<CreateReservationTicket />}
          />
          <Route path="/auth/create-new-course" element={<CreateNewCourse />} />
          <Route
            path="/auth/login"
            element={
              <Protect path="login">
                <Login />
              </Protect>
            }
          />
          <Route path="/auth/sign-up/student" element={<SignUpStudent />} />
          <Route path="/auth/sign-up/instractor" element={<SignUp />} />
          <Route path="/auth/verifyEmailCode" element={<VerifyEmailCode />} />
          <Route path="/auth/forget-password" element={<ForgetPassword />} />
          <Route path="/auth/verify-forget-password" element={<VerifyCode />} />
          <Route path="/auth/resat-password" element={<ResatPassword />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          {/* --------------------Dashboard---------------------- */}
          <Route
            path="/dash/dashboard"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <Dashboard />
              </Protect>
            }
          />
          <Route
            path="/dash/update-header/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DashUpdateHeader />
              </Protect>
            }
          />
          <Route
            path="/dash/about"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <About />
              </Protect>
            }
          />
          <Route
            path="/dash/about/create-new"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <CreateAbout />
              </Protect>
            }
          />
          <Route
            path="/dash/about/update/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <UpdateAbout />
              </Protect>
            }
          />
            <Route
              path="/dash/tools"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <Tools />
                </Protect>
              }
            />
            <Route
              path="/dash/tools/create-new"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <CreateTools />
                </Protect>
              }
            />
            <Route
              path="/dash/tools/update/:id"
              element={
                <Protect path="dash" protect role={allowed?.role}>
                  <UpdateTools />
                </Protect>
              }
            />
          <Route
            path="/dash/contact-form"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <ContactFormDash />
              </Protect>
            }
          />
          <Route
            path="/dash/details-contact-form/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DeatilsContactFormDash />
              </Protect>
            }
          />
          <Route
            path="/dash/mentors"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <AllMentorsmDash />
              </Protect>
            }
          />
          <Route
            path="/dash/mentors/mentor-updated/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DetailsMentorsmDash />
              </Protect>
            }
          />
          <Route
            path="/dash/mentors/mentor-details/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DetailsMentorsDetailsDash />
              </Protect>
            }
          />
          <Route
            path="/dash/mentors/inactive"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <AllInActieMentorsmDash />
              </Protect>
            }
          />
          <Route
            path="/dash/mentors/inActive/mentor-details/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DetailsInActiveMentorsmDash />
              </Protect>
            }
          />
          <Route
            path="/dash/courses"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <CoursesDash />
              </Protect>
            }
          />
          <Route
            path="/dash/update-playlist/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <UpdatePlaylistDash />
              </Protect>
            }
          />
          <Route
            path="/dash/details-playlist/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DetailsPlaylistDash />
              </Protect>
            }
          />
          <Route
            path="/dash/create-playlist-item"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <CreatePlaylistDash />
              </Protect>
            }
          />
          <Route
            path="/dash/create-video-item"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <CreateVideosDash />
              </Protect>
            }
          />
          <Route
            path="/dash/update-videos/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <UpdateVideosDash />
              </Protect>
            }
          />
          <Route
            path="/dash/details-videos/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DetailsVideosDash />
              </Protect>
            }
          />
          <Route
            path="/dash/cons-fields"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <ConsFieldsDash />
              </Protect>
            }
          />
          <Route
            path="/dash/cons-fields/create-item"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <CreateConsFieldsDash />
              </Protect>
            }
          />
          <Route
            path="/dash/cons-fields/update-item/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <UpdateConsFieldsDash />
              </Protect>
            }
          />
          <Route
            path="/dash/frequently-asked-questions"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <FAQ />
              </Protect>
            }
          />
          <Route
            path="/dash/frequently-asked-questions/details/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DetailsFAQDash />
              </Protect>
            }
          />
          <Route
            path="/dash/frequently-asked-questions/cteate-item"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <CreateFAQDash />
              </Protect>
            }
          />
          <Route
            path="/dash/frequently-asked-questions/frequently-asked-questions-update/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <UpdateFAQDash />
              </Protect>
            }
          />
          <Route
            path="/dash/honor-board"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <HonorBoard />
              </Protect>
            }
          />
          <Route
            path="/dash/honor-board/create-item"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <CreateHonorBoard />
              </Protect>
            }
          />
          <Route
            path="/dash/honor-board/update-item/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <UpdateHonorBoard />
              </Protect>
            }
          />
          <Route
            path="/dash/deposit/cash"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DepositDash />
              </Protect>
            }
          />
          <Route
            path="/dash/deposit/cash/details/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DetailsDepositDash />
              </Protect>
            }
          />
          <Route
            path="/dash/all-users"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <AllUsersDash />
              </Protect>
            }
          />
          <Route
            path="/dash/all-users/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <DetailsAllUsersDash />
              </Protect>
            }
          />
          <Route
            path="/dash/update-role-user/:id"
            element={
              <Protect path="dash" protect role={allowed?.role}>
                <UpdateRoleUsersDash />
              </Protect>
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
