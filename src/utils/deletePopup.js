import axios from "axios";
import Swal from "sweetalert2";

export const deletePopup = (id, refetch) => {
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
      const response = await axios.delete(
        `${import.meta.env.VITE_API}/product/change/${id}`,{withCredentials:true}
      );
      if (response.data.acknowledged) {
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
