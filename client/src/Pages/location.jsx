import React, { useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function Location() {
  if (localStorage.getItem("login_id") <= 0) {
    window.location = "/login";
  }
  useEffect(() => {
    /*fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));*/
    axios
      //.get("https://jsonplaceholder.typicode.com/posts")
      .get("/api/getexamlisting")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="p-3">
          <h1 className="text-3xl font-semibold">Location Listing</h1>
        </div>
      </div>
      <h1 className="p-3">Location under construction</h1>
    </>
  );
}
