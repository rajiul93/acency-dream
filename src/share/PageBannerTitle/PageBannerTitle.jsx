import { useState } from "react";

const PageBannerTitle = () => {
  const [praOne, setPraOne] = useState(false);

  return (
    <div
      className="items-center lg:min-h-[50vh] px-6  max-w-6xl grid-cols-2 mx-auto overflow-hidden lg:grid md:py-14 lg:pt-24 xl:py-14 lg:mt-3 xl:mt-5"
  
    >
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold text-info xl:text-5xl lg:text-3xl">
          About Us
        </h1>
        <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
          <p>
            At Betechlab, we are passionate about crafting innovative technology
            solutions that drive business growth and success. With over a decade
            of proven experience, our dedicated team of experts brings a wealth
            of knowledge and creativity to every project.
            <span
              onClick={() => setPraOne(true)}
              className={`text-info ms-4 cursor-pointer ${
                praOne ? "hidden" : ""
              }`}
            >
              read more...
            </span>
            <span className={praOne ? "block" : "hidden"}>
              We specialize in delivering personalized services that meet the
              unique needs of each client, from software development to
              comprehensive IT consulting. Our commitment to excellence and
              customer satisfaction sets us apart, making Betechlab your trusted
              partner in navigating the ever-evolving tech landscape. Join us as
              we continue to push the boundaries of what's possible and
              transform your ideas into impactful realities.
            </span>
          </p>
        </p>
      
      </div>
      <div className="flex items-center   ">
        <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto ">
          <div style={{ width: "100%", height: "100%" }} >
            <div style={{ width: "100%", height: "100%" }} >
              <video
              className="border-4"
                controls
                width="100%"
                height="100%"
                src="https://betechlab.com/video/about-us.mp4"
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></video>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default PageBannerTitle;
