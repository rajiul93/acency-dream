import { Helmet } from "react-helmet";
import Hero from "../../../component/Hero/Hero";
import ScrollToTop from "../../../share/ScrollToTop/ScrollToTop";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Fact from "../Fact/Fact";
import Outsource from "../Outsource/Outsource";
import Product from "../Product/Product";
import Services from "../Services/Services";
import WhatWeDo from "../Services/WhatWeDo/WhatWeDo";
import TrustedUs from "../TrustedUs/TrustedUs";

const Home = () => {
  return (
    <div className="pt-14   ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeTechLab</title>
      </Helmet>
      <ScrollToTop />
      <Hero />
   
      <Services />
      <WhatWeDo />

      <Product />
      <Outsource />
      <Fact />
      <TrustedUs /> 
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home;
