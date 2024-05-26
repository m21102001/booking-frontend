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
