import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '@/api/axios';
import './signup.scss';
import { Navbar } from '@/layout';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [check, setCheack] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [hourPrice, setHourPrice] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [image, setImage] = useState('');
  const [description, setDdescription] = useState('');
  // const [field, setField] = useState('');
  const [Video, setVideo] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showValidationMessage, setShowValidationMessage] = useState(true);

  const [categorya, setCategory] = useState([]);

  useEffect(() => {
    setIsPending(true);
    axios
      .get(`cons-fields/`)
      .then((response) => {
        setIsPending(false);
        setCategory(response.data);
        console.log('xxxxx', response.data);
      })
      .catch((error) => {
        setIsPending(false);
        console.log(error);
      });
  }, []);
  const getInitialState = () => {
    const selectType = 'تكنولوجيا';
    return selectType;
  };
  const [field, setField] = useState(getInitialState);
  const handleChangeType = (e) => {
    setField(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      toast.error('الرقم السري غير متطابق');
      return;
    }
    if (!phone.match('[0-9]{11}')) {
      toast.error('من فضلك ادخل رقم هاتف صحيح');
    } else {
      try {
        await axios
          .post(
            'auth/signup-mentor',
            {
              name: name,
              email: email,
              phone: phone,
              birthdate: birthdate,
              password: password,
              address: address,
              socialMedia: {
                facebook: facebook,
                twitter: twitter,
                linkedin: linkedin,
                instagram: instagram,
              },
              image: image,
              description: description,
              field: field,
              hourlyPrice: hourPrice,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            toast.success(' يتم انشاء حساب بنجاح, يجب تأكيد الايميل');

            console.log(response);
            navigate('/auth/verifyEmailCode');
          });
      } catch (err) {
        setIsPending(false);
        toast.error('الايميل بالفعل موجود, يجب تغيير الايميل');

        console.log('response', err.response);
      }
    }
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
      setShowValidationMessage(false);
      return;
    }
    if (passwordRegex.test(password)) {
      setShowValidationMessage(false);
    } else {
      setShowValidationMessage(true);
      setValidationMessage(
        'يجب ان يكون الرقم السري اكبر من 6 احرف وارقام'
        // "يجب ان يحتوى الرقم السري على رقم على الاقل وحرف كبير وحرف صغير و حرف خاص ويكون اكبر من 8 احرف"
        // 'Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long.'
      );
    }
  };

  return (
    <>
      <Navbar />
      <section className="h-100 bg-light">
        {isPending && <div className="loading"></div>}
        <div className="h-100">
          <div className="row d-flex justify-content-center align-items-center h-100 mx-0">
            <div className="col px-0">
              <div className="card card-registration">
                <div className="row g-0">
                  <div className="col-xl-6 text-end">
                    <div className="card-body p-md-5 color-mainColor">
                      <h3 className="mb-5 text-center text-uppercase ">
                        إنشاء حساب
                      </h3>
                      <form className="pb-5 pt-2" onSubmit={handelSubmit}>
                        <div className="form-outline mb-4">
                          <label className="form-label">
                            اضف صورة شخصية{' '}
                            {/* <span className="text-danger fw-bold">
                              ك لينك حاليا
                            </span> */}
                          </label>
                          <input
                            // type="file"
                            type="file"
                            name="image"
                            className="form-control mb-3"
                            id="image"
                            placeholder="اضف صوره*"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                          // onChange={(e) => setImage(e.target.files[0])}
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                              <label
                                className="form-label"
                                htmlFor="form3Example1m"
                              >
                                الاسم بالكامل
                              </label>
                              <input
                                type="text"
                                id="form3Example1m"
                                className="form-control form-control-lg"
                                placeholder=" الاسم بالكامل"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                htmlFor="form3Example1m1"
                              >
                                البريد الالكترونى
                              </label>
                              <input
                                type="text"
                                id="form3Example8"
                                className="form-control form-control-lg"
                                placeholder="example@email.com "
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <label className="form-label" htmlFor="form">
                                رقم الهاتف
                              </label>
                              <input
                                type="text"
                                id="form"
                                className="form-control form-control-lg"
                                placeholder=" 01xx xxxx xxx"
                                value={phone}
                                required
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example9">
                            تاريخ الميلاد
                          </label>
                          <input
                            type="date"
                            id="form3Example9"
                            className="form-control form-control-lg"
                            value={birthdate}
                            required
                            onChange={(e) => setBirthdate(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example90"
                          >
                            التخصص
                          </label>
                          <select
                            className="form-select form-select-lg mb-3"
                            aria-label=".form-select-lg example"
                          >
                            {!isPending &&
                              categorya?.document?.map((item, index) => (
                                <option
                                  key={index}
                                  required
                                  value={field}
                                  onChange={handleChangeType}
                                >
                                  {item?.field}
                                </option>
                              ))}
                          </select>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example92"
                          >
                            سعر الساعة
                          </label>
                          <input
                            type="number"
                            id="form3Example92"
                            className="form-control form-control-lg"
                            placeholder="150 جنية/ساعة"
                            value={hourPrice}
                            required
                            onChange={(e) => setHourPrice(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example98"
                          >
                            العنوان
                          </label>
                          <input
                            type="text"
                            id="form3Example98"
                            className="form-control form-control-lg"
                            placeholder="123 Main St, City, Country"
                            value={address}
                            // required
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="form-label"
                          >
                            اضف نبذة عن نفسك
                          </label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="محمد مهندس برمجيات اعمل لدى شركة x منذ عامين ....."
                            value={description}
                            required
                            onChange={(e) => setDdescription(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example97"
                          >
                            تويتر (x)
                          </label>
                          <input
                            type="text"
                            id="form3Example97"
                            className="form-control form-control-lg"
                            placeholder="https://www.x.com/watch?v=xxxxxxxx "
                            value={twitter}
                            // required
                            onChange={(e) => setTwitter(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example96"
                          >
                            لينكدين
                          </label>
                          <input
                            type="text"
                            id="form3Example96"
                            className="form-control form-control-lg"
                            placeholder="https://www.linkedin.com/in/xxxxxxxxx"
                            value={linkedin}
                            // required
                            onChange={(e) => setLinkedin(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example95"
                          >
                            فيسبوك
                          </label>
                          <input
                            type="text"
                            id="form3Example95"
                            className="form-control form-control-lg"
                            placeholder="https://www.facebook.com/xxxxxxxx "
                            value={facebook}
                            // required
                            onChange={(e) => setFacebook(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example94"
                          >
                            انستقرام
                          </label>
                          <input
                            type="text"
                            id="form3Example94"
                            className="form-control form-control-lg"
                            placeholder="https://www.instagram.com/xxxxxxxx "
                            value={instagram}
                            // required
                            onChange={(e) => setInstagram(e.target.value)}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <p className="mt-5 text-danger">
                            يجب ان تكون Unlisted وتحتوي علي فيديو تعرفي لا يقل
                            عن دقيقتين وفيديوهين شرح لا يقل عن 4 دقائق *
                          </p>
                          <label
                            className="form-label"
                            htmlFor="form3Example93"
                          >
                            رابط البلاي ليست
                          </label>
                          <input
                            type="text"
                            id="form3Example93"
                            className="form-control form-control-lg"
                            placeholder="https://www.youtube.com/xxxxxxxx "
                            value={Video}
                            // required
                            onChange={(e) => setVideo(e.target.value)}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cg"
                          >
                            الرقم السري
                          </label>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            placeholder="xxxxxxx"
                            onInput={validatePassword}
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-button mt-3"
                          >
                            {showPassword ? 'Hide password' : 'Show password'}
                          </button>
                        </div>
                        {showValidationMessage && (
                          <span className="validation-message">
                            {validationMessage}
                          </span>
                        )}
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example4cdg"
                          >
                            تأكيد الرقم السري
                          </label>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="form3Example4cdg"
                            className="form-control form-control-lg"
                            placeholder="xxxxxxx"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={check}
                            onChange={() => setCheack(check ? false : true)}
                            id="flexCheckDefault"
                            required
                          />
                          <label
                            className="form-check-label me-3"
                            htmlFor="flexCheckDefault"
                          >
                            نعم، أريد الاشتراك. أوافق على تطبيق
                            <Link to={'/terms-condition'}>
                              {' '}
                              الشروط والأحكام{' '}
                            </Link>
                            .
                          </label>
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            type="submit"
                            className={`btn btn-primary btn-lg ms-2 ${check || isPending ? '' : 'disabled'
                              } ${isPending ? 'disabled' : ''}`}
                          >
                            انشاء حساب جديد
                          </button>
                        </div>
                      </form>
                      <div className="mb-3 d-flex ">
                        هل لديك حساب بالفعل ؟
                        <Link
                          className="nav-link navli text-primary"
                          to={'/auth/login'}
                        >
                          سجل الدخول الان
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://images.squarespace-cdn.com/content/v1/5dfa7d03cf5d5f33f1fd937c/1583528966995-2OMTHJMYK7L18UGWVNS3/siteBg.jpg"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: '.25rem',
                        borderBottomLeftRadius: '.25rem',
                        height: '-webkit-fill-available',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
