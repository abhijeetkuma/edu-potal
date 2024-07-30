import React from "react";

export default function Newsnevent() {
  if (localStorage.getItem("logedin") == "") {
    window.location = "login";
  }
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="p-3">
          <h1 className="text-3xl font-semibold">News & Event Listing</h1>
        </div>
      </div>
      <h1 className="p-3">News & Event under construction</h1>
    </>
  );
}
