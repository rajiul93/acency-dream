import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Award from "../../../share/Award/Award";
import ScheduleMeeting from "../../../share/ScheduleMeeting/ScheduleMeeting";
import ScrollToTop from "../../../share/ScrollToTop/ScrollToTop";
import Brand from "../Brand/Brand";
import DataCollection from "../DataCollection/DataCollection";
import ScrapingService from "../ScrapingService/ScrapingService";
import ServiceBanner from "../ServiceBannar/ServiceBanner";
import WhyChooseActowiz from "../WhyChooseActowiz/WhyChooseActowiz";

const Service = () => { 
  const data = useLoaderData()
 

  return (
    <div className="  ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>BeTechLab | Service</title>
      </Helmet>
      <ScrollToTop />

      <ServiceBanner
        title={data?.pageTitle}
        sortDes={data?.pageSortDesc}
      />
      <Brand />
     <DataCollection
     topListDescription={data.topListDescription}
        title2={data?.top_list_title}
        content={data?.top_list}
      />
      <ScrapingService
    loadData={data}
      /> 
      <WhyChooseActowiz />
      <div className="bg-[#f7fee7]">
        <Award />
      </div>
      <ScheduleMeeting /> 
    </div>
  );
};

export default Service;
