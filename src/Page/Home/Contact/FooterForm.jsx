import { CiMail } from "react-icons/ci";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { RiBarcodeBoxLine } from "react-icons/ri";
const FooterForm = () => {
  return (
    <div className="bg-base-100 w-full  lg:w-1/3 border-4 rounded-lg shadow left-1/2 lg:absolute top-0 ">
      {/* <div className="flex items-start justify-between p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">
                Contact Us
            </h3>
           
        </div> */}

      <div className="p-6 space-y-6">
        <form>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 grid grid-cols-12 p-2">
                <FaPersonBreastfeeding className="text-info text-xl col-span-2  " />
                <input
                  type="text"
                  className="grow focus:outline-none focus:border-transparent col-span-10"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 grid grid-cols-12 p-2">
                <CiMail className="text-info text-xl col-span-2  " />
                <input
                  type="text"
                  className="grow focus:outline-none focus:border-transparent col-span-10"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 grid grid-cols-12 p-2">
                <MdOutlinePhoneForwarded className="text-info text-xl col-span-2  " />
                <input
                  type="text"
                  className="grow focus:outline-none focus:border-transparent col-span-10"
                  placeholder="Phone"
                />
              </div>
            </div>



            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 flex  ">
                <RiBarcodeBoxLine className="text-info mt-3 text-2xl col-span-2  " />
                <select className="  mt-2 text-[16px] select-ghost w-full max-w-xs">
                  <option disabled selected>
                   Your necessary
                  </option>
                  <option>Website Scraping</option>
                  <option>Custom Bot/Script</option>
                  <option> Data Analyst</option>
                  <option> Web Application</option>
                  <option> SEO</option>
                </select>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 flex  ">
                <RiBarcodeBoxLine className="text-info mt-3 text-2xl col-span-2  " />
                <select className="  mt-2 text-[16px] select-ghost w-full max-w-xs">
                  <option disabled selected>
                   Price Range
                  </option>
                  <option>$5-$10</option> 
                  <option>$11-$30</option> 
                  <option>$31-$50</option> 
                  <option>$51-$100</option> 
                </select>
              </div>
            </div>


            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 grid grid-cols-12 p-2">
                <FiMessageSquare className="text-info text-xl col-span-2  " />
                <input
                  type="number"
                  className="grow focus:outline-none focus:border-transparent col-span-10"
                  placeholder="Skype / WhatsApp"
                />
              </div>
            </div>

      
            <div className="col-span-full">
              <label
                htmlFor="product-details"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Message
              </label>
              <textarea
                id="product-details"
                rows="3"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
              ></textarea>
            </div>
          </div>
          
      <div className=" mt-5  border-gray-200 rounded-0">
        <button
          className="text-white bg-info hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-0 text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          Save all
        </button>
      </div>
        </form>
      </div>
{/* 
      <div className="p-6 border-t border-gray-200 rounded-b">
        <button
          className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          Save all
        </button>
      </div> */}
    </div>
  );
};

export default FooterForm;
