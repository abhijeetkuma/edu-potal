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
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Trending() {
  if (localStorage.getItem("login_id") <= 0) {
    window.location = "/login";
  }
  const [datas, setDatas] = useState([]);
  const [returndspmsg, setReturndspmsg] = useState();
  const [errorMsg, setErrorMsg] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [editdata, setEditdata] = useState({
    tid: "",
    trading_name: "",
    trading_url: "",
  });
  useEffect(() => {
    axios
      .get("/api/gettrending")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleChangeFormdata = (e) => {
    const { name, value } = e.target;
    setEditdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //const data = JSON.parse(datas);
  //const keys = Object.keys(data.length ? data[0] : {});
  const data = datas;

  const columns = [
    {
      accessorKey: "trading_name", //simple recommended way to define a column
      header: "Name",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      //Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    },
    {
      accessorKey: "trading_url", //simple recommended way to define a column
      header: "URL",
      muiTableHeadCellProps: { sx: { color: "black" } }, //optional custom props
      Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
    },
  ];
  const [rowSelection, setRowSelection] = useState({});
  const addnewtrending = () => {
    setIsEditOpen(true);
    setEditdata("");
  };
  const editDetails = (editval) => {
    console.log("Edit trending id:", editval);
    axios
      .get("/api/edittrending/" + editval)
      .then((response) => {
        setEditdata(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true, //enable some features
    enableRowSelection: false,
    enablePagination: true, //disable a default feature
    enableRowActions: true,
    onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
    state: { rowSelection }, //manage your own state, pass it back to the table (optional)
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => setIsEditOpen(true)}>
            <EditIcon
              onClick={() => {
                // table.setEditingRow(row);
                editDetails(row.original.tid);

                //console.log("Edit======------>", row.original.rol_id);
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon
              onClick={() => {
                // data.splice(row.index, 1); //assuming simple data table
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  });
  // add new trending

  const addtrending = (e) => {
    e.preventDefault();
    const { tid, trading_name, trading_url } = e.target.elements;

    let errorsForm = [];

    if (trading_name.value === "") {
      errorsForm.push(
        <div key="branameErr">Trending Name cann't be blank!</div>
      );
    } else {
      errorsForm.push();
    }
    if (trading_url.value === "") {
      errorsForm.push(
        <div key="branurlErr">Trending URL cann't be blank!</div>
      );
    } else {
      errorsForm.push();
    }

    console.log("errorsForm", errorsForm);
    if (errorsForm.length === 0) {
      const payload = {
        tid: tid.value,
        trading_name: trading_name.value,
        trading_url: trading_url.value,
        trading_status: "A",
      };
      if (tid.value > 0) {
        axios({
          method: "post",
          url: "/api/updatetrending",
          data: payload,
        })
          .then(function (response) {
            console.log(response);
            tid.value = "";
            trading_name.value = "";
            trading_url.value = "";
            if (response.statusText == "OK") {
              setIsEditOpen(false);
              toast.success("Trending details updated!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                //transition: Bounce,
              });
            }
            //get results
            axios
              .get("/api/gettrending")
              .then((response) => {
                setDatas(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
            //end get results
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios({
          method: "post",
          url: "/api/addtrending",
          data: payload,
        })
          .then(function (response) {
            console.log(response);
            tid.value = "";
            trading_name.value = "";
            trading_url.value = "";
            if (response.statusText == "OK") {
              setIsEditOpen(false);
              toast.success("Record successfully added", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                //transition: Bounce,
              });
            }

            //get results
            axios
              .get("/api/gettrending")
              .then((response) => {
                setDatas(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
            //end get results
          })
          .catch(function (error) {
            console.log(error);
            setReturndspmsg(
              "<div className={errmsg}>Error in add trending record</div>"
            );
          });
      }
    } else {
      setErrorMsg(errorsForm);
    }
  };
  // end add new trending
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="pageHeader p-3">
          <h1 className="text-2xl font-semibold">Trending Listing</h1>
          <div className="actions">
            <span
              // onClick={() => document.getElementById("users_modal").showModal()}
              onClick={() => addnewtrending()}
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
            </span>
            <span
              //onClick={() =>document.getElementById("filter_modal").showModal()}
              onClick={() => setIsFilter(true)}
            >
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

      <div className="p-2">
        <div className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-2">
          <MaterialReactTable table={table} />
        </div>
      </div>

      {isEditOpen && (
        <DialogContent>
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => setIsEditOpen(false)}
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">
              {editdata.tid > 0 ? "Edit" : "Add"} Trending
            </h3>

            <form
              action=""
              method="post"
              id="trendingForm"
              onSubmit={addtrending}
            >
              {returndspmsg && returndspmsg}
              <div className="mt-2">
                <input type="hidden" value={editdata.tid} name="tid" />
                <input
                  type="text"
                  name="trading_name"
                  placeholder="Trending Name*"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={editdata.trading_name && editdata.trading_name}
                  onChange={handleChangeFormdata}
                />
                <div className="errmsg">{errorMsg[0]}</div>
              </div>
              <div className="mt-2">
                <input
                  type="text"
                  name="trading_url"
                  placeholder="Trending URL*"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={editdata.trading_url && editdata.trading_url}
                  onChange={handleChangeFormdata}
                />
                <div className="errmsg">{errorMsg[1]}</div>
              </div>

              <div className="btn-section">
                <button type="button" onClick={() => setIsEditOpen(false)}>
                  Cancle
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {editdata.tid > 0 ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      )}

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
              <div className="btn-section">
                <button type="button" onClick={() => setIsFilter(false)}>
                  Cancle
                </button>
                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      )}
      <ToastContainer />
    </>
  );
}
export default Trending;
