import Award from "../../share/Award/Award";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import Brand from "../ServiceItem/Brand/Brand";
import ScrapingService from "../ServiceItem/ScrapingService/ScrapingService";
import ServiceBanner from "../ServiceItem/ServiceBannar/ServiceBanner";
import YouCanTryForMe from "./YouCanTryForMe/YouCanTryForMe";

 

const ProductItemPage = () => {
    return (
        <div>
            <ServiceBanner />
            <Brand />
            <ScrapingService />
            <YouCanTryForMe />
            <Award />
            <ScheduleMeeting />
        </div>
    );
};

export default ProductItemPage;