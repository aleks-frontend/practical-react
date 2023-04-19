import React from "react";
import { toast } from "react-toastify";

const CustomToast = ({ closeToast }) => (
    <div>
        <strong>Custom toast message</strong>
        <button onClick={closeToast}>Close</button>
    </div>
)

const Toaster = () => {
  const notify = () => {
    toast(<CustomToast />, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast.success("Success", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false
    });
    toast.info("Info", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.warn("Warn", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error("error", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <div>
      <button onClick={notify}>Toast!</button>
    </div>
  );
};

export default Toaster;
