import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer, Navbar } from '@/layout';
import styles from '@/components/GoldCard/GoldCard.module.scss';
import axios from '@/api/axios';
import ReactPlayer from 'react-player/lazy';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/Auth';

const CourseDetails = () => {
  const item = useLocation()?.state?.item;
  const { user } = useAuth()
  const [loading, setLoading] = useState(false);
  const [videosPlaylist, setVideosPlaylist] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`courses/${item?._id}`)
      .then((response) => {
        setLoading(false);
        setVideosPlaylist(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  const handelDelete = async (id) => {
    try {
      setLoading(true);
      await axios
        .delete(`videos/${id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          axios.get(`courses/${item?._id}`);
          toast.success('تم حذف الفيديو بنجاح')
        });
    } catch (error) {
      setLoading(false);
      toast.error('حدث خطأ اثناء الحذف')
    }
  };

  return (
    <>
      <Navbar />
      <section style={{ backgroundColor: "var(--darkblue-color)", paddingTop: '2rem' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                {item?.url == null ? (
                  <LazyLoadImage
                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                    alt={item?.title}
                  />
                ) : (
                  <ReactPlayer
                    url={item?.url}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 }
                      },
                    }}
                    controls
                    width='100%'
                    height='70vh'
                  />
                )}
                <div className="card-body text-end">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">عنوان الفيديو</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{item?.title}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">وصف الفيديو</p>
                    </div>
                    <div className="col-sm-9">
                      <p className={`text-muted mb-0`}>{item?.description}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">تاريخ الاضافة </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{item?.createdAt?.split('T', 1)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='coursers-open goldNews py-5'>
        <div className='m-auto d-flex justify-content-center mb-5'>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
          <h2 className='text-center comunation fs-1 fw-bold'>  فديوهات  القائمة </h2>
          <span style={{ zIndex: "0", backgroundColor: "#f8d25c", width: "50px", height: "3px", margin: "auto 20px" }}></span>
        </div>
        <div className='m-auto d-flex justify-center'>
          <>
            <div className="container ">
              <div className={styles['home-grid']} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', padding: '0' }}>
                {!loading && videosPlaylist?.videos?.map((item, index) => (
                  <div
                    key={index}
                    className={styles['gold-div']} style={{ height: '570px' }}>
                    <div className="p-0">
                      <ReactPlayer
                        url={item?.url}
                        config={{
                          youtube: {
                            playerVars: { showinfo: 1 }
                          },
                        }}
                        width='-webkit-fill-available'
                        height={'350px'}
                      />
                    </div>
                    <div className=''>
                      <h3 className=' fw-700'>{item.title}</h3>
                      <Link
                        to={`/development/details-video/${item?._id}`}
                        state={{ item: item }}
                        onClick={window.scrollTo(0, 0)}
                      >
                        <button>شاهد الان </button>
                      </Link>
                      {user?.role == 'mentor' ? (
                        <>
                          <Link
                            to={`/development/update-video/${item?._id}`}
                            state={{ item: item }}
                          // onClick={window.scrollTo(0, 0)}
                          >
                            <button className='btn btn-info'> تعديل </button>
                          </Link>
                          <Link
                            onClick={() => (handelDelete(item._id))}
                          >
                            <button className='btn btn-danger'> حذف </button>
                          </Link>
                        </>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        </div>
      </div >
      <Footer />
    </>
  );
};

export default CourseDetails;
