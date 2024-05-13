import { Link } from 'react-router-dom'
import { Footer, Header, Navbar } from '@/layout'
import './home.scss'
import axios from '@/api/axios'
import {
  AboutThat,
  CoursesOpen,
  DigitalMarkting,
  GoldCard,
  ServicesIncluded,
  StartElectronicEcommerce,
  WhyKambridage,
  // GoldChart
} from '@/components'
import { useAuth } from '@/context/Auth'
import { services } from '@/db/data'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect, useState } from 'react'
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
        <div className="row justify-content-center">
          {!loading && tool?.document?.map((item, index) => (
            <div key={index} className="col-6">
              <div className="card mb-3" style={{ maxWidth: "540px"}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <LazyLoadImage
                      src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                      className="img-fluid rounded-start"
                      alt={item?.title}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <Link to={item?.link}>
                        <h5 className="card-title">{item?.title}</h5>
                      </Link>
                      <p className="card-text">{item?.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
      {/* <div className="Container ServicesIncluded" id="consalt">
        <h2 className="services text-center">خدماتنا </h2>
        <div className="services-card d-flex flex-column flex-wrap ">
          {services?.map((item, index) => (
            index < 4 ? (
              <div key={index} className="row g-0 text-center shadow-lg p-3 px-3 mb-5 bg-body rounded cardService cardService1 ">
                <div className="col-sm-12 col-md-12 ">
                  <h2 className="text-end mb-2 text-light">{item.title}</h2>
                  <br />
                  <p className="text-end  fs-5">{item?.description}</p>
                </div>
              </div>
            ) : null
          ))}

        </div>
      </div> */}
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
