import axios from "axios";
import { useQuery } from "react-query";

const Test = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    },
  });
  if (isLoading || !data.length) {
    return <>Loading</>;
  }
console.log(data)
  return (
    <section className="my-24 max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index}>
                <th>1</th>
                <td>{item?.address?.city}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Test;
