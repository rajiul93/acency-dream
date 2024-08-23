import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../utils/Loading";
import Card from "../../Home/Product/Card/Card";
const OurProduct = () => {
  const [type, setType] = useState("all")

  const { data = [], isLoading } = useQuery({
    queryKey: ["home-product",type],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/product/product-page?type=${type}`
      );
      return response.data;
    },
  });
  if (isLoading) <Loading />;  
  const card_bg = "https://betechlab.com/image/product/product-bg.png";
  console.log(data)
  return (
    <section className="max-w-6xl mx-auto  px-6 "> 
      <div className="">
        <Tabs>
          <TabList className='border-none mb-8 flex py-2 justify-center gap-4  ' classID="">
            <Tab  onClick={()=>setType("all")} classID="uppercase font-semibold cursor-pointer ">All</Tab>
            <Tab onClick={()=>setType("script")} classID="uppercase font-semibold cursor-pointer ">Bot & Script</Tab>
            <Tab onClick={()=>setType("WEB")} classID="uppercase font-semibold cursor-pointer "> WEB</Tab>
            <Tab onClick={()=>setType("Others")} classID="uppercase font-semibold cursor-pointer "> Others</Tab> 
          </TabList>
          {!data.length && <p className="text-center">There hove no data</p>}

          <TabPanel className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
           
           {
            data.map((item, index)=><Card card_bg={card_bg} key={index} item={item}/>)
           }
          
           
          </TabPanel>
          <TabPanel className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            data.map((item, index)=><Card  key={index} item={item}/>)
           }
          </TabPanel>
          <TabPanel className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            data.map((item, index)=><Card  key={index} item={item}/>)
           }
          </TabPanel>
          <TabPanel className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            data.map((item, index)=><Card  key={index} item={item}/>)
           }
          </TabPanel>
          
          
          
         
        </Tabs>
      </div>
    </section>
  );
};

export default OurProduct;
