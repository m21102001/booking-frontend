import { SidebarDashboard } from '@/layout';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player/lazy';
import { useEffect, useState } from 'react';
import axios from '@/api/axios';

const DetailsVideosDash = () => {
  const item = useLocation()?.state?.item;
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`videos/${item?._id}`)
      .then((response) => {
        setLoading(false);
        setVideos(response.data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [item]);

  return (
    <div className="dashboard d-flex flex-row">
      {loading && <div className='loading'></div>}
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className="fs-1 fw-bold">تفاصيل الفيديو</h2>
        </div>
        <section style={{ backgroundColor: '#eee' }}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-12">
                {!loading && !videos && <p>No data found</p>}
                {videos && (
                  <div className="card mb-4">
                    <ReactPlayer
                      url={videos?.url}
                      config={{
                        youtube: {
                          playerVars: { showinfo: 1 },
                        },
                      }}
                      controls
                      width="100%"
                      height="70vh"
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">عنوان الفيديو</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{videos?.title}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">وصف الفيديو</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {videos?.description}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">رابط الفيديو</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{videos?.url}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">تاريخ الاضافة </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{videos?.createdAt?.slice(0, 10)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailsVideosDash;
