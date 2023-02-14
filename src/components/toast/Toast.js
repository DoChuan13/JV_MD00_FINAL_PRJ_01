import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Default = (notify) => toast(notify);
export const Info = (notify) => toast.info(notify);
export const Success = (notify) => toast.success(notify);
export const Warning = (notify) => toast.warning(notify);
export const Error = (notify) => toast.error(notify);

function Toast(props) {
  console.log(props);
  // const config = {
  //   // position: "top-right",
  //   // autoClose: 5000,
  //   // hideProgressBar: false,
  //   // closeOnClick: true,
  //   // pauseOnHover: true,
  //   // draggable: true,
  //   // progress: undefined,
  //   // theme: "colored",
  // };
  //  const Default = () => toast("Wow so easy !", config);
  //  const Info = () => toast.info("Wow so easy !", config);
  //  const Success = () => toast.success("Wow so easy !", config);
  //  const Warning = () => toast.warning("Wow so easy !", config);
  //  const Error = () => toast.error("Wow so easy !", config);

  return (
    <div>
      {/* <button onClick={Default}>Default !</button>
      <button onClick={Info}>Info !</button>
      <button onClick={Success}>Success !</button>
      <button onClick={Warning}>Warning !</button>
      <button onClick={Error}>Error !</button> */}

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Toast;
