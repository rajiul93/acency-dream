import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import MessageDetails from "./MessageDetails";

const Users = () => {
  const {
    isPending,
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["client-message"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API}/send-message`,{withCredentials:true});
      return data;
    },
  });

  if ((isPending, isLoading))
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(`${import.meta.env.VITE_API}/send-message/${id}`,{withCredentials:true});

        if (response.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <h1 className="text-xl uppercase text-center mt-5">
          Our Client Message
        </h1>
        {data.length ? (
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Email</th>
                <th>Needs</th>
                <th>WA/Skype</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={data._id} className=" ">
                  <th>{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.category}</td>
                  <td>{data.skype_whatsApp}</td>
                  <td>
                    <MessageDetails details={data.details} />
                  </td>
                  <td className="flex gap-3">
                    {/* <FiEdit className="text-xl text-success cursor-pointer" /> */}
                    <RiDeleteBin6Line
                      onClick={() => handleDelete(data._id)}
                      className="text-xl text-error cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>There have no active message</>
        )}
      </div>
    </div>
  );
};

export default Users;
