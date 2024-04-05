import { LazyLoadImage } from 'react-lazy-load-image-component';
import './header.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { image } from '@/db/data';
const Header = () => {
  return (
    <div className="header">
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        slidesPerView={1}
        loop={true}
      >
        {image?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="m-0 bg-dark">
              <LazyLoadImage
                src={item?.img}
                alt={item?.src}
                loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <img
        src="https://www.ts-p.co.uk/wp-content/uploads/2023/05/9.-Probate-and-Will-Trust-Estate-Disputes-2048x1365.jpg"
        className="home-image"
        alt=""
      />
    </div>
  );
};

export default Header;
