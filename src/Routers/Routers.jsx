import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {
  ContactUS,
  ErrorPage,
  ForgetPassword,
  Home,
  Login,
  Payment,
  ResatPassword,
  Shop,
  SignUp,
  TermsCondition,
  VerifyCode
} from '@/pages';
import { Navbar } from '@/layout';


const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUS />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/auth/forget-password" element={<ForgetPassword />} />
          <Route path="/auth/verify-code" element={<VerifyCode />} />
          <Route path="/auth/resat-password" element={<ResatPassword />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
