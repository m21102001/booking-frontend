import { Link } from 'react-router-dom';

const ClubMembers = () => {

  return (
    <div className='coursers-open goldNews py-5'>
      <div className='m-auto d-flex justify-content-center mb-5'>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        <h2 className='text-center comunation fs-1 fw-bold'>حجز استشارة مجانية  </h2>
        <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
      </div>
      <div className='m-auto d-flex justify-content-center'>

        <div>
          <h3 className='text-light text-center pb-5'>احجز استشارتك المجانية </h3>
          <p className='text-center text-light'>
            للحصول على خدمة استشارة مجانية، قم بالإشتراك في الباقة الفضية او الباقة الذهبية
          </p>
          <Link to={'/'} className='d-flex justify-content-center pt-4'>
            <button type="button" className='px-5'>اشترك الآن</button>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default ClubMembers
