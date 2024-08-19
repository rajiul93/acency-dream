import { Helmet } from "react-helmet";
import Award from "../../share/Award/Award";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Brand from "../ServiceItem/Brand/Brand";
// import ScrapingService from "../ServiceItem/ScrapingService/ScrapingService";
import { useLoaderData } from "react-router-dom";
import ScrapingService from "../ServiceItem/ScrapingService/ScrapingService";
import ServiceBanner from "../ServiceItem/ServiceBannar/ServiceBanner";
import VideoContent from "./VideoContent/VideoContent";
import YouCanTryForMe from "./YouCanTryForMe/YouCanTryForMe";

 

const ProductItemPage = () => {
  const loadData = useLoaderData()

console.log(loadData)
    return (
        <div>
              <Helmet>
        <meta charSet="utf-8" />
        <title>Dream | Product Item</title>
        
      </Helmet>
      <ScrollToTop />

            <ServiceBanner 
            name={"id"}
              title={loadData?.pageTitle}
              sortDes={loadData?.pageSortDesc}
            />
            <Brand />
            <VideoContent       loadData={loadData}/>
            <ScrapingService 
            loadData={loadData}
            />
            <YouCanTryForMe />
            <Award />
            <ScheduleMeeting />
        </div>
    );
};

export default ProductItemPage;