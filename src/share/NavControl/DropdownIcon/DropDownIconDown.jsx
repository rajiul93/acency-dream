import { FaAngleDown } from "react-icons/fa6";

 

const DropDownIconDown = ({isMobileMenuOpen}) => {
 
    return (
        <div>

         <FaAngleDown strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : "" }`} />
                 
                  
        </div>
    );
};

export default DropDownIconDown;