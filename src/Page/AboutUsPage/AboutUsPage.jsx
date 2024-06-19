import Award from "../../share/Award/Award";
import PageBanner1 from "../../share/PageBanner1/PageBanner1";
import Contact from "../Home/Contact/Contact";
import MeetOurManagement from "./MeetOurManagement/MeetOurManagement";
import OurLocation from "./OurLocation/OurLocation";
import OurPromises from "./OurPromises/OurPromises";
 

const AboutUsPage = () => {
    return (
        <div className="mt-24 ">
            <PageBanner1 />
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