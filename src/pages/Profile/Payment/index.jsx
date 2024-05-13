
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "@/layout"
import { FaClock, FaMoneyBillAlt } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
const Payment = () => {
  const navigate = useNavigate()
  return (
    <div style={{ color: 'var(--darkblue-color)' }}>
      <Navbar />
      <div className="container text-center pt-5">
          <Link
            to={`/`}
            className="row row-striped shadow-lg p-3 mb-5 bg-body rounded">
            <div className="col-10 fs-4 text-end" >
              <div className="mb-3 d-flex justify-content-between align-items-start">
                <h3 className="text-uppercase"><strong>عملية دفع فاشلة</strong></h3>
                <button type="button" className="btn btn-success">عاود عملية الشراء ف وقت لاحق</button>
              </div>
            </div>
          </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Payment