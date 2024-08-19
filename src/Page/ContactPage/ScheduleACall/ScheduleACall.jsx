import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ScheduleACall = () => {
    return (
        <div className=" md:flex cursor-pointer items-center  border-info border my-14">
            <h1  className="md:w-2/3   text-center p-5 text-2xl font-semibold ">
                Schedule a call
            </h1 >
            <Link to="/schedule-meeting" className="md:w-1/3 p-4 bg-info flex justify-center">
                <FaArrowRight className="text-5xl text-base-100"/>
            </Link>
        </div>
    );
};

export default ScheduleACall;