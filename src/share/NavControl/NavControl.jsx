import { useEffect, useState } from "react";
import { MainNavbar } from "./MainNavbar";
 

const NavControl = () => {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setHasShadow(true);
        } else {
          setHasShadow(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="   fixed  top-0 z-50  w-full  block ">
        <div
          className={`duration-300 z-50  bg-base-100  ${
            hasShadow ? "shadow-lg  p-1   bg-base-100" : ""
          }  fixed w-full`}
        >
      <MainNavbar />
          
        </div>
      </div>
    );
};

export default NavControl;