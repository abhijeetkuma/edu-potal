import React from "react";

export default function Jobsapproval() {
  if (localStorage.getItem("login_id") <= 0) {
    window.location = "/login";
  }
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="p-3">
          <h1 className="text-3xl font-semibold">Jobs & Approval Listing</h1>
        </div>
      </div>
      <h1 className="p-3">jobsapproval</h1>
    </>
  );
}
