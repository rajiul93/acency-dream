import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Card from "../../Home/Product/Card/Card";

const OurProduct = () => {
  const [type, setType] = useState("all");

  const { data = [], isLoading } = useQuery({
    queryKey: ["home-product", type],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/product/product-page?type=${type}`
      );
      return response.data;
    },
  });

  // if (isLoading) return <Loading />;


  const card_bg = "https://betechlab.com/image/product/product-bg.png";

  return (
    <section className="max-w-6xl mx-auto px-6">
      <div>
        <Tabs>
          <TabList className="border-none mb-8 flex py-2 justify-start md:justify-center space-x-4 overflow-x-auto">
            <Tab
              onClick={() => setType("all")}
              className="card_inline_css"
            >
              All
            </Tab>
            <Tab
              onClick={() => setType("Custom Bot & Script")}
              className="card_inline_css"
            >
              Bot & Script
            </Tab>
            <Tab
              onClick={() => setType("WEB")}
              className="card_inline_css"
            >
              WEB
            </Tab>
            <Tab onClick={() => setType("SEO")} className="card_inline_css">
              SEO
            </Tab>
          </TabList>

          {!data.length && <p className="text-center">Upcoming</p>}

          <TabPanel className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card
                key={index}
                card_bg={card_bg}
                bg_color="bg-[#002366]"
                item={item}
              />
            ))}
          </TabPanel>
          <TabPanel className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card
                key={index}
                card_bg={card_bg}
                bg_color="bg-[#002366]"
                item={item}
              />
            ))}
          </TabPanel>
          <TabPanel className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card
                key={index}
                card_bg={card_bg}
                bg_color="bg-[#002366]"
                item={item}
              />
            ))}
          </TabPanel>
          <TabPanel className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((item, index) => (
              <Card
                key={index}
                card_bg={card_bg}
                bg_color="bg-[#002366]"
                item={item}
              />
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default OurProduct;
