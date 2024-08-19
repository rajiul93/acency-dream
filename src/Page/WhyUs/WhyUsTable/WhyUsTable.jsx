import { FaRegHandPointRight } from "react-icons/fa";
const WhyUsTable = () => {
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto my-24">
      <h1 className="flex items-center text-xl font-semibold mb-4">
        <FaRegHandPointRight className="mr-2 " /> Our Flexibility
      </h1>
      <table className="table   ">
        {/* head */}
        <thead>
          <tr className="space-x-4">
            <th className=" text-base-100  bg-success rounded-r-full">Area</th>  
            <th className=" text-base-100  bg-warning rounded-r-full">
            Cost
            </th>
            <th className=" text-base-100  bg-error rounded-r-full">Revision</th>
            <th className=" text-base-100 bg-info rounded-r-full">Support</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="text-end">Scraping or Script/Bot</th>
            <td>
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Flexible
              </div>
            </td>
            <td className=" ">
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Unlimited
              </div>
            </td>
            <td className=" ">
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Lifetime
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th className="text-end">
            Web and Others Sectors
            </th>
            <td>
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Flexible
              </div>
            </td>
            <td className=" ">
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Unlimited
              </div>
            </td>
            <td className=" ">
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Lifetime
              </div>
            </td>
          </tr>
      
        </tbody>
      </table>
    </div>
  );
};

export default WhyUsTable;
