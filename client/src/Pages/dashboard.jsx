import React from "react";

export default function Dashboard() {
  console.log(localStorage.getItem("logedin"));
  if (localStorage.getItem("logedin") == "") {
    window.location = "login";
  }
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="p-3">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </div>
      </div>
      <h1 className="p-3">Dashboard</h1>
    </>
  );
}
