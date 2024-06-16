import Hero from "../../../component/Hero/Hero";
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
    <div className="pt-14  ">
      <Hero />
      <Services />
      <WhatWeDo />
      <Product />
      <Outsource />
      <Fact />
      <Contact />
      <TrustedUs />
      <AboutUs />
    </div>
  );
};

export default Home;
