import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Award from "../../share/Award/Award";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Brand from "../ServiceItem/Brand/Brand";
import ScrapingService from "../ServiceItem/ScrapingService/ScrapingService";
import ServiceBanner from "../ServiceItem/ServiceBannar/ServiceBanner";
import VideoContent from "./VideoContent/VideoContent";
import YouCanTryForMe from "./YouCanTryForMe/YouCanTryForMe";

const ProductItemPage = () => {
  const loadData = useLoaderData(); 

  if (Object.keys(loadData).length === 0) {
    console.log(Object.keys(loadData).length);
    return (
      <div className="mt-24 text-center h-[40vh] flex justify-center items-center text-warning text-xl ">
        You are going something wrong
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeTechLab | Product Item</title>
      </Helmet>
      <ScrollToTop />

      <ServiceBanner
        name={"id"}
        title={loadData?.pageTitle}
        sortDes={loadData?.pageSortDesc}
      />
      <Brand />
      <VideoContent loadData={loadData} />
      <ScrapingService loadData={loadData} />
      <YouCanTryForMe />
      <Award />
      <ScheduleMeeting />
    </div>
  );
};

export default ProductItemPage;
