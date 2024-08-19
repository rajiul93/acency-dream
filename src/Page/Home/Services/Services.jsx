import grapich from "../../../assets/servicesIcon/Graphic Design.svg";
import webApplication from "../../../assets/servicesIcon/Web Application.svg";
import Scraping from "../../../assets/servicesIcon/Website Data Scraping.svg";
import webDevlopment from "../../../assets/servicesIcon/Website Development.svg";
import seo from "../../../assets/servicesIcon/seo.svg";

import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import webDesign from "../../../assets/servicesIcon/Website Design.svg";
import analyst from "../../../assets/servicesIcon/analysis.svg";
import custom from "../../../assets/servicesIcon/custom_bot_script.svg";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
const Services = () => {
  const navigate = useNavigate()
  const servicesList = [
    {
      title: "Website Data Scraping ",
      icon: Scraping,
      link:"/service-item/web-scraping-services-python"
    },
    {
      title: "Custom Bot &  Script",
      icon: custom,
      link: `/service-item/automation-custom-bots-python`, 
    },
    {
      title: "Website Design",
      icon: webDesign,
      link: "/service-item/modern-responsive-web-design",


    },
    {
      title: "Website Development",
      icon: webDevlopment,
      link: "/service-item/full-stack-web-development",

    },

    {
      title: "Web Application ",
      icon: webApplication,
      link: "/service-item/secure-web-app-development",

    },
    {
      title: "Graphic Design",
      icon: grapich,
      link: "/service-item/creative-graphic-design-solutions",

    },
    {
      title: "Website SEO",
      icon: seo,
      link: "/service-item/advanced-seo-services",

    },
    {
      title: "Data Analyst",
      icon: analyst,
      link: "/service-item/data-analysis-insights",

    },
  ];
const handleNavigate = (link)=>{
  navigate(link)
}
  return (
    <div className="my-24">
      <SectionTitle title="Services" />
      <div
        className="
    grid place-items-center grid-cols1 md:grid-cols-3 lg:grid-cols-4
       items-center max-w-xl px-4 md:max-w-2xl gap-10 lg:max-w-5xl mx-auto "
      >
        {servicesList.map((item, index) => (
          <div
          onClick={()=>handleNavigate(item.link)}
            key={index}
            className="p-5 flex  flex-col  justify-between  w-full  min-w-48 h-full min-h-48 bg-base-100  cursor-pointer  shadow-xl    duration-300 hover:-translate-y-2 rounded-xl "
          >
            <h1 className="text-xl font-medium text-black">{item.title}</h1>
            <span>
              <img 
             className={classNames({
              "w-14": index === 6,
              "w-10": index === 7,
              "w-9": index !== 6 && index !== 7,
            })}
                  
                  src={item.icon} alt="" /> 
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
