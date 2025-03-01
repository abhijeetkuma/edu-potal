import React from "react";
import { Box } from "@mui/material";

export default function Dashboard() {
  console.log(localStorage.getItem("logedin"));
  if (localStorage.getItem("login_id") <= 0) {
    window.location = "/login";
  }
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="p-3">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
        </div>
      </div>
      <h1 className="sm:col-span-4 basic-info step-1 formcontener m-4 flex">
        <Box
          sx={{
            width: 200,
            height: 200,
            margin: 1,
            borderRadius: 1,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <h1 className="text-center font-bold">College List</h1>
        </Box>
        <Box
          sx={{
            width: 200,
            height: 200,
            margin: 1,
            borderRadius: 1,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <h1 className="text-center font-bold">Category</h1>
        </Box>
      </h1>
    </>
  );
}
