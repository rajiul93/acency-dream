import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import ProductLoading from "../../../../component/ProductLoading/ProductLoading";
import BlogCard from "../../../../share/BlogCard/BlogCard";

const BlogItemTab = () => {
  const [data, detData] = useState([]);
  useEffect(() => {
    fetch('Blog_data.json')
      .then(response => response.json())
      .then(json =>detData(json))
  }, [])
  if (!data.length) {
    return <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><ProductLoading /></div>
  }
  console.log(data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
     {
      data?.map((item, index)=>  <BlogCard key={index} item={item} />)
     }
    </div>
  );
};

export default BlogItemTab;
