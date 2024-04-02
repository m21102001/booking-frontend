import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/layout';
import axios from '@/api/axios';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/Auth';

const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState(user?.email);
  const [name, setName] = useState(user?.name);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios.put(
        'users/updateMe',
        {
          email: email,
          name: name,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toast.success('تم تعديل البيانات بنجاح');
      navigate('/auth/profile');
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      toast.error('حدث خطأ عند تعديل البيانات');
      console.log('response', err);
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
                    <div className="card-body p-md-5 color-mainColor ">
                      <h3 className="text-center mb-4 text-uppercase">
                        تعديل البيانات
                      </h3>
                      <form className="pb-5 pt-2" onSubmit={handelSubmit}>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form3Example1m2"
                          >
                            الاسم بالكامل
                          </label>
                          <input
                            type="text"
                            id="form3Example9"
                            className="form-control form-control-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="d-grid gap-2">
                          <button
                            className="btn btn-primary fs-4"
                            type="submit"
                          >
                            تعديل البيانات
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

export default EditProfile;
