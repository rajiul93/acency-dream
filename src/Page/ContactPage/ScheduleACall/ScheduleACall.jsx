import { Fa42Group } from "react-icons/fa6";

const ScheduleACall = () => {
    return (
        <div className=" md:flex   border-info border my-14">
            <h1  className="md:w-2/3   text-center p-5 text-2xl font-semibold ">
                Schedule a call
            </h1 >
            <div className="md:w-1/3 p-4 bg-info">
                <Fa42Group className="text-4xl text-warning"/>
            </div>
        </div>
    );
};

export default ScheduleACall;