import { FaAnglesDown, FaArrowUpRightDots, FaArrowsSpin } from "react-icons/fa6";
const DropdownMenu = () => {
  return (
    <div className="mx-auto flex      items-center justify-center    ">
      <div className="group relative cursor-pointer">
        <div className="flex items-center justify-between space-x-1  px-4">
          <a
            className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 ease-in-out"
            onClick=""
          >
            Service
          </a>
          <FaAnglesDown  className="menu-icon"/>
        </div>

        <div className="invisible absolute rounded-lg   z-50 flex w-56 flex-col bg-base-100 ease-in-out py-1 px-4 duration-500 text-gray-800 shadow-xl group-hover:visible">
          <div className="flex  items-center gap-2 py-4 mx-4 ">
            <FaArrowUpRightDots className="  block text-warning  text-2xl" />
            Sunday
          </div>
          <div className="flex items-center  gap-2 py-4 mx-4 ">
            <FaArrowsSpin   className="text-info block   text-2xl" />
            Sunday
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
