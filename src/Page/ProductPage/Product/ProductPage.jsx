import PageBannerTitle from "../../../share/PageBannerTitle/PageBannerTitle";
import Contact from "../../Home/Contact/Contact";
import Brand from "../../ServiceItem/Brand/Brand";
import OurProduct from "../OurProduct/OurProduct";
import WeDoOurBest from "../WeDoOurBest/WeDoOurBest";


const ProductPage = () => {
    return (
        <div>
            <PageBannerTitle />
            <WeDoOurBest />
            <OurProduct />
            <Brand />
            <Contact />
        </div>
    );
};

export default ProductPage;