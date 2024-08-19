import { ImSkype, ImWhatsapp } from "react-icons/im";
import { RiMessage2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import contact from "../../../assets/contact-us.png";
import FooterForm from "./FooterForm";

const Contact = () => {
  return (
    <div className=" mt-24">
      <div
        className="relative object-cover contact-bg   bg-no-repeat pb-10 md:pb-0"
        style={{
          backgroundImage: `url(${contact})`,
        }}
      >
        <div className=" max-w-6xl mx-auto pt-14    lg:h-[450px] px-2 lg:flex">
          <section className="    mx-auto     flex flex-col     text-base-content">
            <div className="     -translate-y-4     ">
              <h1 className="text-xl md:text-2xl font-semibold pr-14">
                Let's Chat About Your Project
              </h1>
            </div>

            <nav className=" w-full space-y-3  text-base-100">
              <div className=" flex flex-col justify-center  w-full  mt-6">
                <div className="bg-gradient-to-r from-accent-content to-[#7dd3fc] rounded-lg   p-2">
                  <div className="flex items-center gap-4">
                    <RiMessage2Line className="text-4xl text-base-100 " />
                    <div>
                      <h1 className="text-lg">MAIL US</h1>

                      <p>info@betechlab.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center w-full ">
                <div className="bg-gradient-to-r from-accent-content to-[#7dd3fc] rounded-lg   p-2">
                  <div className="flex items-center gap-4">
                    <ImSkype className="text-4xl text-info " />
                    <div>
                      <h1 className="text-lg">Our Skype ID</h1>

                      <p>live.akchakraborty55</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center w-full ">
                <div className="bg-gradient-to-r from-accent-content to-[#7dd3fc] rounded-lg   p-2">
                  <div className="flex items-center gap-4">
                    <ImWhatsapp className="text-4xl text-green-500 " />
                    <div>
                      <h1 className="text-lg">Our WhatsApp </h1>

                      <p>+8801700891599</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                 to="/schedule-meeting"
                 target="_blank"
                  className="relative schedule-meting block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-[30px] bg-gray-50 hover:text-black hover:bg-white"
                >
                  Schedule a meeting
                </Link>
              </div>
            </nav>
          </section>
          <div className=" mt-10 lg:mt-0 lg:-translate-y-28">
            <FooterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
