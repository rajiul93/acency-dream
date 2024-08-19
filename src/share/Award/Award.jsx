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
    <div className="mt-24 max-w-6xl mx-auto px-6">
      <>
        <Swiper
          slidesPerView={5}
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
              src="https://www.webscreenscraping.com/assets/img/client-logo/turstpilot.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://www.webscreenscraping.com/assets/img/client-logo/clutch.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://www.webscreenscraping.com/assets/img/client-logo/web-guru-logo-web-screen-scraping.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://www.webscreenscraping.com/assets/img/client-logo/develop-4u.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://www.webscreenscraping.com/assets/img/client-logo/crunchbase.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="box flex items-center">
            <img
              className=""
              src="https://www.webscreenscraping.com/assets/img/client-logo/goodfirms.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Award;
