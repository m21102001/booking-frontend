import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {
  ConsaultStore,
  ConsaultStoreItem,
  ContactUS,
  Dashboard,
  ErrorPage,
  ForgetPassword,
  Home,
  Login,
  Payment,
  ResatPassword,
  ReservationTicket,
  Shop,
  SignUp,
  TermsCondition,
  VerifyCode
} from '@/pages';


const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consault-store" element={<ConsaultStore />} />
          <Route path="/consault-store-item" element={<ConsaultStoreItem />} />
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
            path="/auth/sign-up"
            element={
              <SignUp />
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
