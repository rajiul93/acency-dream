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
import React from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaBars,
  FaBarsStaggered,
} from "react-icons/fa6";
import { FcLineChart } from "react-icons/fc";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { LuCloudSun } from "react-icons/lu";
import { Link } from "react-router-dom";

const navListMenuItems = [
  {
    title: "Website Scraping",
    description: "",
    icon: HiMiniSquaresPlus,
  },
  {
    title: "Custom Bot/Script",
    description: "",
    icon: LuCloudSun,
  },
  {
    title: "Data Analyst",
    description: "",
    icon: LuCloudSun,
  },
  {
    title: "Web Application",
    description: "",
    icon: LuCloudSun,
  },
  {
    title: "SEO",
    description: "",
    icon: LuCloudSun,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex flex-row items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-1 ">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-4 text-gray-900 w-4  ",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex min-w-14 items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

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
              className="flex justify-between items-center text-[18px] gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <FaAngleDown
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <FaAngleUp
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden     w-3/5 rounded-xl lg:block duration-400 ease-in-out">
          <div className="grid gap-4 grid-cols-12">
            <ul className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
            <img
              className="col-span-4 w-full h-28 rounded-xl bg-blue-gray-500 object-cover"
              src="https://img.freepik.com/premium-photo/human-showing-service-concept-business_220873-7592.jpg"
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

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-3">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/">
          <ListItem className="flex text-[18px] items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Link>
      </Typography>

      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <Link to='/portfolio-item'>portfolio-item</Link>
          </li>
          <li>
            <a>I</a>
          </li>
        </ul>
      </details>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="service-item">
          <ListItem className="flex text-[18px] items-center gap-2 py-2 pr-4">
            Service Item
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="product">
          <ListItem className="flex text-[18px] items-center gap-2 py-2 pr-4">
            Product
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="product-items">
          <ListItem className="flex text-[18px] items-center gap-2 py-2 pr-4">
            Product Items
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/portfolio">
          <ListItem className="flex text-[18px] items-center gap-2 py-2 pr-4">
            Portfolio
          </ListItem>
        </Link>
      </Typography>

      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/contact">
        
        <ListItem className="flex text-[18px] items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
        </Link>
      </Typography>
    </List>
  );
}

export function MainNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto p-0  shadow-none rounded-none max-w-6xl  px-6 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <div className="flex gap-2 justify-center text-2xl text-info">
            <FcLineChart /> Dream
          </div>
        </Typography>
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
        <NavList />
      </Collapse>
    </Navbar>
  );
}
