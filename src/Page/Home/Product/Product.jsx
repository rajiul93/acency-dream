 
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Card from "./Card/Card";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Product = () => {
    return (
       <div className="max-w-6xl  mx-auto my-24  px-6">




  <SectionTitle title="Product" />
    
        <div className="flex justify-end  ">
            <div className="flex  mb-6  text-accent-content items-center  bg-transparent border-transparent hover:border duration-400 hover:bg-transparent hover:text-accent-content btn btn-outline ">Vew All  <MdKeyboardDoubleArrowRight /> </div>
        </div>
         <div className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
       </div>
    );
};

export default Product;