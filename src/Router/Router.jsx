 
import { createBrowserRouter } from "react-router-dom";
import Error from "../Page/Error/Error";
import Home from "../Page/Home/Home/Home";
import Root from "../Page/Root/Root";

 import ContactPage from "../Page/ContactPage/ContactPage";
import PortfolioItem from "../Page/PortfolioItem/PortfolioItem";
import PortfolioPage from "../Page/PortfolioPage/PortfolioPage";
import ProductItemPage from "../Page/ProductItemPage/ProductItemPage";
import ProductPage from "../Page/ProductPage/Product/ProductPage";
import ServiceItem from "../Page/ServiceItem/ServiceItem/ServiceItem";

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
      ],
    },
  ])