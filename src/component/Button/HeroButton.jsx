import { Link } from "react-router-dom";

const HeroButton = () => {
  return (
    <Link to="/contact" className="relative px-3 lg:px-10 py-3  w-1/2 cursor-pointer font-medium text-white transition duration-300 bg-info rounded-lg hover:shadow-2xl ease">
      <span className="absolute bottom-0 left-0 h-full -ml-2"></span>
      <span className="absolute top-0 right-0   h-full -mr-3"></span>
      <span className="relative text-sm md:text-[16px]">Tell Us About Your Needs</span>
    </Link>
  );
};

export default HeroButton;
