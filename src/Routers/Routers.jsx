import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ErrorPage, Home, Login, Payment, Shop, SignUp, TermsCondition } from '@/pages';
import { Navbar } from '@/layout';
import ContactUs from '@/pages/ContactUS';

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/auth/sign-up" element={<SignUp />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
