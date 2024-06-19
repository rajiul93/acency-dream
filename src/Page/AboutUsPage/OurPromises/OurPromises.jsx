import { FaHandSparkles } from "react-icons/fa";
import { FaHandshakeSimple, FaHeadSideVirus, FaRegEye } from "react-icons/fa6";
import { GrUpdate, GrUserSettings } from "react-icons/gr";
import { HiTrendingUp } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { PiHeadCircuitFill } from "react-icons/pi";
import { RiMoneyDollarCircleFill, RiShoppingBag4Line } from "react-icons/ri";
import { TbCardsFilled } from "react-icons/tb";


const OurPromises = () => {
  return (
    <section>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1661277712617-1e46eac647e8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-primary bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="card-font">
            <h1 className="mb-5 text-2xl font-bold pt-14">Our <span className="border-b">Promises</span></h1>
            <div className="grid grid-cols-2  md:grid-cols-4  p-6">
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <HiTrendingUp className="group-hover:text-primary text-4xl" />
                <p className="group-hover:text-primary">Always finish wat you Start</p>
              </div>
              
              <div className=" group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <RiMoneyDollarCircleFill className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Be Kind to Environment</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <GrUserSettings className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Innovation</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center  border-b p-4">
                <HiMiniUserGroup className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Our Team</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <FaHandshakeSimple className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Keep your promises</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <FaHandSparkles className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Live each day boldly</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <FaHeadSideVirus className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Long-Term thinking</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center  border-b p-4">
                <PiHeadCircuitFill className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Passion for invention</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r  p-4">
                <TbCardsFilled  className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Ride for the brand</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r  p-4">
                <RiShoppingBag4Line className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">take pride in your work</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r  p-4">
                <GrUpdate className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Win as a team</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center    p-4">
                <FaRegEye className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Communication is the key transparency Customer obession rather than competitor focus Earn ethically</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromises;
