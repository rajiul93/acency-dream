import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Award from "../../share/Award/Award";
import ScheduleMeeting from "../../share/ScheduleMeeting/ScheduleMeeting";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Brand from "../ServiceItem/Brand/Brand";
import DataCollection from "../ServiceItem/DataCollection/DataCollection";
import ScrapingService from "../ServiceItem/ScrapingService/ScrapingService";
import ServiceBanner from "../ServiceItem/ServiceBannar/ServiceBanner";
import WhyChooseActowiz from "../ServiceItem/WhyChooseActowiz/WhyChooseActowiz";


 

const PortfolioItem = () => {
  const loadData =  useLoaderData()

  console.log(loadData)
    return (
      <div className="  ">
      <Helmet>
        <title>BeTechLab | Service</title>
        <meta name="description" content={loadData.pageSortDesc} />
        <meta name="keywords" content={loadData.seo} />
        <meta property="og:title" content={loadData.pageTitle} />
        <meta charSet="utf-8" />
      </Helmet>
      <ScrollToTop />

      <ServiceBanner title={loadData?.pageTitle} sortDes={loadData?.pageSortDesc} />
      <Brand />
      <DataCollection
        topListDescription={loadData.topListDescription}
        title2={loadData?.top_list_title}
        content={loadData?.top_list}
      />
      <ScrapingService loadData={loadData} />
      <WhyChooseActowiz />
      <div className="bg-[#f7fee7]">
        <Award />
      </div>
      <ScheduleMeeting />
    </div>
    );
};

export default PortfolioItem;