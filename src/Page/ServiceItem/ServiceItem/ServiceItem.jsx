import Award from "../../../share/Award/Award";
import ScheduleMeeting from "../../../share/ScheduleMeeting/ScheduleMeeting";
import Brand from "../Brand/Brand";
import DataCollection from "../DataCollection/DataCollection";
import ScrapingService from "../ScrapingService/ScrapingService";
import ServiceBanner from "../ServiceBannar/ServiceBanner";
import WhyChooseActowiz from "../WhyChooseActowiz/WhyChooseActowiz";

 
const Service = () => {
    return (
        <div className="  ">
            <ServiceBanner />
            <Brand />
            <DataCollection />
            <ScrapingService />
            <WhyChooseActowiz />
            <div className="bg-[#f7fee7]">

            <Award />
            </div>
            <ScheduleMeeting />
        </div>
    );
};

export default Service;