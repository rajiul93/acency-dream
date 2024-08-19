import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { deletePopup } from "../../utils/deletePopup";
import ProductTableRow from "./ProductTableRow";

const DashboardProduct = () => {
  const [dataType, setDataType] = useState("");
  const {
    isPending, 
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["service", dataType],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/product/all-data?data=${dataType}`
      );
      return data;
    },
  });

  if ((isPending, isLoading))
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    setDataType(form.item.value);
  };
  const handleDelete = async (id) => {
    deletePopup(id, refetch);
  };

  return (
    <div>
      <form className="max-w-[410px] mx-auto" onSubmit={handleForm}>
        <select
          defaultValue="service"
          name="item"
          className="select select-bordered w-full max-w-xs"
        >
          <option value="product">Product</option>
          <option value="service">Service</option>
          <option value="portfolio">Portfolio</option>
        </select>
        <button className="btn btn-active ms-2">Select</button>
      </form>
      <div className="overflow-x-auto">
        {data.length ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <ProductTableRow
                  handleDelete={handleDelete}
                  key={index}
                  product={product}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-center  mt-6 uppercase text-neutral text-xl">
            There have no data
          </h1>
        )}
      </div>
    </div>
  );
};

export default DashboardProduct;
