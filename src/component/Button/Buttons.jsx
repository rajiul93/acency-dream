import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <Link
      to="/contact"
      className="relative inline-flex py-1 items-center justify-center 
      p-4 px-8   overflow-hidden font-medium text-base-100 transition 
      duration-300 ease-out border-2 border-base-100 bg-base-100 rounded-full shadow-md group"
    >
      <span
        className="absolute inset-0 flex items-center justify-center 
      w-full h-full text-base-100 duration-500 -translate-x-full bg-base-content rounded-r-full group-hover:translate-x-0 ease space-x-2"
      >
        <span> Contact Us</span>
        <FaArrowRightLong className="text-info text-xl" />
      </span>
      <span
        className="absolute   flex items-center justify-center w-full h-full 
      text-base-content transition-all duration-300 transform group-hover:translate-x-full ease"
      >
        Contact Us
      </span>
      <span className="relative text-neutral invisible">Button Text</span>
    </Link>
  );
};

export default Buttons;
