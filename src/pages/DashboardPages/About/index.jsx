import { useEffect, useState } from 'react'
import { SidebarDashboard } from '@/layout'
import axios from '@/api/axios'
import { Link } from 'react-router-dom'
const About = () => {
  const [loading, setLoading] = useState(false)
  const [cover, setCover] = useState([])
  useEffect(() => {
    setLoading(false);
    axios.get(`about-us`)
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
          <h2 className='fs-1 fw-bold'>عن سايس الابتكار </h2>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">النص الاول</th>
              <th scope="col"> النص الثانى</th>
              {/* <th scope="col"> النص الثالث</th> */}
              {/* <th scope="col"> النص الرابع</th> */}
              <th scope="col">الاحداث</th>
            </tr>
          </thead>
          <tbody>
            {!loading && cover?.document?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.text1}</td>
                <td>{item?.text2}</td>
                {/* <td>{item?.text3}</td> */}
                {/* <td>{item?.text4}</td> */}
                <td>
                  <Link
                    to={`/dash/about/update/${item._id}`}
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

export default About