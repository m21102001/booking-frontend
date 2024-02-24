import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '@/api/axios';
import './signup.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [student, setStudent] = useState(true);
  const [check, setCheack] = useState(false);
  const [terms, setTerms] = useState(false);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [hourPrice, setHourPrice] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [image, setImage] = useState('');
  const [description, setDdescription] = useState('');
  const [field, setField] = useState('');
  const [Video, setVideo] = useState('');

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (student) {
      alert('Please check the student box to continue');
      return;
    }
    try {
      await axios
        .post(
          'auth/signup-mentor',
          {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            birthdate: birthdate,
            password: password,
            role: 'mentor',
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
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          console.log(response);
          navigate('/auth/verifyphoneCode');
        });
    } catch (err) {
      setIsPending(false);
      console.log('response', err.response);
    }
  };

  // const validatePassword = () => {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //   if (!password) {
  //     setShowValidationMessage(false);
  //     return;
  //   }
  //   if (passwordRegex.test(password)) {
  //     setShowValidationMessage(false);
  //   } else {
  //     setShowValidationMessage(true);
  //     setValidationMessage(
  //       // "يجب ان يحتوى الرقم السري على رقم على الاقل وحرف كبير وحرف صغير و حرف خاص ويكون اكبر من 8 احرف"
  //       "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long."
  //     );
  //   }
  // };

  return (
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
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              {' '}
                              الاسم الاول
                            </label>
                            <input
                              type="text"
                              id="form3Example1m"
                              className="form-control form-control-lg"
                              placeholder=" محمد"
                              value={fname}
                              required
                              onChange={(e) => setFname(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label"
                              htmlFor="form3Example1n"
                            >
                              الاسم الاخير{' '}
                            </label>
                            <input
                              type="text"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                              placeholder=" احمد"
                              value={lname}
                              required
                              onChange={(e) => setLname(e.target.value)}
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
                            <label
                              className="form-label"
                              htmlFor="form3Example1n"
                            >
                              {' '}
                              رقم الهاتف{' '}
                            </label>
                            <input
                              type="text"
                              id="form3Example1n"
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
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={student}
                          onChange={() => setStudent(student ? false : true)}
                          id="checkedOut"
                        />
                        <label
                          className="form-check-label me-3"
                          htmlFor="flexCheckDefault"
                        >
                          هل انت مستشار
                        </label>
                      </div>
                      {student == false ? (
                        <>
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
                              <option selected>اختر تخصص</option>
                              <option value="1">طب</option>
                              <option value="2">هندسة</option>
                              <option value="3">علوم طبيعيه</option>
                            </select>
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example99"
                            >
                              سعر الساعة
                            </label>
                            <input
                              type="number"
                              id="form3Example99"
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
                              htmlFor="form3Example99"
                            >
                              {' '}
                              العنوان
                            </label>
                            <input
                              type="text"
                              id="form3Example99"
                              className="form-control form-control-lg"
                              placeholder="123 Main St, City, Country"
                              value={address}
                              required
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
                              htmlFor="form3Example99"
                            >
                              تويتر (x)
                            </label>
                            <input
                              type="text"
                              id="form3Example99"
                              className="form-control form-control-lg"
                              placeholder="https://www.x.com/watch?v=xxxxxxxx "
                              value={twitter}
                              required
                              onChange={(e) => setTwitter(e.target.value)}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example99"
                            >
                              لينكدين
                            </label>
                            <input
                              type="text"
                              id="form3Example99"
                              className="form-control form-control-lg"
                              placeholder="https://www.linkedin.com/in/xxxxxxxxx"
                              value={linkedin}
                              required
                              onChange={(e) => setLinkedin(e.target.value)}
                            />
                          </div>

                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example99"
                            >
                              فيسبوك{' '}
                            </label>
                            <input
                              type="text"
                              id="form3Example99"
                              className="form-control form-control-lg"
                              placeholder="https://www.facebook.com/xxxxxxxx "
                              value={facebook}
                              required
                              onChange={(e) => setFacebook(e.target.value)}
                            />
                          </div>
                          <div className="form-outline mb-4">
                            <label
                              className="form-label"
                              htmlFor="form3Example99"
                            >
                              انستقرام{' '}
                            </label>
                            <input
                              type="text"
                              id="form3Example99"
                              className="form-control form-control-lg"
                              placeholder="https://www.facebook.com/xxxxxxxx "
                              value={instagram}
                              required
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
                              htmlFor="form3Example99"
                            >
                              رابط البلاي ليست
                            </label>
                            <input
                              type="text"
                              id="form3Example99"
                              className="form-control form-control-lg"
                              placeholder="https://www.youtube.com/xxxxxxxx "
                              value={Video}
                              required
                              onChange={(e) => setVideo(e.target.value)}
                            />
                          </div>
                        </>
                      ) : null}

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                          الرقم السري
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          placeholder="xxxxxxx"
                          value={password}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          تأكيد الرقم السري
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          placeholder="xxxxxxx"
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
                          نعم، أريد الاشتراك. أوافق على تطبيق{' '}
                          <Link to={'/terms-condition'}>الشروط والأحكام</Link>.
                        </label>
                      </div>
                      <div className="d-grid gap-2">
                        <button
                          type="submit"
                          className={`btn btn-primary btn-lg ms-2 ${
                            check ? '' : 'disabled'
                          }`}
                        >
                          انشاء حساب جديد
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
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
  );
};

export default SignUp;

// "fname": "abc",
//   "lname": "Doe",
//   "email": "johndoe@example.com",
//   "phone": "1234567890",
//   "birthdate": "1990-01-01",
//   "password": "123456",
//   "role": "mentor",
//   "address": "123 Main St, City, Country",
//   "socialMedia": {
//     "facebook": "https://www.facebook.com/johndoe",
//     "twitter": "https://twitter.com/johndoe",
//     "linkedin": "https://www.linkedin.com/in/johndoe",
//     "instagram": "https://www.instagram.com/johndoe"
//   },
//   "image": "https://example.com/profile-picture.jpg",
//   "description": "I am an experienced mentor in the field of technology.",
//   "field": "Technology"
