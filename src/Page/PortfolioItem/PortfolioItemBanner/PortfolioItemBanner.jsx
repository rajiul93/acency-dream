const PortfolioItemBanner = () => {
  return (
    <section className="bg-light-blue-700 mb-24">
      <div
        className="md:flex pt-28 max-w-6xl  px-6 flex-row-reverse mx-auto justify-around items-center"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0 flex justify-center ">
          <img
            id="heroImg1"
            className="transition-all max-w-48 max-h-48 duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png"
            alt="Awesome hero page image"
          />
        </div>
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h1 className="text-2xl font-semibold text-base-100 text-center md:text-start">
            Grow Your Business
          </h1>
          <small className="text-base-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus itaque eius,
          </small>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItemBanner;
