import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiBarcodeBoxLine } from "react-icons/ri";
import contact from "../../../assets/contact-us.png";
import { contactForm } from "../../../utils/contactForm";
import ContactContent from "./ContactContent/ContactContent";

const ContactForm = () => {
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

  const onSubmit = (data) => {
    contactForm(data,setLoading)
  }


  return (
    <div
      className="hero  min-h-[50vh] rounded-lg"
      style={{
        backgroundImage: `url(${contact})`,
      }}
    >
      <div className="hero-content flex-col md:flex-row md:flex-row-reverse gap-0">
        <div className="card md:rounded-l-none md:rounded-tr-[60px] shrink-0 w-full pb-10 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body  ">
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" 
                   {...register("name", { required: true })}
                />
              </label>
              {errors.name && (
                  <span className="text-error">This field is required</span>
                )}
            </div>

            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" 
                {...register("email", { required: true })}
                />
              </label>
              {errors.email && (
                  <span className="text-error">This field is required</span>
                )}
            </div>
            <div className="form-control">
              <label className="input input-bordered flex items-center gap-2">
                WA/Skype
                <input type="text" className="grow" 
                {...register("skype_whatsApp", { required: true })} 
                
                />
              </label>
              {errors.skype_whatsApp && (
                  <span className="text-error">This field is required</span>
                )}
            </div>
            <div className=" flex   flex-row border p-1 rounded-lg border-gray-400 items-center ">
              <RiBarcodeBoxLine className="text-info  text-2xl col-span-2  " />
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
            <span className="-mb-5 z-20 bg-white w-28 text-sm ms-4"> 
              Your message
            </span>
            <textarea
            {...register("details", { required: true })}
              className="textarea textarea-bordered"
              placeholder="Enter Your message"
            ></textarea>
             {errors.details && (
                  <span className="text-error">This field is required</span>
                )} 
           {loading? <div className="form-control mt-6">
              <button className="btn btn-info">Confirm</button>
            </div>
            :
            <div className="form-control mt-6">
              <button disabled className="btn btn-info">
               <span className="loading loading-spinner text-info"></span>
                
              </button>
            </div>}
          </form>
        </div>
        <div
          className="text-center lg:text-left bg-info border
         md:p-8 text-base-100 rounded md:rounded-r-none mt-12 shadow-2xl p-4 md:rounded-l-xl"
        >
          <h1 className="text-3xl font-bold uppercase text-base-100">
            Contact us
          </h1>
          <h2 className="uppercase text-sm">what happens next?</h2>

          <ContactContent />
          <div className="grid grid-cols-1 pt-5 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div>
              <div>
                <span className="text-3xl font-bold">10+ </span>Years{" "}
              </div>
              <small>of IT Service</small>
            </div>
            <div>
              <div>
                <span className="text-3xl font-bold">500+ </span>Jobs{" "}
              </div>
              <small>Completed</small>
            </div>
            <div>
              <div>
                <span className="text-3xl font-bold">300+ </span> Total{" "}
              </div>
              <small>Clients</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
