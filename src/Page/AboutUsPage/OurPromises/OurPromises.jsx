import { FaHandshakeSimple, FaHeadSideVirus, FaSnowflake } from "react-icons/fa6";
import { HiTrendingUp } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { PiChatsCircleLight } from "react-icons/pi";
import { RiMoneyDollarCircleFill, RiShoppingBag4Line } from "react-icons/ri";
import { SlBadge, SlEmotsmile } from "react-icons/sl";
import { VscWorkspaceTrusted } from "react-icons/vsc";
const OurPromises = () => {
  return (
    <section>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            "url(http://betechlab.com/image/our-promise.jpg)",
        }}
      >
        <div className="hero-overlay bg-primary bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="card-font">
            <h1 className="mb-5 text-3xl font-bold pt-14 text-base-100">Our <span className="border-b">Promises</span></h1>
            <div className="grid grid-cols-2  md:grid-cols-4  p-6">
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <HiTrendingUp className="group-hover:text-primary text-4xl" />
                <p className="group-hover:text-primary">Business Growth</p>
              </div>
              
              <div className=" group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <RiMoneyDollarCircleFill className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Minimizing Cost</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <FaSnowflake  className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Our Creativity</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center  border-b p-4">
                <HiMiniUserGroup className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Expert Professional Team</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <FaHandshakeSimple className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Keep Your Promises</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <VscWorkspaceTrusted className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Trusted Expertise</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r border-b p-4">
                <FaHeadSideVirus className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Long-Term thinking</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center  border-b p-4">
                <MdSupportAgent className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Unlimited Support</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r  p-4">
                <SlEmotsmile  className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Full Satisfaction</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r  p-4">
                <RiShoppingBag4Line className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Take Pride In Your Work</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center border-r  p-4">
                <SlBadge className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Maintain Our Quality</p>
              </div>
              <div className="group cursor-pointer   hover:bg-base-100 flex flex-col items-center    p-4">
                <PiChatsCircleLight className="text-4xl group-hover:text-primary" />
                <p className="group-hover:text-primary">Timely Responses & Client Engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromises;
