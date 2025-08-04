import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.css";
// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
const Award = () => {
  return (
    <div className="mt-10 max-w-6xl mx-auto px-6">
      <>
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://betechlab.com/image/awards/clutch.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://betechlab.com/image/awards/crunchbase.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://betechlab.com/image/awards/develop-4u.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://betechlab.com/image/awards/goodfirms.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://betechlab.com/image/awards/turstpilot.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://betechlab.com/image/awards/web-guru-logo-web-screen-scraping.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Award;
