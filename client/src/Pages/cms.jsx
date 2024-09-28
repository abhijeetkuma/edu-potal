import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cms() {
  if (localStorage.getItem("logedin") == "") {
    window.location = "login";
  }
  if (localStorage.getItem("logedin")) {
    console.log("sdf");
    toast.success("Successfully Updated.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  }
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="p-3">
          <h1 className="text-3xl font-semibold">CSM Listing</h1>
        </div>
      </div>
      <h1 className="p-3">CSM under construction </h1>
      <ToastContainer />
    </>
  );
}
