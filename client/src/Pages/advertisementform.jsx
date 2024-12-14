import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Notificationadd() {
  if (localStorage.getItem("logedin") == "") {
    window.location = "login";
  }

  const [editdata, setEditdata] = useState({
    ad_id: "",
    ad_title: "",
    ad_disp_position: "",
    ad_disp_page: "",
    ad_disp_date_from: "",
    ad_disp_date_to: "",
    ad_url: "",
    ad_image: "",
  });

  const { ad_id } = useParams();
  useEffect(() => {
    if (ad_id > 0) {
      axios
        .get("/api/editadvertisement/" + ad_id)
        .then((response) => {
          setEditdata(response.data[0]);
        })
        .catch((error) => {
          console.error(error);
        });
      //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
    }
  }, []);
  const handleChangeFormdata = (e) => {
    const { name, value } = e.target;
    setEditdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addadvertisement = (e) => {
    e.preventDefault();
    const {
      ad_id,
      ad_title,
      ad_disp_position,
      ad_disp_page,
      ad_disp_date_from,
      ad_disp_date_to,
      ad_url,
      ad_image,
    } = e.target.elements;

    const payload = {
      // ad_id: ad_id.value,
      ad_title: ad_title.value,
      ad_disp_position: ad_disp_position.value,
      ad_disp_page: ad_disp_page.value,
      ad_disp_date_from: ad_disp_date_from.value,
      ad_disp_date_to: ad_disp_date_to.value,
      ad_url: ad_url.value,
      //  ad_image: ad_image.value,
    };
    if (ad_id.value > 0) {
      //update form data
      axios({
        method: "PUT",
        url: "/api/getupdatenotification/${ad_id}",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          //console.log(response.statusText);
          if (response.statusText === "OK") {
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
            setTimeout(function () {
              window.location.replace("../../advertisement");
            }, 3000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      //end update form data
    } else {
      axios({
        method: "post",
        url: "/api/addadvertisement",
        data: payload,
      })
        .then(function (response) {
          console.log(response);
          if (response.statusText === "OK") {
            //window.location.href = "../../questionanswerlist";
            toast.success("Successfully Added.", {
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
            setTimeout(function () {
              window.location.replace("../advertisement");
            }, 3000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    /*  } else {
      setErrorMsg(errorsForm);
    } */
  };
  // end add new Cms

  return (
    <>
      <div className="flex bg-white shadow">
        <div className="pageHeader p-3">
          <h1 className="text-2xl font-semibold">
            {ad_id > 0 ? "Edit" : "Add New"} Advertisement
          </h1>
          <div className="actions">
            <Link
              to={"../advertisement"}
              alt="Back To Advertisement Listing"
              title="Back To Advertisement Listing"
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
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="4" y1="6" x2="20" y2="6" />{" "}
                <line x1="4" y1="12" x2="20" y2="12" />{" "}
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-2"></div>
        <form
          action=""
          method="post"
          id="advertisementForm"
          onSubmit={addadvertisement}
        >
          <div className="mt-2">
            <label
              htmlFor="ad_title"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Title *
            </label>
            <input
              type="hidden"
              name="ad_id"
              value={editdata.ad_id && editdata.ad_id}
            />
            <input
              type="text"
              name="ad_title"
              value={editdata.ad_title ? editdata.ad_title : ""}
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>{" "}
          <div className="mt-2">
            <label
              htmlFor="ad_url"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Url *
            </label>

            <input
              type="url"
              name="ad_url"
              value={editdata.ad_url ? editdata.ad_url : ""}
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="ad_disp_date_from"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Date From
            </label>

            <input
              type="date"
              name="ad_disp_date_from"
              value={
                editdata.ad_disp_date_from ? editdata.ad_disp_date_from : ""
              }
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="ad_disp_date_to"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Date To
            </label>

            <input
              type="date"
              name="ad_disp_date_to"
              value={editdata.ad_disp_date_to ? editdata.ad_disp_date_to : ""}
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="ad_disp_position"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Display Position
            </label>
            <select name="ad_disp_position" id="ad_disp_position">
              <option value="top">Top</option>
              <option value="right">Right</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>
          <div className="mt-2">
            <label
              htmlFor="ad_disp_page"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Display Page
            </label>
            <select name="ad_disp_page" id="ad_disp_page">
              <option value="top">Home</option>
              <option value="right">College Listing</option>
              <option value="bottom">Exam Listing</option>
              <option value="bottom">Course Listing</option>
              <option value="bottom">Search</option>
            </select>
          </div>
          <div className="mt-2">
            <label
              htmlFor="ad_image"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Banner
            </label>

            <input
              type="file"
              name="ad_image"
              //required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="btn-section">
            <button type="button">Cancle</button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
export default Notificationadd;
