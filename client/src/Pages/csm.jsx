import React from "react";

export default function CSM() {
  if (localStorage.getItem("logedin") == "") {
    window.location = "login";
  }
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="p-3">
          <h1 className="text-3xl font-semibold">CSM Listing</h1>
        </div>
      </div>
      <h1 className="p-3">CSM</h1>
    </>
  );
}
