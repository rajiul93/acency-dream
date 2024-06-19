import { AiFillProduct } from "react-icons/ai";
import { FaBorderStyle, FaUserAstronaut } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      <div className="card w-96 bg-gradient-to-r from-info to-indigo-500 text-primary-content">
        <div className="card-body">
          <h2 className=" text-center text-3xl font-semibold mb-6">Product</h2>
          <div className="flex justify-around">
            <AiFillProduct className="text-3xl" />
            <h1 className="text-3xl">21</h1>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-gradient-to-r from-info to-indigo-500 text-primary-content">
        <div className="card-body">
          <h2 className=" text-center text-3xl font-semibold mb-6">Users</h2>
          <div className="flex justify-around">
            <FaUserAstronaut className="text-3xl" />
            <h1 className="text-3xl">5</h1>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-gradient-to-r from-info to-indigo-500 text-primary-content">
        <div className="card-body">
          <h2 className=" text-center text-3xl font-semibold mb-6">Order</h2>
          <div className="flex justify-around">
            <FaBorderStyle className="text-3xl" />
            <h1 className="text-3xl">134</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
