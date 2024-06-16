import PageBannerTitle from "../../share/PageBannerTitle/PageBannerTitle";
import Contact from "../Home/Contact/Contact";
import OurProduct from "../ProductPage/OurProduct/OurProduct";
import Brand from "../ServiceItem/Brand/Brand";

 
const PortfolioPage = () => {
    return (
        <div>
            <PageBannerTitle />
            <OurProduct />
            <Brand />
            <Contact />
        </div>
    );
};

export default PortfolioPage;