import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import WhyUsHero from "./WhyUsHero/WhyUsHero";
import WhyUsTable from "./WhyUsTable/WhyUsTable";

 

const WhyUs = () => {
    return (
        <div className="mt-24">
            <WhyUsHero />
            <WhyUsTable />
            <ScheduleMeeting />
        </div>
    );
};

export default WhyUs;