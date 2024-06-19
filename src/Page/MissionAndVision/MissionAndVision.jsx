import Award from "../../share/Award/Award";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import MissionHero from "./MissionHero/MissionHero";
import OurMission from "./OurMission/OurMission";
import OurVision from "./OurVision/OurVision";

 
const MissionAndVision = () => {
    return (
        <div className=" md:mt-24">
            <MissionHero />
            <OurMission />
            <OurVision />
            <Award />
            <ScheduleMeeting />
        </div>
    );
};

export default MissionAndVision;