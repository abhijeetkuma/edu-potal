import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { getImageURL } from "../utils/utils-image";

import axios from "axios";

function Collegelisting() {
  if (localStorage.getItem("logedin") == "") {
    window.location = "login";
  }
  const [datas, setDatas] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    /*fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));*/
    axios
      //.get("https://jsonplaceholder.typicode.com/posts")
      //.get("http://localhost:3007/")
      .get("/api/")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  //const data = JSON.parse(datas);
  //const keys = Object.keys(data.length ? data[0] : {});
  const data = datas;

  const columns = [
    // {
    //   accessorKey: "veh_id", //simple recommended way to define a column
    //   header: "veh_id",
    //   muiTableHeadCellProps: { sx: { color: "green" } }, //optional custom props
    //   Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    // },
    /*{
      accessorKey: "veh_id",
      header: "Id",
      enableEditing: false,
      size: 80,
    }, */
    {
      accessorKey: "college_name", //simple recommended way to define a column
      header: "Name",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      //Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    },
    {
      accessorKey: "college_url", //simple recommended way to define a column
      header: "URL",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      //Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    },
    {
      accessorKey: "tag_line", //simple recommended way to define a column
      header: "Tag Line",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    },
    {
      accessorKey: "usp_remark", //simple recommended way to define a column
      header: "Remark",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    },
    {
      accessorKey: "found_year", //simple recommended way to define a column
      header: "Found Year",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    },
    {
      accessorKey: "logo", //simple recommended way to define a column
      header: "Logo",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      Cell: ({ cell }) => (
        <span>
          {/* <img src={".assets/colleges/banner/" + cell.getValue()} /> */}
          <img src={getImageURL(cell.getValue())} />
        </span>
      ), //optional custom cell render
    },
    {
      accessorKey: "banner", //simple recommended way to define a column
      header: "Banner",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      Cell: ({ cell }) => (
        <span>
          {/* <img src={"../colleges/banner/" + cell.getValue()} /> */}
          <img src={getImageURL(cell.getValue())} />
        </span>
      ), //optional custom cell render
    },
    /*  {
      accessorKey: "approv_by", //simple recommended way to define a column
      header: "Approved By",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    },
    {
      accessorKey: "college_type", //simple recommended way to define a column
      header: "Type",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    }, 

    {
      accessorKey: "featured",
      header: "Featured",
      enableEditing: false,
      size: 80,
    },
    {
      accessorKey: "scholarship",
      header: "scholarship",
      enableEditing: false,
      size: 80,
    },*/
  ];
  const [rowSelection, setRowSelection] = useState({});

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true, //enable some features
    enableRowSelection: false,
    enablePagination: false, //disable a default feature
    enableRowActions: true,
    onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
    state: { rowSelection }, //manage your own state, pass it back to the table (optional)
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton>
            <EditIcon
              onClick={() => {
                // table.setEditingRow(row);
                editDetails(row.original.cid);
                //console.log("Edit======------>", row.original.rol_id);
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon
              onClick={() => {
                console.log("Delete======------>", row.original.rol_id);

                // data.splice(row.index, 1); //assuming simple data table
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });
  const openDeleteConfirmModal = (row) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(row.original.id);
    }
  };
  //edit role details

  const editDetails = (editval) => {
    console.log("Edit college id:", editval);
    if (editval > 0) {
      window.location.href = "/admin/collegelisting/college/" + editval;
    }
  };
  //end edit role details

  return (
    <>
      <div className="flex bg-white shadow">
        <div className="pageHeader p-3">
          <h1 className="text-2xl font-semibold">College Listing</h1>
          <div className="actions">
            <span>
              <Link
                to={"college"}
                alt="Add New College Details"
                title="Add New College Details"
              >
                <svg
                  className="h-6 w-6 text-stone-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="9" y1="12" x2="15" y2="12" />{" "}
                  <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
              </Link>
            </span>
            <span onClick={() => setIsFilter(true)}>
              <svg
                className="h-6 w-6 text-stone-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/*datas ? <div>{JSON.stringify(datas)}</div> : <div>Loading...</div> */}
      {/*datas.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              {datas.map(
                (item, idx) =>
                  idx === 0 &&
                  Object.keys(item).map((th, i) => (
                    <th key={`uid-${i}`} id={`${th}`}>
                      {th}
                    </th>
                  ))
              )}
            </tr>
          </thead>
          <tbody>
            {datas.map((item, idx) => (
              <tr key={idx}>
                {Object.values(item).map((td, i) => (
                  <td key={`uid-${i}`} id={`${td}`}>
                    {td}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )*/}
      <div className="p-2">
        <div className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-2">
          <MaterialReactTable table={table} />
        </div>
      </div>

      {isFilter && (
        <DialogContent>
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setIsFilter(false)}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Filter</h3>
            <form>
              <input
                type="text"
                placeholder="Search by college name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <br></br>
              <button>Cancle</button>
              <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit
              </button>
            </form>
          </div>
        </DialogContent>
      )}
    </>
  );
}

export default Collegelisting;
