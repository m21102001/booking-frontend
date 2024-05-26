import { useEffect, useState } from 'react';
import axios from '@/api/axios'
import { Footer, Navbar } from '@/layout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const WhoUs = () => {
  const [loading, setLoading] = useState(false)
  const [about, setAbout] = useState([])
  useEffect(() => {
    setLoading(false);
    axios.get(`about-us`)
      .then((response) => {
        setAbout(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <div className="StartElectronicEcommerce">
        <div>
          <div className="Container">
            <div className="row align-items-start">
              <div className="col-md-12 px-5">
                <h2 className="text-light text-end fw-semibold my-3 pt-4 digitalMarkting">من نحن ! </h2>
                <h3 className="text-end text-light mb-4">
                  نحن فريق من المحترفين المتخصصين في مجالات متنوعة، نجمع بين الخبرة والخبرة الواسعة في تقديم الاستشارات المبتكرة والمخصصة لعملائنا. تتمثل مهمتنا في توفير حلول فريدة ومتميزة تلبي احتياجات العملاء وتساعدهم على تحقيق أهدافهم بكفاءة وفعالية. نحن نفخر بتوجيه عملائنا نحو التميز والنجاح من خلال تقديم خدمات استشارية متميزة تعكس التزامنا بالجودة والمهنية.
                </h3>
              </div>
              <div className="d-flex justify-content-around flex-wrap mt-5 card-style">
                {!loading && about?.document?.map((item, index) => (
                  <div key={index} className="card mx-3 mb-3 card-border w-100">
                    {/* <LazyLoadImage
                      src={item?.image}
                      className="card-img-top image-card "
                      alt={item.title}
                    /> */}
                    <div key={index} className="card-body">
                      <h5 className="card-title text-end">{item?.text1}</h5>
                      <p className="card-text text-end fw-semibold">{item?.text2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WhoUs;
