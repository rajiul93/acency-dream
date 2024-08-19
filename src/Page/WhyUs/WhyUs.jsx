import { Helmet } from "react-helmet";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Fact from "../Home/Fact/Fact";
import WhyUsHero from "./WhyUsHero/WhyUsHero";
import WhyUsTable from "./WhyUsTable/WhyUsTable";

 

const WhyUs = () => {
    return (
        <div className="mt-24">
                   <Helmet>
        <meta charSet="utf-8" />
        <title>Betechlab | Why Us</title>
      </Helmet>
      <ScrollToTop />

            <WhyUsHero />
            <Fact />
            <WhyUsTable />
            <ScheduleMeeting />
        </div>
    );
};

export default WhyUs;