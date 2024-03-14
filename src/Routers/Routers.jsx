import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {
  AdviceAdvisors,
  ConsaultStore,
  ConsaultStoreItem,
  ContactUS,
  Courses,
  Dashboard,
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
  VerifyCode,
  VerifyEmailCode
} from '@/pages';


const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consault-store" element={<ConsaultStore />} />
          <Route path="/consault-store-item" element={<ConsaultStoreItem />} />
          <Route path='question-and-answer' element={<QuestionAnswer />} />
          <Route path="/Advice-advisors" element={<AdviceAdvisors />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/contactUs" element={<ContactUS />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          {/* -----------------------auth -------------------- */}
          <Route
            path="/auth/reservation-ticket"
            element={
              <ReservationTicket />
            }
          />
          <Route
            path="/auth/sign-up/student"
            element={
              <SignUpStudent />
            }
          />
          <Route
            path="/auth/sign-up/instractor"
            element={
              <SignUp />
            }
          />
          <Route
            path="/auth/verifyEmailCode"
            element={
              <VerifyEmailCode />
            }
          />
          <Route path="/auth/forget-password" element={<ForgetPassword />} />
          <Route path="/auth/verify-code" element={<VerifyCode />} />
          <Route path="/auth/resat-password" element={<ResatPassword />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          {/* --------------------Dashboard---------------------- */}
          <Route path='/dash/dashboard' element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
