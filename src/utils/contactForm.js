import axios from "axios";
import { errorMessage } from "./errorMessage";
import { successMessage } from "./successMessage";

export const contactForm = async (data, setLoading) => {
  setLoading(false);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API}/send-message`,
      data
    );

    if (response.data.acknowledged) {
      successMessage("your message send successfully");
      setLoading(true);
    } 
  } catch (error) {
    errorMessage("this character are not allow ${}[]*#!><");
    setLoading(true);
  }
};
