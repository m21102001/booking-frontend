import { useEffect, useState } from 'react'
import axios from '@/api/axios'
import { Link } from 'react-router-dom'
import { useAuth } from '@/context/Auth'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import {
  AboutThat,
  CoursesOpen,
  GoldCard,
  ServicesIncluded,
  WhyKambridage,
} from '@/components'
import { Footer, Header, Navbar } from '@/layout'
import './home.scss'
const Home = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [tool, setTool] = useState([])
  useEffect(() => {
    setLoading(false);
    axios.get(`tools`)
      .then((response) => {
        setTool(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return (
    <div className='home-header'>
      <Navbar />
      <Header />
      <div className="container text-center">
        <div className='m-auto d-flex justify-content-center my-5'>
          <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}>الادوات والمقاييس </h2>
          <span style={{ zIndex: "0", backgroundColor: "#000", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className="row d-flex justify-content-between">
          {!loading && tool?.document?.map((item, index) => (
            <div key={index} className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <Link to={item?.link}>
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                      alt={item?.title}
                      className="img-fluid rounded-start"
                    />
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item?.title}</h5>
                    <p className="card-text">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CoursesOpen />
      <GoldCard />
      {/* <DigitalMarkting /> */}
      {/* <StartElectronicEcommerce /> */}
      <ServicesIncluded />
      <WhyKambridage />
      <AboutThat />
      <Footer />
      {user?.role == 'manager' ? (
        <Link
          to='/dash/dashboard'
          className='editIcon'
        >D</Link>
      ) : null}
    </div>
  )
}

export default Home
