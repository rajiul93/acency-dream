import { Helmet } from "react-helmet";
import Award from "../../share/Award/Award";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import PortfolioChallenge from "./PortfolioChallenge/PortfolioChallenge";
import PortfolioItemBanner from "./PortfolioItemBanner/PortfolioItemBanner";

 

const PortfolioItem = () => {
    return (
      <div>
                 <Helmet>
        <meta charSet="utf-8" />
        <title>Dream | Portfolio</title>
      </Helmet>
      <ScrollToTop />

        <PortfolioItemBanner />
        <PortfolioChallenge />
        <Award />
        <ScheduleMeeting />
      </div>
    );
};

export default PortfolioItem;