import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './header.scss';
import axios from '@/api/axios';
const Header = () => {
  const [loading, setLoading] = useState(true);
  const [cover, setCover] = useState([])
  useEffect(() => {
    setLoading(true);
    axios
      .get('cover')
      .then((response) => {
        setCover(response.data);
        console.log('cover', response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <div className="container text-center">
      {!loading && cover?.document?.map((item, index) => (
        <div key={index} className="row align-items-start py-5">
          <div className="col-md-6 col-sm-12">
            <h1 className='text-end py-5 fw-bold'>{item?.title}</h1>
            <h2>{item?.description}</h2>
          </div>
          <div className="col-md-6 col-sm-12">
            <LazyLoadImage
              src={`${import.meta.env.VITE_IMAGE_URL}${item?.image}`}
              alt={item?.title}
              loading="lazy"
              height={500}
              width={500}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
