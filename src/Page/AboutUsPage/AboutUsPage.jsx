import { Helmet } from "react-helmet";
import Award from "../../share/Award/Award";
import PageBannerTitle from "../../share/PageBannerTitle/PageBannerTitle";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Contact from "../Home/Contact/Contact";
import MeetOurManagement from "./MeetOurManagement/MeetOurManagement";
import OurLocation from "./OurLocation/OurLocation";
import OurPromises from "./OurPromises/OurPromises";

const AboutUsPage = () => {
    const title = "About Us"
    const content = "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
  return (
    <div className="mt-14 lg:mt-24  ">
          <Helmet>
        <meta charSet="utf-8" />
        <title>Betechlab | About Us</title>
      </Helmet>
      <ScrollToTop />

      <PageBannerTitle />
      <div className="max-w-6xl mx-auto px-6">
        <OurLocation />
        <MeetOurManagement />
        <OurPromises />
      </div>
      <Award />
      <Contact />
    </div>
  );
};

export default AboutUsPage;
