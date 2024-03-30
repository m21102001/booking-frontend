import { services } from "@/db/data"
import "./ServicesIncluded.scss"
const ServicesIncluded = () => {
  return (
    <div className="Container ServicesIncluded" id="consalt">
      <h2 className="services text-center">خدماتنا </h2>
      <div className="services-card d-flex flex-column flex-wrap ">
        {services?.map((item, index) => (
          index < 4 ? (
            <div key={index} className="row g-0 text-center shadow-lg p-3 px-3 mb-5 bg-body rounded cardService cardService1 ">
              <div className="col-sm-12 col-md-12 ">
                <h2 className="text-end mb-2 text-light">{item.title}</h2>
                <br />
                <p className="text-end  fs-5">{item?.description}</p>
              </div>
            </div>
          ) : null
        ))}

      </div>
    </div>
  )
}

export default ServicesIncluded