import { Outlet } from "react-router-dom";
import Footer from "../../share/Footer/Footer";
import Footer2 from "../../share/Footer/Footer2";
import NavControl from "../../share/NavControl/NavControl";

const Root = () => {
  return (
    <div className="text-neutral">
      <NavControl />
      <Outlet />
      {/* footer start */}
      <div className="bg-base-content px-6">
        <Footer />
        <div className="divider h-0 p-0 divider-neutral"></div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Root;
