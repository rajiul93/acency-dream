/* eslint-disable react/no-unknown-property */
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useState } from "react";
// ..
AOS.init();
const WhatWeDo = () => {
  const [praOne, setPraOne] = useState(false);
  const [praTwo, setPraTwo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const handleImageLoad1 = () => {
    setLoading(false);
  };
  const handleImageLoad2 = () => {
    setLoading2(false);
  };
  const handleImageLoad3 = () => {
    setLoading3(false);
  };
  return (
    <div>
      <div className="flex  gap-10 flex-col  px-6 md:flex md:flex-row max-w-6xl mx-auto  mt-20">
        <div className="w-full relative flex-1 mb-14 md:mb-0    ">
          {loading && loading2 && loading3 && (
            <div className="w-full relative flex-1 mb-14 md:mb-0    ">
              <div className="skeleton min-h-72 w-full"></div>
            </div>
          )}
          <img
            data-aos="zoom-in-up"
            onLoad={handleImageLoad1}
            loading="lazy"
            className="max-h-[480px] w-2/3 object-cover"
            src="https://betechlab.com/image/whoWeareBG.jpg"
            alt=""
          />

          <img
            onLoad={handleImageLoad2}
            data-aos="fade-right"
            className="w-1/2 absolute right-1/4 top-10"
            src="https://betechlab.com/image/whoWeare-1.jpg"
            alt=""
          />

          <img
            onLoad={handleImageLoad3}
            data-aos="zoom-in-up"
            className="w-1/2 absolute top-1/2 right-10"
            src="https://betechlab.com/image/whoWeare-2.jpg"
            alt=""
          />
        </div>
        <div className="w-full flex-1  space-y-4">
          <div className="flex gap-4 items-end">
            <div className="w-4  bg-warning h-1"></div>
            <div className="w-8 bg-warning h-1 "></div>
            <h1>WHO ARE WE</h1>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl   font-semibold">
              Over 10 Years of Trusted Experience in <br />{" "}
              <span className="text-info"> Quality Service Delivery.</span>
            </h1>

            <p>
              At Betechlab, we leverage over 10 years of trusted expertise to
              deliver top-notch technology solutions that drive business
              success. Our skilled team specializes in a wide array of services,
              <span
                onClick={() => setPraOne(true)}
                className={`text-info ms-4 cursor-pointer ${
                  praOne ? "hidden" : ""
                }`}
              >
                read more...
              </span>
              <span className={praOne ? "block" : "hidden"}>
                from software development to IT consulting, all designed to meet
                the unique needs of our clients. We pride ourselves on our
                commitment to quality and innovation, ensuring that every
                project is executed with precision and a deep understanding of
                the latest industry trends.
              </span>
            </p>
            <br />
            <p>
              Our approach is centered around building strong, lasting
              relationships with our clients. We prioritize transparency,
              reliability, and excellence in every interaction, making sure your
              business is equipped
              <span
                onClick={() => setPraTwo(true)}
                className={`text-info ms-4 cursor-pointer ${
                  praTwo ? "hidden" : ""
                }`}
              >
                read more...
              </span>
              <span className={praTwo ? "block" : "hidden"}>
                with the best technology solutions available. Whether you're
                looking to enhance your digital infrastructure or innovate your
                business processes, Betechlab is your go-to partner for
                achieving outstanding results. Trust us to transform your vision
                into reality with our proven experience and dedication to
                quality service delivery.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
