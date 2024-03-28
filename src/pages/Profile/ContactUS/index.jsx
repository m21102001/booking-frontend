import { useState } from 'react'
import { Footer, Navbar } from '@/layout'
import axios from '@/api/axios'
import './contactUs.scss'
import { aboutthats } from '@/db/data'
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')


  const hanelSubmit = async (e) => {
    e.preventDefault();
    if (!phone.match('[0-9]{11}')) {
      toast.error('من فضلك ادخل رقم هاتف صحيح');
      return;
    } else {
      setLoading(true);
      try {
        await axios
          .post(`contact/`, {
            name: name,
            email: email,
            address: address,
            phone: phone,
            message: message,
          }, { credentials: true })
          .then((response) => {
            console.log('created successful', response.data);
            setName('')
            setEmail('')
            setAddress('')
            setPhone('')
            setMessage('')
            toast.success('تم الارسال بنجاح');
            setLoading(false);
          });
      } catch (err) {
        setLoading(false);
        console.log('message', err.message);
        toast.error('خطأ فى الارسال تأكد من كتابة كتابة المعلومات بشكل صحيح');
      }
      setLoading(false)
      return;
    }

  };
  return (
    <>
      <Navbar />
      {loading && <div className="loading"></div>}
      <div className='contactUs'>
        <div className="StartElectronicEcommerce" id="about-us">
          <div>
            <div className="Container">
              <div className="row align-items-start">
                <div className="col-lg-12 col-md-12 px-5">
                  <div className='m-auto d-flex justify-content-center my-5'>
                    <span></span>
                    <h2 className='text-center fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}>من نحن ! </h2>
                    <span></span>
                  </div>
                  <h3 className="text-end text-light mb-4">
                    نحن فريق من المحترفين المتخصصين في مجالات متنوعة، نجمع بين
                    الخبرة والخبرة الواسعة في تقديم الاستشارات المبتكرة والمخصصة لعملائنا. تتمثل مهمتنا في توفير حلول
                    فريدة ومتميزة تلبي احتياجات العملاء وتساعدهم على تحقيق أهدافهم بكفاءة وفعالية. نحن نفخر بتوجيه
                    عملائنا نحو التميز والنجاح من خلال تقديم خدمات استشارية متميزة تعكس التزامنا بالجودة والمهنية.
                  </h3>
                </div>
                <div className="d-flex justify-content-around mt-5 card-style">
                  {aboutthats?.map((item, index) => (
                    <div key={index} className="card mx-3 mb-3 card-border">
                      <img
                        src={item?.image}
                        className="card-img-top image-card "
                        alt={item.title}
                      />
                      <div className="card-body">
                        <h5 className="card-title text-center">{item?.title}</h5>
                        <p className="card-text text-end fw-semibold">{item?.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='Container'>
            <div className='m-auto d-flex justify-content-center my-5'>
              <span></span>
              <h2 className='text-center comunation fs-1 fw-bold' style={{ color: "var(--gold-color2)" }}>اتصل بنا</h2>
              <span></span>
            </div>
            <div className='card-form form-control container rounded-4 text-end my-4'>
              <p className="pt-3 fw-bold fs-5 ">إليك مطلق الحرية لإرسال مقترحاتك وشكوتك</p>
              <form className="row g-3" onSubmit={hanelSubmit}>
                <div className="col-md-6 col-sm-12">
                  <label
                    htmlFor="inputName"
                    className="form-label"
                  >الاسم بالكامل</label>
                  <input
                    name="inputName"
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='الاسم بالكامل*'
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label
                    htmlFor="inputPhone"
                    className="form-label"
                  >الهاتف</label>
                  <input
                    name="inputPhone"
                    type="number"
                    className="form-control"
                    id="inputPhone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='الهاتف*'
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="inputEmail"
                    className="form-label"
                  >البريد الالكترونى</label>
                  <input
                    name="inputEmail"
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="البريد الالكترونى*"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="inputEmail"
                    className="form-label"
                  > العنوان</label>
                  <input
                    name="inputAddrss"
                    type="text"
                    className="form-control"
                    id="inputAddrss"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder=" العنوان*"
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="inputAddress2"
                    className="form-label"
                  >محتوى الرسالة</label>
                  <textarea
                    name='exampleFormControlTextarea1'
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='اكتب مقترحاتك وشكوتك'></textarea>
                </div>
                <div className="col-12">
                  {!loading && (
                    <button className='d-flex m-auto fs-4 send'>
                      إرسال
                    </button>
                  )}
                  {loading && (
                    <button className='d-flex m-auto send' disabled>
                      جاري الارسال ...
                    </button>
                  )}

                </div>
              </form>
            </div>
            <div className="text-center">
              <div className="row my-5">
                <div className="col">
                  <a href="https://wa.me/201095559682">
                    <div className="card card-form">
                      <div className="card-body">
                        <h5 className="card-title text-end">إتصل بنا مباشرة على :</h5>
                        <p className="card-text">+20(10114875263)</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="https://wa.me/201095559682">
                    <div className="card card-form">
                      <div className="card-body">
                        <h5 className="card-title text-end">التواصل عن طريق الواتساب :</h5>
                        <p className='card-text '>+20(10114782354)</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="mailto:mohayoumy@gmail.com">
                    <div className="card card-form">
                      <div className="card-body">
                        <h5 className="card-title text-end">التواصل عن طريق البريد الإلكتروني :</h5>
                        <p className="card-text">mohaeumy@gmail.com</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ContactUs
