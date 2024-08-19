 
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CiMail } from "react-icons/ci";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { RiBarcodeBoxLine } from "react-icons/ri";
import { contactForm } from "../../../utils/contactForm";
const FooterForm = () => { 
  const [loading, setLoading] = useState(true)
  const options = [
    { value: "Website Scraping", label: "Website Scraping" },
    { value: "Custom Bot/Script", label: "Custom Bot/Script" },
    { value: "Data Analyst", label: "Data Analyst" },
    { value: "Web Application", label: "Web Application" },
    { value: "SEO", label: "SEO" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Others", label: "Others" },
  ];
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const onSubmit = (data,) => {
    contactForm(data,setLoading)
  }

  return (
    <div className="bg-base-100 w-full   border-4 rounded-lg shadow  ">
      <div className="px-6 py-10 space-y-6 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 grid grid-cols-12 p-2">
                <FaPersonBreastfeeding className="text-info text-xl col-span-2  " />
                <input
                  type="text"
                  className="grow focus:outline-none focus:border-transparent col-span-10"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </div>
                {errors.name && (
                  <span className="text-error">This field is required</span>
                )}
            </div>
            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 grid grid-cols-12 p-2">
                <CiMail className="text-info text-xl col-span-2  " />
                <input
                  type="email"
                  className="grow focus:outline-none focus:border-transparent col-span-10"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
                {errors.email && (
                  <span className="text-error">This field is required</span>
                )}
            </div>

            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 flex items-center ">
                <RiBarcodeBoxLine className="text-info my-2 text-2xl col-span-2  " />
                <select
                  defaultValue=""
                  className="w-full  outline-none focus:border-0 text-neutral "
                  {...register("category", { required: true })}
                >
                  {options.map((category, index) => (
                    <option key={index} value={category.label}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3 ">
              <div className="focus:border-0 border-b border-b-blue-600 grid grid-cols-12 p-2">
                <FiMessageSquare className="text-info text-xl col-span-2  " />
                <input
                  type="number"
                  className="grow focus:outline-none focus:border-transparent col-span-10"
                  placeholder="Skype / WhatsApp"
                {...register("skype_whatsApp", { required: true })} 
                />
                
              </div>
              {errors.skype_whatsApp && (
                  <span className="text-error">This field is required</span>
                )}
            </div>

            <div className="col-span-full">
              <label
                htmlFor="product-details"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Message
              </label>
              <textarea
                {...register("details", { required: true })}

                id="product-details"
                rows="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 outline-none sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
              ></textarea>
              {errors.details && (
                  <span className="text-error">This field is required</span>
                )}
            </div>
          </div>

          <div className=" mt-5  border-gray-200 text-center rounded-0">
           {loading? <button
              className="text-white bg-info hover:bg-cyan-700 focus:ring-4 w-full rounded-lg focus:ring-cyan-200 font-medium rounded-0 text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Send
            </button>
            :
            <button
            disabled="true"
              className="text-white  bg-cyan-700  w-full rounded-lg focus:ring-cyan-200 font-medium rounded-0 text-sm px-5 py-2.5 text-center "
              type="submit"
            >
               <span className="loading loading-spinner text-info"></span>
            </button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
