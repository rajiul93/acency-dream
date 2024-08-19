import { useRef } from "react";
// Import Swiper React components
import { MdOutlineRateReview } from "react-icons/md";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
const AboutUs = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const outSourceData = [
    {
      name: " — Daron D. Sneed",
      content:
        "Fast and professional. Delivered as expected and everything worked as expected. Will most likely be back for additional coding projects.",
    },
    {
      name: "— Ameen Pabani",
      content:
        "Amit is exceptional!.I enjoyed working with him as he know what he is doing. Even this company team members are very active and professional. Definitely recommend this team! ",
    },
    {
      name: " —- Randi Anna",
      content:
        "Turned around exactly what was needed in good time. Grasped the requirements well, including understanding UK based details etc. I’ll must work on my future projects with them",
    },
    {
      name: "— Rogelio Hiney",
      content:
        "Working with Betechlab was a fantastic experience. They developed a custom script for me that not only met but exceeded my expectations. I highly recommend this company for anyone. Truly exceptional work!",
    },
  ];

  return (
    <div className=" my-14">
      <div className=" max-w-6xl mx-auto my-36  element mx-6  Box-Design ">
        <h1 className="text-center   pt-14 text-2xl uppercase leading-loose about-font flex justify-center items-center gap-3 text-info">
          <MdOutlineRateReview /> What are they saying about us
        </h1>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //     clickable: true,
          // }}
          loop={true}
          modules={[
            Autoplay,
            // Pagination
          ]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          speed={900}
          className="mySwiper"
        >
          {outSourceData?.map((item, index) => {
            return <SwiperSlide
              key={index}
              className="text-neutral text-center flex justify-center flex-col gap-10 h-56 pb-28 px-2"
            >
              <h1 className="text-xl   italic leading-snug">
              {item.content}

              </h1>
              <small>
              {item.name}
              </small>
            </SwiperSlide>;
          })}

          {/* <SwiperSlide className='text-neutral text-center flex justify-center flex-col gap-10 h-56 pb-28 px-2'>
                    <h1 className='text-xl   italic leading-snug'>The workflow and project management style that the team used was good</h1>
                    <small>MD. Rajiul Islam (Rayhan) <span className='text-gray-600'>CEO0</span></small>
                </SwiperSlide>
          
                <SwiperSlide className='text-neutral text-center flex justify-center flex-col gap-10 h-56 pb-28 px-2'>
                    <h1 className='text-xl   italic leading-snug'>The workflow and project management style that the team used was good</h1>
                    <small>MD. Rajiul Islam (Rayhan) <span className='text-gray-600'>CEO0</span></small>
                </SwiperSlide>
          
                <SwiperSlide className='text-neutral text-center flex justify-center flex-col gap-10 h-56 pb-28 px-2'>
                    <h1 className='text-xl   italic leading-snug'>The workflow and project management style that the team used was good</h1>
                    <small>MD. Rajiul Islam (Rayhan) <span className='text-gray-600'>CEO0</span></small>
                </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutUs;
