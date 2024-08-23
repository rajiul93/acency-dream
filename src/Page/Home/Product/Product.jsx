import { useQuery } from "react-query";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Card from "./Card/Card";

import axios from "axios";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import ProductLoading from "../../../component/ProductLoading/ProductLoading";
import Loading from "../../../utils/Loading";

const Product = () => {
  const card_bg = "https://betechlab.com/image/product/product-bg.png";
  console.log(card_bg,"from parent")
  const { data = [], isLoading } = useQuery({
    queryKey: ["home-product"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API}/product/home-page`
      );
      return response.data;
    },
  });
  if (isLoading) <Loading />;
  return (
    <div className="max-w-6xl  mx-auto my-24   px-6">
      <SectionTitle title="Products" />

      <div className="flex justify-end  ">
        <Link
          to="/product"
          className="flex  mb-6  text-accent-content items-center  bg-transparent border-transparent hover:border duration-400 hover:bg-transparent hover:text-accent-content btn btn-outline "
        >
          Vew All <MdKeyboardDoubleArrowRight />
        </Link>
      </div>
      <div className="  gap-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data?.length ? (
          <>
            {data?.slice(0, 4).map((item, index) => {
              return <Card key={index} card_bg={card_bg} item={item} />;
            })}
          </>
        ) : (
          <ProductLoading />
        )}
      </div>
    </div>
  );
};

export default Product;
