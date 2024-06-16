import Award from "../../share/Award/Award";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import PortfolioChallenge from "./PortfolioChallenge/PortfolioChallenge";
import PortfolioItemBanner from "./PortfolioItemBanner/PortfolioItemBanner";

 

const PortfolioItem = () => {
    return (
      <div>
        <PortfolioItemBanner />
        <PortfolioChallenge />
        <Award />
        <ScheduleMeeting />
      </div>
    );
};

export default PortfolioItem;