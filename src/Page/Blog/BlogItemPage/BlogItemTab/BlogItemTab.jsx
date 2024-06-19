import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BlogCard from "../../../../share/BlogCard/BlogCard";

const BlogItemTab = () => {

  return (
     
      <Tabs className='mt-6'>
        <TabList className='border-none mb-6 flex justify-center gap-4'>
          <Tab   className='font-semibold cursor-pointer'>Title 1</Tab>
          <Tab className='font-semibold cursor-pointer'>Title 2</Tab>
          <Tab className='font-semibold cursor-pointer'>Title 3</Tab>
          <Tab className='font-semibold cursor-pointer'>Title 4</Tab>
        </TabList>

        <TabPanel>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      </div>
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
      </Tabs>
  
  );
};

export default BlogItemTab;
