const WhyUsTable = () => {
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto my-24">
      <table className="table   ">
        {/* head */}
        <thead>
          <tr className="space-x-4">
            <th className=" text-base-100  bg-success rounded-r-full">Project</th>  
            <th className=" text-base-100  bg-warning rounded-r-full">
              Efficient Hours on Agile with Budget Control
            </th>
            <th className=" text-base-100  bg-error rounded-r-full">Fixed Price</th>
            <th className=" text-base-100 bg-info rounded-r-full">Development Team</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th className="text-end">Project Size:</th>
            <td>
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Any
              </div>
            </td>
            <td className=" ">
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Any
              </div>
            </td>
            <td className=" ">
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Any
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th className="text-end">
                Requirements:
            </th>
            <td>
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Evolving
              </div>
            </td>
            <td className=" ">
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-red-500"></div> Defined
              </div>
            </td>
            <td className=" ">
              <div className="flex items-center gap-4">
                <div className="w-2 rounded-full  h-2 bg-success"></div> Evolving
              </div>
            </td>
          </tr>
      
        </tbody>
      </table>
    </div>
  );
};

export default WhyUsTable;
