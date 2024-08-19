import { Helmet } from "react-helmet";
import PageBanner1 from "../../share/PageBanner1/PageBanner1";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Contact from "../Home/Contact/Contact";
import Fact from "../Home/Fact/Fact";
import Services from "../Home/Services/Services";
import Brand from "../ServiceItem/Brand/Brand";

const ServicePage = () => {
  const title = "Service";
  const content =
    "At Betechlab, we deliver cutting-edge technology services tailored to your business needs. Our expert team offers innovative solutions, ensuring efficiency and growth. Partner with us to transform challenges into opportunities and stay ahead in the digital landscape.";

  return (
    <div className="pt-16">
        <Helmet>
        <meta charSet="utf-8" />
        <title>BeTechLab | Service</title>
      </Helmet>
      <ScrollToTop />

      <PageBanner1 title={title} content={content} />
      <Brand />
      <Services />
      <h2 className="text-2xl font-bold text-center">
        WE EMPOWER YOUR DIGITAL BRAND
      </h2>
      <Fact />
      <Contact />
    </div>
  );
};

export default ServicePage;
