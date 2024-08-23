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
  const data = useLoaderData();
  if (Object.keys(data).length === 0) {
    console.log(Object.keys(data).length);
    return (
      <div className="mt-24 text-center h-[40vh] flex justify-center items-center text-warning text-xl ">
        You are going something wrong
      </div>
    );
  }
  return (
    <div className="  ">
      <Helmet>
        <title>BeTechLab | Service</title>
        <meta name="description" content={data.pageSortDesc} />
        <meta name="keywords" content={data.seo} />
        <meta property="og:title" content={data.pageTitle} />
        <meta charSet="utf-8" />
      </Helmet>
      <ScrollToTop />

      <ServiceBanner title={data?.pageTitle} sortDes={data?.pageSortDesc} />
      <Brand />
      <DataCollection
        topListDescription={data.topListDescription}
        title2={data?.top_list_title}
        content={data?.top_list}
      />
      <ScrapingService loadData={data} />
      <WhyChooseActowiz />
      <div className="bg-[#f7fee7]">
        <Award />
      </div>
      <ScheduleMeeting />
    </div>
  );
};

export default Service;
