import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Card from "../../Home/Product/Card/Card";
const OurProduct = () => {
  return (
    <section className="max-w-6xl mx-auto my-24">
      <SectionTitle title="product" />
      <div className="">
        <Tabs>
          <TabList classID="">
            <Tab>All</Tab>
            <Tab> WEB</Tab>
            <Tab> APPS</Tab>
            <Tab> IDENTITY DESIGN</Tab>
            <Tab> SOLUTIONS</Tab>
          </TabList>

          <TabPanel className="mt-5  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 5</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default OurProduct;
