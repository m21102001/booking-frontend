import { useEffect, useState } from 'react'
import { SidebarDashboard } from '@/layout'
import axios from '@/api/axios'
import './Dashboard.scss'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const [cover, setCover] = useState([])
  useEffect(() => {
    setLoading(false);
    axios.get(`cover`)
      .then((response) => {
        setCover(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>الصفحة الرئيسية</h2>
        </div>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">الصوره</th>
              <th scope="col"> العنوان</th>
              <th scope="col"> الوصف</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && cover?.document?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <LazyLoadImage
                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                    alt={item?.title}
                    loading="lazy"
                    height={70}
                    width={70}
                  />
                </td>
                <td>{item?.title}</td>
                <td>{item?.description}</td>
                <td>
                  <Link
                    to={`/dash/update-header/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Dashboard