import { Link, useLocation, useNavigate } from "react-router-dom";

const ServiceBanner = ({title,sortDes}) => {
  const location = useLocation() 
  const navigate = useNavigate()
const currentLocation = location.pathname.split("/")[1];
  const handleNavigate = ()=>{
if (currentLocation === "service-item") {
  return navigate("/service")
}
if (currentLocation === "product-items") {
  return navigate("/product")
}
if (currentLocation === "portfolio-item") {
  return navigate("/portfolio")
}
  }
  return (
    <div
      className="w-full min-h-[70vh] relative pt-20 bg-no-repeat bg-cover object-cover "
      style={{
        backgroundImage:
          "url(https://images.stockcake.com/public/0/f/5/0f53ac15-ed1f-43e1-aea6-aed3997bf79e_large/post-it-planning-stockcake.jpg)",
      }}
    >
      <div className="z-0 bg-gradient-to-r from-[#0f172a] top-0 to-[#374151]  w-full h-full opacity-80 absolute"></div>
      <div className="z-20 relative text-base-100 max-w-6xl mx-auto lg:p-14  ">
        {/* title link */}
        <div className="text-sm breadcrumbs p-6">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleNavigate} className="cursor-pointer">
              {currentLocation === "service-item" && <>Service</>}
              {currentLocation === "product-items" && <>Product</>}
              {currentLocation === "portfolio-item" && <>Portfolio</>}
            </li>
          </ul>
        </div>
        <div className="md:w-2/3 space-y-6 p-6">
          <h1 className="lg:text-4xl font-semibold"> 
           {title}
          </h1>
          <p className="font-sans">
           {sortDes}
          </p>
          <button className="btn btn-outline btn-info">Get Start</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
