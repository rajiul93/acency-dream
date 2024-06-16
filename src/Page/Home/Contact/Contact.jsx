import { ImSkype } from "react-icons/im";
import { RiMessage2Line } from "react-icons/ri";
import FooterForm from "./FooterForm";
const Contact = () => {
  return (
    <div className=" mt-24"> 
      <div className="relative">
      <div className="  max-w-6xl mx-auto my-14 ">
          <h1 className="text-xl md:text-2xl font-semibold px-6">
            Let's Chat About Your Project{" "}
          </h1>
        </div>
        <div className="bg-neutral  pb-4 lg:h-[500px] px-2">
          <footer className="footer max-w-6xl mx-auto  p-2  flex flex-col  lg:flex-row  text-base-content">
            <nav className=" w-full lg:w-1/2 text-base-100"> 

              <div className=" flex flex-col justify-center  w-full  mt-6">
                <div className="bg-gradient-to-r from-neutral to-warning rounded-lg   p-2">
                  <div className="flex gap-4">
                    <RiMessage2Line className="text-4xl text-warning " />
                    <div>
                      <h1 className="text-lg">MAIL TO OUR SALES DEPARTMENT</h1>
                       
                      <p>sales@konstantinfo.com</p>




                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center w-full ">
                <div className="bg-gradient-to-r from-neutral to-warning rounded-lg   p-2">
                  <div className="flex gap-4">
                    <ImSkype className="text-4xl text-warning " />
                    <div>
                      <h1 className="text-lg">Our Skype ID</h1>
                       
                      <p>abakdsfk;lasf;kl</p>
                    </div>
                  </div>
                </div>
              </div>

              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>

            <div className="w-full ">
            <FooterForm />
            </div>
          </footer>
        </div>
      </div>
     
    </div>
  );
};

export default Contact;
