import banner from '../../assets/joinforum.png';
const PageBanner1 = () => {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content max-w-6xl mx-auto flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className=" text-2xl md:text-5xl font-bold">About Us</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-info rounded-none">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default PageBanner1;
