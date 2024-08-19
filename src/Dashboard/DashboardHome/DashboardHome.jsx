import axios from "axios";
import { AiFillProduct } from "react-icons/ai";
import { FaBorderStyle, FaUserAstronaut } from "react-icons/fa";
import { useQuery } from "react-query";

const DashboardHome = () => {
  const {data={}, isLoading, } = useQuery({
    queryKey:["quantity"],
    queryFn:async()=>{
      const response = await axios.get(`${import.meta.env.VITE_API}/product/change/quantity`,{withCredentials:true});
      return response.data
    }
  })
  if (isLoading){
    return <p className="text-center mt-8"><span className="loading loading-dots loading-lg"></span></p>
  }
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-6">
      <div className="dashboard-home-card">
        <div className="card-body">
          <h2 className=" text-center text-3xl font-semibold mb-6">Service</h2>
          <div className="flex justify-around">
            <AiFillProduct className="text-3xl" />
            <h1 className="text-3xl">{data.service}</h1>
          </div>
        </div>
      </div>
      <div className="dashboard-home-card">
        <div className="card-body">
          <h2 className=" text-center text-3xl font-semibold mb-6">Product</h2>
          <div className="flex justify-around">
            <FaUserAstronaut className="text-3xl" />
            <h1 className="text-3xl">{data.product}</h1>
          </div>
        </div>
      </div>
      <div className="dashboard-home-card">
        <div className="card-body">
          <h2 className=" text-center text-3xl font-semibold mb-6">Portfolio</h2>
          <div className="flex justify-around">
            <FaBorderStyle className="text-3xl" />
            <h1 className="text-3xl">{data.portfolio}</h1>
          </div>
        </div>
      </div>
      <div className="dashboard-home-card">
        <div className="card-body">
          <h2 className=" text-center text-3xl font-semibold mb-6">Blog</h2>
          <div className="flex justify-around">
            <FaBorderStyle className="text-3xl" />
            <h1 className="text-3xl">3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
