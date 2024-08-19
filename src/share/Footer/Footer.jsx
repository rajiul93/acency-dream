import {
  AiOutlineProduct,
  AiOutlineRobot,
  AiOutlineTeam,
} from "react-icons/ai";
import { FaQuestion } from "react-icons/fa6";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { IoMdDoneAll } from "react-icons/io";
import { LuCode2 } from "react-icons/lu";
import {
  PiHandArrowUpDuotone,
  PiLayoutDuotone,
  PiTarget,
} from "react-icons/pi";
import { RiQuillPenLine } from "react-icons/ri";
import { TbAnalyze, TbSettingsSearch, TbWorldDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
import QR_Code from "../../assets/QR-Code.png";
import Logo from "../../component/Logo/Logo";
import FollowUs from "../FollowUs/FollowUs";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  const navListMenuItems = [
    {
      title: "Website Data Scraping",
      link: "/service-item/web-scraping-services-python",
      icon: TbWorldDownload,
    },
    {
      title: "Custom Bot & Script",
      link: `/service-item/automation-custom-bots-python`,
      icon: AiOutlineRobot,
    },
    {
      title: "Web Application",
      link: "/service-item/secure-web-app-development",
      icon: AiOutlineProduct,
    },
    {
      title: "Website Design",
      link: "/service-item/modern-responsive-web-design",
      icon: PiLayoutDuotone,
    },
    {
      title: "Web Development",
      link: "/service-item/full-stack-web-development",
      icon: LuCode2,
    },
    {
      title: "Graphic Design",
      link: "/service-item/creative-graphic-design-solutions",
      icon: RiQuillPenLine,
    },
    {
      title: "SEO",
      link: "/service-item/advanced-seo-services",
      icon: TbSettingsSearch,
    },
  
    {
      title: "Data Analyst",
      link: "/service-item/data-analysis-insights",
      icon: TbAnalyze,
    },
    {
      title: "View All",
      link: "/service",
      icon: IoMdDoneAll,
    },
  ];
  const aboutItems = [
    {
      title: "About Company",
      link: "/about-us",
      icon: HiOutlineHomeModern,
    },
    {
      title: "Why Us",
      link: "/why-us",
      icon: PiHandArrowUpDuotone,
    },
    {
      title: "Administration",
      link: "/administration",
      icon: AiOutlineTeam,
    },
    {
      title: "Mission & Vision",
      link: "/mission",
      icon: PiTarget,
    },
    {
      title: "FAQ",
      link: "/faq",
      icon: FaQuestion,
    },
  ];
  return (
    <footer className="footer grid-cols-1 md:grid-cols-3 lg:grid-cols-4  pt-8 pb-2 max-w-6xl mx-auto  text-base-content">
      <nav>
        <h6 className="footer-title text-base-100">Services</h6>
        {navListMenuItems.map((item) => (
          <Link
            className="text-base-100 hover:underline"
            to={item.link}
            key={item.title}
          >
            <p className=" text-[14px]">{item.title}</p>
          </Link>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title text-base-100">About Us</h6>
        {aboutItems.map((item) => (
          <Link
            className="text-base-100 hover:underline"
            to={item.link}
            key={item.title}
          >
            <p className="flex gap-4 items-center text-[14px]">{item.title}</p>
          </Link>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title text-base-100 ">At a glance</h6>
        <Link
          to="/service"
          className="link link-hover text-base-100  text-[14px]"
        >
          Service
        </Link>
        <Link
          to="/portfolio"
          className="link link-hover text-base-100  text-[14px]"
        >
          Portfolio
        </Link>
        <Link to="/product" className="link link-hover text-base-100  text-[14px]">
         Product
        </Link>
        <Link to="/blog" className="link link-hover text-base-100  text-[14px]">
         Blog
        </Link>
      </nav>
     

      <aside>
        <Logo />
    
        <SocialMedia />
        <FollowUs />
        <h1 className="text-base-100 mt-2">
          For Quick Contact Scan the QR code <br /> and Say Hi
        </h1>
        <img width={150} src={QR_Code} alt="" />
      </aside>
    </footer>
  );
};

export default Footer;
