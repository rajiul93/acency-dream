import {
  Collapse,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import {
  AiOutlineProduct,
  AiOutlineRobot,
  AiOutlineTeam,
} from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import {
  FaBars,
  FaBarsStaggered
} from "react-icons/fa6";
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
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import serviceBanner from "../../assets/service_side_image.png";
import Buttons from "../../component/Button/Buttons";
import Logo from "../../component/Logo/Logo";
import DropDownIconDown from "./DropdownIcon/DropDownIconDown";
import DropDownIconUp from "./DropdownIcon/DropDownIconUp";
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

function NavListMenu({setOpenNav}) { 
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const handelNavigate = (url) => {
    navigate(url);
    setIsMobileMenuOpen(false);
    setOpenNav(false)
  };
  const renderItems = navListMenuItems.map(({ icon, title, link }, key) => (
    <MenuItem
      onClick={() => handelNavigate(link)}
      key={key}
      className="flex flex-row items-center gap-3 rounded-lg "
    >
      <div className="flex items-center justify-center rounded-lg  p-1 ">
        {React.createElement(icon, {
          strokeWidth: 2,
          className: `h-4 text-info w-4 `,
        })}
      </div>
      <div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="flex min-w-14  cursor-pointer items-center text-sm font-normal"
        >
          {title}
        </Typography>
      </div>
    </MenuItem>
  ));
 

 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler className="">
          <Typography as="div" variant="small" className="font-medium text-xl ">
            <ListItem
              className="flex justify-between items-center text-[14px] bg-white uppercase gap-2 py-2 pr-4 font-normal text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <DropDownIconUp isMenuOpen={isMenuOpen} /> 
              < DropDownIconDown isMobileMenuOpen={isMobileMenuOpen} />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden     w-3/5 rounded-xl lg:block duration-400 ease-in-out">
          <div className="grid gap-4 outline-none grid-cols-12 ">
            <ul className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-1 outline-none outline-0 ">
              {renderItems}
            </ul>
            <img
              className="col-span-4  max-h-44 pt-6 rounded-xl   "
              src={serviceBanner}
              alt=""
            />
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function AboutUs({setOpenNav}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const handelNavigate = (url) => {
    navigate(url);
    setIsMobileMenuOpen(false);
    setIsMenuOpen(true);
    setOpenNav(false)
  };
  const renderItems = aboutItems.map(({ icon, title, link }, key) => (
    <MenuItem
      onClick={() => handelNavigate(link)}
      key={key}
      className="flex flex-row items-center gap-3 rounded-lg "
    >
      <div className="flex items-center justify-center rounded-lg  p-1 ">
        {React.createElement(icon, {
          strokeWidth: 2,
          className: "h-4 text-info w-4  ",
        })}
      </div>
      <div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="flex min-w-14 items-center text-sm font-normal"
        >
          {title}
        </Typography>
      </div>
    </MenuItem>
  ));  
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top"
        allowHover={true}
      >
        <MenuHandler className="">
          <Typography as="div" variant="small" className="font-medium text-xl ">
            <ListItem
              className="flex justify-between bg-white font-normal items-center text-[14px] gap-2 py-2 pr-4 uppercase  text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About Us
              <DropDownIconUp isMenuOpen={isMenuOpen} /> 
              < DropDownIconDown isMobileMenuOpen={isMobileMenuOpen} />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden     rounded-xl lg:block duration-400 ease-in-out border-0">
          <div className="grid gap-4 grid-cols-2 outline-none border-0 ">
            <ul className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-2 border-0 outline-none outline-0">
              {renderItems}
            </ul>
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({setOpenNav}) {
  const { pathname } = useLocation();
  
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-3">
   
      <NavLink to="/">
        <li
        onClick={()=>setOpenNav(false)}
          className={`"flex text-[14px] font-normal uppercase text-gray-900 items-center gap-2 py-2 pr-4" ${
            pathname === "/" ? "text-info list-none" : "list-none"
          } `}
        >
          Home
        </li>
      </NavLink> 

      <NavListMenu setOpenNav={setOpenNav}/>

    
      <NavLink
        to="/product">
        <li
        onClick={()=>setOpenNav(false)}

        className={`"flex text-[14px] py-2 pr-4" ${
          pathname === "/product" ? "text-info list-none mr-2 uppercase" : "list-none mr-2 uppercase text-neutral"
        } `}
      >
        Products
        </li>
      </NavLink>
   
      <NavLink to="/portfolio">
      <li
        onClick={()=>setOpenNav(false)}

        className={`"flex text-[14px] py-2 pr-4  " ${
          pathname === "/portfolio" ? "text-info list-none mr-2 uppercase " : "list-none mr-2 uppercase text-neutral"
        } `}
      >  Portfolio
        </li>
      </NavLink>
     
      <AboutUs setOpenNav={setOpenNav} />

    
      <NavLink to="/blog">
      <li
        onClick={()=>setOpenNav(false)}

        className={`"flex text-[14px] py-2 pr-4" ${
          pathname === "/blog" ? "text-info list-none mr-2 uppercase" : "list-none mr-2 uppercase text-neutral"
        } `}
      >  Blog
        </li>
      </NavLink> 

       <li className="list-none"  onClick={()=>setOpenNav(false)} >
        <Buttons  />

       </li>
      
    </List>
  );
}

export function MainNavbar() {
  const [openNav, setOpenNav] =useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto p-0   shadow-none rounded-none max-w-6xl  px-6  overflow-x-hidden">
      <div className="flex items-center justify-between text-blue-gray-900">
        <li href="#" className="mr-4 cursor-pointer py-1.5 lg:ml-2 list-none">
          <Link to="/" className="flex gap-2 justify-center text-2xl text-info">
            {/* <FcLineChart /> Dream */}

          <Logo />
          </Link>
        </li>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden "
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <FaBars className="h-6 w-6" strokeWidth={2} />
          ) : (
            <FaBarsStaggered className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList setOpenNav={setOpenNav} />
      </Collapse>
    </Navbar>
  );
}
