import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../utils/Loading";
import Card from "../Home/Product/Card/Card";
const OurPortfolio = () => {
  const [type, setType] = useState("all");


  const { data = [], isLoading } = useQuery({
    queryKey: ["home-product", type],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/product/portfolio-page?type=${type}`
      );
      return response.data;
    },
  });

  if (isLoading) <Loading />;
  const card_bg = "https://betechlab.com/image/portfolio/portfolio-bg.png";
  return (
    <section className="max-w-6xl mx-auto  px-6"> 
      <div className="">
        <Tabs>
          <TabList
            className="border-none mb-8 flex py-2 justify-start md:justify-center space-x-4 overflow-x-auto"
            classID=""
          >
            <Tab //1 
              onClick={() => setType("all")}
              classID=" uppercase font-semibold cursor-pointer "
            >
              All
            </Tab>

            <Tab //2 
              onClick={() => setType("Custom Bot & Script")}
              classID="uppercase font-semibold cursor-pointer "
            >
              Bot & Script
            </Tab>
            <Tab //3 
              onClick={() => setType("Web Application")}
              classID="uppercase font-semibold cursor-pointer "
            >
              Web App
            </Tab>

            <Tab //4 
              onClick={() => setType("Graphic Design")}
              classID="uppercase font-semibold cursor-pointer "
            >
              Graphic Design
            </Tab>
          </TabList>
          {/* 1 */}
          {!data.length && <>Upcoming</>}
          <TabPanel className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card
                card_bg={card_bg}
                key={index}
                bg_color="bg-[#0284c7]"
                item={item}
              />
            ))}
          </TabPanel>
          {/* //2 */}
          <TabPanel className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card
                card_bg={card_bg}
                key={index}
                bg_color="bg-[#0284c7]"
                item={item}
              />
            ))}
          </TabPanel>
          {/* //3 */}
          <TabPanel className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card
                card_bg={card_bg}
                key={index}
                bg_color="bg-[#0284c7]"
                item={item}
              />
            ))}
          </TabPanel>
          {/* //4 */}
          <TabPanel className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card
                card_bg={card_bg}
                key={index}
                bg_color="bg-[#0284c7]"
                item={item}
              />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default OurPortfolio;
