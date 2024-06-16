import { Outlet } from "react-router-dom";
import Footer from "../../share/Footer/Footer";
import Footer2 from "../../share/Footer/Footer2";
import NavControl from "../../share/NavControl/NavControl";

const Root = () => {
  return (
    <div>
      <NavControl />
      <Outlet />
      <div className="bg-base-content px-6">
        <Footer />
        <div className="divider divider-neutral"></div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Root;
