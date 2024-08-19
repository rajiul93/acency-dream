import { Helmet } from "react-helmet";
import Award from "../../share/Award/Award";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import MissionHero from "./MissionHero/MissionHero";
import OurMission from "./OurMission/OurMission";
import OurVision from "./OurVision/OurVision";

 
const MissionAndVision = () => {
    const image = "https://betechlab.com/image/mission_vision_2.jpg"
    return (
        <div className=" md:mt-24">
                   <Helmet>
        <meta charSet="utf-8" />
        <title>Dream | Mission & Vision</title>
      </Helmet>
      <ScrollToTop />

            <MissionHero image={image} />
            <OurMission />
            <OurVision />
            <Award />
            <ScheduleMeeting />
        </div>
    );
};

export default MissionAndVision;