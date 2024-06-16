import { BsMusicNoteList } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdAddCall } from "react-icons/md";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
const Services = () => {
  return (
<div className="my-24">
  <SectionTitle title="Service" />
<div className="
    grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4
       items-center max-w-xl px-4 md:max-w-2xl gap-10 lg:max-w-5xl mx-auto ">
  
        <div className="p-5 flex  flex-col  justify-between    min-w-48 h-48 bg-base-100  cursor-pointer  shadow-xl    duration-300 hover:-translate-y-2 rounded-xl ">
          <h1 className="text-xl font-medium text-black">
            Google <br /> Assistant
          </h1>
          <span>
            <FcGoogle className="text-3xl" />
          </span>
        </div>
        <div className="p-5 flex flex-col justify-between   min-w-48 h-48 bg-base-100   cursor-pointer  shadow-xl duration-300 hover:-translate-y-2 rounded-xl ">
          <h1 className="text-xl  font-medium text-black">Navigate</h1>
          <span>
            <FaLocationArrow className="text-3xl text-[#0284c7]" />
          </span>
        </div>
    
  
        <div className="p-5 flex  flex-col justify-between   :min-w-48 h-48 bg-base-100  cursor-pointer  shadow-xl duration-300 hover:-translate-y-2 rounded-xl ">
          <h1 className="text-xl font-medium text-black">Communicate</h1>
          <span>
            <MdAddCall className="text-3xl text-[#0284c7]" />
          </span>
        </div>
        <div className="p-5 flex flex-col justify-between    min-w-48 h-48 bg-base-100  cursor-pointer  shadow-xl duration-300 hover:-translate-y-2 rounded-xl ">
          <h1 className="text-xl font-medium text-black">Entertain</h1>
          <span>
            <BsMusicNoteList className="text-3xl text-[#0284c7]" />
          </span>
        </div>
  
        <div className="p-5 flex  flex-col  justify-between    min-w-48 h-48 bg-base-100  cursor-pointer  shadow-xl    duration-300 hover:-translate-y-2 rounded-xl ">
          <h1 className="text-xl font-medium text-black">
            Google <br /> Assistant
          </h1>
          <span>
            <FcGoogle className="text-3xl" />
          </span>
        </div>
        <div className="p-5 flex flex-col justify-between   min-w-48 h-48 bg-base-100   cursor-pointer  shadow-xl duration-300 hover:-translate-y-2 rounded-xl ">
          <h1 className="text-xl  font-medium text-black">Navigate</h1>
          <span>
            <FaLocationArrow className="text-3xl text-[#0284c7]" />
          </span>
        </div>
    
  
        <div className="p-5 flex  flex-col justify-between   :min-w-48 h-48 bg-base-100  cursor-pointer  shadow-xl duration-300 hover:-translate-y-2 rounded-xl ">
          <h1 className="text-xl font-medium text-black">Communicate</h1>
          <span>
            <MdAddCall className="text-3xl text-[#0284c7]" />
          </span>
        </div>
        <div className="p-5 flex flex-col justify-between    min-w-48 h-48 bg-base-100  cursor-pointer  shadow-xl duration-300 hover:-translate-y-2 rounded-xl ">
          <h1 className="text-xl font-medium text-black">Entertain</h1>
          <span>
            <BsMusicNoteList className="text-3xl text-[#0284c7]" />
          </span>
        </div>
     
    </div>
</div>
  );
};

export default Services;
