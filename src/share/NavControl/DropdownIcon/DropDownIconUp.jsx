import { FaAngleDown } from "react-icons/fa6";

 

const DropDownIconUp = ({isMenuOpen}) => {
    return (
        <div>
             <FaAngleDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
        </div>
    );
};

export default DropDownIconUp;