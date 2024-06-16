import React, { useRef } from 'react';
// Import Swiper React components
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutUs = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className='max-w-6xl mx-auto bg-gradient-to-r from-[#164e63] to-[#0f172a] my-24'>
            <h1 className='text-center text-base-100 pt-14 text-2xl uppercase leading-loose about-font'>What are they saying about us</h1>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }} 
                loop={true}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                speed={900}
                className="mySwiper"
            >
                <SwiperSlide className='text-base-100 text-center flex justify-center flex-col gap-10 h-56 pb-14 px-2'>
                    <h1 className='text-xl font-thin italic leading-snug'>The workflow and project management style that the team used was good</h1>
                    <small>MD. Rajiul Islam (Rayhan) <span className='text-gray-600'>CEO</span></small>
                </SwiperSlide>
                <SwiperSlide className='text-base-100 text-center flex justify-center flex-col gap-10 h-56 pb-14 px-2'>
                    <h1 className='text-xl font-thin italic leading-snug'>The workflow and project management style that the team used was good</h1>
                    <small>MD. Rajiul Islam (Rayhan) <span className='text-gray-600'>CEO</span></small>
                </SwiperSlide>
                <SwiperSlide className='text-base-100 text-center flex justify-center flex-col gap-10 h-56 pb-14 px-2'>
                    <h1 className='text-xl font-thin italic leading-snug'>The workflow and project management style that the team used was good</h1>
                    <small>MD. Rajiul Islam (Rayhan) <span className='text-gray-600'>CEO</span></small>
                </SwiperSlide>
                <SwiperSlide className='text-base-100 text-center flex justify-center flex-col gap-10 h-56 pb-14 px-2'>
                    <h1 className='text-xl font-thin italic leading-snug'>The workflow and project management style that the team used was good</h1>
                    <small>MD. Rajiul Islam (Rayhan) <span className='text-gray-600'>CEO</span></small>
                </SwiperSlide>
            </Swiper>
            {/* You can place the progressCircle and progressContent elements here */}
            {/* <div ref={progressCircle} style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
                <svg viewBox="0 0 36 36">
                    <path
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#ddd"
                        strokeWidth="1"
                        strokeDasharray="100, 100"
                        style={{ strokeDashoffset: `calc(100 * (1 - var(--progress, 0)))` }}
                    />
                </svg>
                <div ref={progressContent}></div>
            </div> */}
        </div>
    );
};

export default AboutUs;
