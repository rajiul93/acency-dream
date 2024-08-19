import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import Root from "../Page/Root/Root";

import AddPage from "../Dashboard/AddPage/AddPage";
import ControlPortfolio from "../Dashboard/ControlPortfolio/ControlPortfolio";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import DashboardProduct from "../Dashboard/DashboardProduct/DashboardProduct";
import UpdateProduct from "../Dashboard/UpdateProduct/UpdateProduct";
import Users from "../Dashboard/Users/Users";
import AboutUsPage from "../Page/AboutUsPage/AboutUsPage";
import AdministrationPage from "../Page/AdministrationPage/AdministrationPage";
import BlogItemPage from "../Page/Blog/BlogItemPage/BlogItemPage";
import BlogPage from "../Page/Blog/BlogPage/BlogPage";
import BlogDetails from "../Page/BlogDetails/BlogDetails";
import ContactPage from "../Page/ContactPage/ContactPage";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import FaqPage from "../Page/FaqPage/FaqPage";
import LoginPage from "../Page/LoginPage/LoginPage";
import MissionAndVision from "../Page/MissionAndVision/MissionAndVision";
import PortfolioItem from "../Page/PortfolioItem/PortfolioItem";
import PortfolioPage from "../Page/PortfolioPage/PortfolioPage";
import ProductItemPage from "../Page/ProductItemPage/ProductItemPage";
import ProductPage from "../Page/ProductPage/Product/ProductPage";
import ScheduleMeeting from "../Page/ScheduleMeeting/ScheduleMeeting";
import ServiceItem from "../Page/ServiceItem/ServiceItem/ServiceItem";
import ServicePage from "../Page/ServicePage/ServicePage";
import WhyUs from "../Page/WhyUs/WhyUs";
import PrivetRout from "./PrivetRout/PrivetRout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service-item/:id",
        element: <ServiceItem />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/product/single-data/${params.id}`),
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product-items/:id",
        element: <ProductItemPage />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/product/single-data/${params.id}`),
      },
      {
        path: "/service",
        element: <ServicePage />,
      },
      {
        path: "/schedule-meeting",
        element: <ScheduleMeeting />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/portfolio-item/:id",
        element: <PortfolioItem />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/single-data/${params.id}`),
      },
      {
        path: "/administration",
        element: <AdministrationPage />,
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
        path: "/blog-details/:id",
        element: <BlogDetails />,
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
    path: "/dashboard",
    element: (
      <PrivetRout>
        <Dashboard />
      </PrivetRout>
    ),
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/product",
        element: <DashboardProduct />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
        loader: () => fetch(`${import.meta.env.VITE_API}/client-message`),
      },
      {
        path: "/dashboard/post",
        element: <AddPage />,
      },
      {
        path: "/dashboard/update/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API}/product/single-data/${params.id}`),
      },
      {
        path: "/dashboard/portfolio",
        element: <ControlPortfolio />,
      },
    ],
  },
]);
