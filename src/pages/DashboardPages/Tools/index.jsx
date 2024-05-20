import { useEffect, useState } from 'react'
import { SidebarDashboard } from '@/layout'
import axios from '@/api/axios'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const Tools = () => {
  const [loading, setLoading] = useState(false)
  const [tool, setTool] = useState([])
  useEffect(() => {
    setLoading(false);
    axios.get(`tools`)
      .then((response) => {
        setTool(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const handelDelete = async (id) => {
    setLoading(true)
    await axios.delete(`tools/${id}`, {
      headers: {
        "Content-Type": 'application/json'
      },
    }).then((response) => {
      axios.get('tools').then(response => {
        setTool(response.data)
        setLoading(false)
      }).catch(error => {
        setLoading(false)
      })
    })
  }
  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>ادوات سايس الابتكار </h2>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <Link to="/dash/tools/create-new">
            <button type="button" className="btn btn-primary d-block m-3" style={{ padding: "7px 6rem" }}>اضافة جديد</button>
          </Link>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">الصورة</th>
              <th scope="col"> العنوان</th>
              <th scope="col"> الوصف</th>
              <th scope="col"> اللينك</th>
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && tool?.document?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <LazyLoadImage
                    src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
                    className="img-fluid"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: "50%",
                    }}
                    alt={item?.title}
                  />
                </td>
                <td>{item?.title}</td>
                <td>{item?.description}</td>
                <td>{item?.link}</td>
                <td>
                  <Link
                    to={`/dash/tools/update/${item._id}`}
                    state={{ item: item }}
                  >
                    <button className="btn btn-outline-success mx-2 px-4">تعديل</button>
                  </Link>
                  <button onClick={() => handelDelete(item?._id)} className="btn btn-outline-danger mx-2 px-4">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Tools