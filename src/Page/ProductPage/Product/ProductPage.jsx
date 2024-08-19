import { Helmet } from "react-helmet";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import PageBanner1 from "../../../share/PageBanner1/PageBanner1";
import ScrollToTop from "../../../share/ScrollToTop/ScrollToTop";
import Contact from "../../Home/Contact/Contact";
import Brand from "../../ServiceItem/Brand/Brand";
import OurProduct from "../OurProduct/OurProduct";
import WeDoOurBest from "../WeDoOurBest/WeDoOurBest";

const ProductPage = () => {
  const title = "Product";
  const content =
    "At Betechlab, we deliver cutting-edge technology services tailored to your business needs. Our expert team offers innovative solutions, ensuring efficiency and growth. Partner with us to transform challenges into opportunities and stay ahead in the digital landscape.";

  return (
    <div className="pt-16">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeTechLab | Product</title>
      </Helmet>
      <ScrollToTop />

      <PageBanner1 title={title} content={content} />
      <WeDoOurBest />
      <SectionTitle title="Product" />

      <OurProduct />
      <Brand />
      <Contact />
    </div>
  );
};

export default ProductPage;
