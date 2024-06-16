import { FaArrowRightLong } from "react-icons/fa6";

const Buttons = () => {
  return (
    <a
      href="#_"
      className="relative inline-flex items-center justify-center 
      p-4 px-8 py-3 overflow-hidden font-medium text-base-100 transition 
      duration-300 ease-out border-2 border-base-content bg-base-content rounded-full shadow-md group"
    >
      <span className="absolute inset-0 flex items-center justify-center 
      w-full h-full text-base-content duration-500 -translate-x-full bg-base-100 rounded-r-full group-hover:translate-x-0 ease space-x-2">
       <span> Button Text </span>
      <FaArrowRightLong className="text-info text-xl" />
      </span>
      <span className="absolute   flex items-center justify-center w-full h-full text-base transition-all duration-300 transform group-hover:translate-x-full ease">
        Button Text 2
      </span>
      <span className="relative text-white invisible">Button Text</span>
    </a>
  );
};

export default Buttons;
