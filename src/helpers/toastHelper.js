import { toast } from "react-toastify";

export const toastError = (error) => {
  let message = null;
  if (typeof error === "object" && error.message) {
    ({ message } = error);
  }
  if (message !== "" && typeof message !== "undefined" && message !== null) {
    toast.error(message);
  }
};

