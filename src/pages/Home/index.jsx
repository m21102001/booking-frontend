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
const index = () => {
  return (
    <div className='home-header'>
      <Navbar />
      <Header />
      <CoursesOpen />
      <GoldCard />
      <DigitalMarkting />
      <StartElectronicEcommerce />
      <ServicesIncluded />
      <WhyKambridage />
      <AboutThat />
      <Footer />

      <Link
        //  to='/dash/dashboard'
        className='editIcon'
      >D</Link>
    </div>
  )
}

export default index
