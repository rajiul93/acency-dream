import { Link } from "react-router-dom";

 

const ScheduleMeetingButton1 = () => {
    return (
          
        <Link to="/schedule-meeting" target="_blank" className="inline-flex items-center justify-center h-12 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline mt-4 align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-info border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline">
        Schedule Meeting
        </Link>
        
    );
};

export default ScheduleMeetingButton1;