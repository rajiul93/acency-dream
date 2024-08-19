import { Link } from "react-router-dom";

const ScheduleMeetingButton2 = () => {
  return (
    <Link
      to="/contact"
      className="
      inline-flex items-center justify-center h-12 px-10 py-0 mt-4
       text-xl font-semibold text-center text-gray-200 no-underline 
       align-middle transition-all duration-300 ease-in-out bg-info
        border-2 border-info  border-solid rounded-full cursor-pointer select-none
         hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
    >
      Contact Us
    </Link>
  );
};

export default ScheduleMeetingButton2;
