import Swal from "sweetalert2";

export const errorMessage =(message)=>{
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${message}`,
        showConfirmButton: false,
        timer: 1500,
      });
}