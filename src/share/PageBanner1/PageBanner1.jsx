import Lottie from "react-lottie";
// import banner from '../../assets/joinforum.png';
import { Link } from "react-router-dom";
import banner from "../../assets/company_work.json";
const PageBanner1 = ({ content, title }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: banner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="hero card-font min-h-[50vh] bg-gradient-to-b from-[#d1fae5] to-base-100">
      <div className="hero-content max-w-6xl mx-auto flex-col lg:flex-row-reverse">
        <Lottie options={defaultOptions} height={400} width={400} />

        <div className="lg:w-1/2">
          <h1 className="about-font text-2xl md:text-5xl font-semibold leading-extra-loose">
            {title}
          </h1>
          <p className="py-6 font-normal text-neutral text-[18px]">{content}</p>
          <Link to="/contact" className="bg-info shadow-xl about-font px-8 hover:bg-accent duration-500 py-3 lg:mt-6 rounded-xl text-xl text-base-100">
          Let's Get Started
          </Link >
        </div>
      </div>
    </div>
  );
};

export default PageBanner1;
