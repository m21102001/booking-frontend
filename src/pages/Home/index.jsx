import { Link } from 'react-router-dom'
import { Footer, Header, Navbar } from '@/layout'
import './home.scss'
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
const Home = () => {
  const { user } = useAuth()
  return (
    <div className='home-header'>
      <Navbar />
      <Header />
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
