import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import contact from "../../../assets/contact-us.png";
import { contactForm } from "../../../utils/contactForm";
import ContactContent from "./ContactContent/ContactContent";
import "./styles.css";
const ContactForm = () => {
  const [loading, setLoading] = useState(true);
  const [contactControl, setContactControl] = useState(true);

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
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const emailValue = watch("email");
  const skypeValue = watch("skype_whatsApp");
  useEffect(() => {
    if (skypeValue?.length || emailValue?.length) {
      return setContactControl(false);
    } else {
      return setContactControl(true);
    }
  }, [skypeValue, emailValue]);

  const onSubmit = (data) => {
    contactForm(data, setLoading, reset);
  };

  return (
    <div
      className="hero  min-h-[50vh] rounded-lg"
      style={{
        backgroundImage: `url(${contact})`,
      }}
    >
      <div className="hero-content flex-col md:flex-row-reverse gap-0">
        <div className="card  rounded-md md:rounded-l-none md:rounded-tr-[60px] shrink-0 w-full pb-6 md:max-w-sm shadow-md md:shadow-2xl bg-base-100 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body p-2 md:p-8 "
          >
            <div className="form-control">
              <label className="border-gray-400 border   p-3 rounded-lg flex items-center gap-2 text-sm md:text-[16px]">
                Name
                <input
                  type="text"
                  className="grow w-10 outline-none"
                  {...register("name", { required: true })}
                />
              </label>
              {errors.name && (
                <span className="text-error">This field is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="border-gray-400 border   p-3 rounded-lg flex items-center gap-2 text-sm md:text-[16px]  ">
                Email
                <input
                  type="email"
                  className="grow w-10 outline-none"
                  {...register("email", {
                    required: contactControl,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
              </label>

              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="border-gray-400 border   p-3 rounded-lg flex items-center gap-2 text-sm md:text-[16px]  ">
                WA/Skype
                <input
                  type="text"
                  className="grow w-10 outline-none"
                  {...register("skype_whatsApp", { required: contactControl })}
                />
              </label>
              {errors.skype_whatsApp && (
                <span className="text-error">This field is required</span>
              )}
            </div>

            <div className=" flex   flex-row border p-2 rounded-lg border-gray-400 items-center bg-base-100">
              {/* <RiBarcodeBoxLine className="text-info  text-2xl col-span-2  " /> */}
              <select
                defaultValue=""
                className="w-full bg-base-100 outline-none focus:border-0 text-neutral overflow-y-auto"
                {...register("category", { required: true })}
              >
                {options.map((category, index) => (
                  <option
                    key={index}
                    value={category.label}
                    className="leading-none text-sm  p-0 leading-none"
                  >
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
            <div className="overflow-hidden">
              <textarea
                {...register("details", { required: true })}
                className="textarea textarea-bordered w-full min-h-32 sm:w-full md:w-full outline-none focus:outline-none"
                placeholder="Enter your message"
              ></textarea>
              {errors.details && (
                <span className="text-error">This field is required</span>
              )}
            </div>
            {loading ? (
              <div className="form-control mt-1">
                <button className="btn btn-info">Send</button>
              </div>
            ) : (
              <div className="form-control mt-1">
                <button disabled className="btn btn-info">
                  <span className="loading loading-spinner text-info"></span>
                </button>
              </div>
            )}
          </form>
        </div>
        <div
          className="text-center lg:text-left bg-info border
         md:p-8 text-base-100 rounded md:rounded-r-none mt-12 shadow-2xl p-4 md:rounded-l-xl"
        >
          <h1 className="text-xl md:text-3xl font-bold uppercase text-base-100">
            Contact us
          </h1>
          <h2 className="uppercase text-sm">what happens next?</h2>

          <ContactContent />
          <div className="grid grid-cols-1 pt-5 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <div>
              <div>
                <span className=" md:text-3xl font-bold">10+ </span>Years{" "}
              </div>
              <small>of IT Service</small>
            </div>
            <div>
              <div>
                <span className=" md:text-3xl font-bold">500+ </span>Jobs{" "}
              </div>
              <small>Completed</small>
            </div>
            <div>
              <div>
                <span className=" md:text-3xl font-bold">300+ </span> Total{" "}
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
