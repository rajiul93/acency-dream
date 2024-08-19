// import PageBannerTitle from "../../share/PageBannerTitle/PageBannerTitle";
import { Helmet } from "react-helmet";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import PageBanner1 from "../../share/PageBanner1/PageBanner1";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Contact from "../Home/Contact/Contact";
import Brand from "../ServiceItem/Brand/Brand";
import OurPortfolio from "./OurPortfolio";

 
const PortfolioPage = () => {
    const title = "Portfolio"
    const content = "At Betechlab, we craft innovative solutions that fuel business growth. Our portfolio reflects our passion for technology and excellence, showcasing projects that turn challenges into opportunities. Explore our work and see how we help businesses lead in the digital age."
    return (
        <div className="pt-16">
              <Helmet>
        <meta charSet="utf-8" />
        <title>BeTechLab | Portfolio</title>
      </Helmet>
      <ScrollToTop />

      <PageBanner1 title={title} content={content}  />

            <Brand />
            {/* <PageBannerTitle /> */}
      <SectionTitle title="Portfolio" />

            <OurPortfolio />
            <div className="py-10"></div>
            <Contact />
        </div>
    );
};

export default PortfolioPage;