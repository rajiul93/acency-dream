 
import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home/Home";
import Root from "../Page/Root/Root";

 import Dashboard from "../Dashboard/Dashboard/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import DashboardProduct from "../Dashboard/DashboardProduct/DashboardProduct";
import Users from "../Dashboard/Users/Users";
import AboutUsPage from "../Page/AboutUsPage/AboutUsPage";
import BlogItemPage from "../Page/Blog/BlogItemPage/BlogItemPage";
import BlogPage from "../Page/Blog/BlogPage/BlogPage";
import ContactPage from "../Page/ContactPage/ContactPage";
import FaqPage from "../Page/FaqPage/FaqPage";
import LoginPage from "../Page/LoginPage/LoginPage";
import MissionAndVision from "../Page/MissionAndVision/MissionAndVision";
import PortfolioItem from "../Page/PortfolioItem/PortfolioItem";
import PortfolioPage from "../Page/PortfolioPage/PortfolioPage";
import ProductItemPage from "../Page/ProductItemPage/ProductItemPage";
import ProductPage from "../Page/ProductPage/Product/ProductPage";
import ServiceItem from "../Page/ServiceItem/ServiceItem/ServiceItem";
import WhyUs from "../Page/WhyUs/WhyUs";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/service-item",
          element: <ServiceItem />,
        },
        {
          path: "/product",
          element: <ProductPage />,
        },
        {
          path: "/product-items",
          element: <ProductItemPage />,
        },
        {
          path: "/portfolio",
          element: <PortfolioPage />,
        },
        {
          path: "/portfolio-item",
          element: <PortfolioItem />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/blog-item",
          element: <BlogItemPage />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/about-us",
          element: <AboutUsPage />,
        },
        {
          path: "/why-us",
          element: <WhyUs />,
        },
        {
          path: "/mission",
          element: <MissionAndVision />,
        },
        {
          path: "/faq",
          element: <FaqPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
    {
      path:"/dashboard",
      element:<Dashboard/>,
      children:[
        {
          path:"/dashboard/profile",
          element:<DashboardHome />
        },
        {
          path:"/dashboard/product",
          element:<DashboardProduct />
        },
        {
          path:"/dashboard/users",
          element:<Users />
        },
      ]
    }
  ])