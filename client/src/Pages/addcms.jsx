import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CKEditor, wysiwyg } from "@ckeditor/ckeditor5-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  List,
  Table,
  Heading,
  BlockQuote,
  Alignment,
} from "ckeditor5";

import axios from "axios";

function Addcms() {
  if (localStorage.getItem("login_id") <= 0) {
    window.location = "/login";
  }
  const [returndspmsg, setReturndspmsg] = useState();
  const [cmsdescvalue, setCmsdescvalue] = useState();

  const [editdata, setEditdata] = useState({
    cmsid: "",
    cms_title: "",
    cms_url: "",
    cms_description: "",
    cms_meta_title: "",
    cms_meta_description: "",
    cms_meta_keyword: "",
  });
  const { cmsid } = useParams();
  useEffect(() => {
    /*fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));*/

    if (cmsid > 0) {
      axios
        .get("/api/editcms/" + cmsid)
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

  const addcms = (e) => {
    e.preventDefault();
    const {
      cmsid,
      cms_title,
      cms_url,
      cms_meta_title,
      cms_meta_keyword,
      cms_meta_description,
    } = e.target.elements;

    //let errorsForm = [];

    /* f (facility_name.value === "") {
      errorsForm.push(
        <div key="branameErr">Facility Name cann't be blank!</div>
      );
    } else {
      errorsForm.push();
    }

    console.log("errorsForm", errorsForm); */
    //if (errorsForm.length === 0) {
    const payload = {
      cmsid: cmsid.value,
      cms_title: cms_title.value,
      cms_url: cms_url.value,
      cms_description: cmsdescvalue,
      cms_meta_title: cms_meta_title.value,
      cms_meta_description: cms_meta_description.value,
      cms_meta_keyword: cms_meta_keyword.value,
    };
    if (cmsid.value > 0) {
      //update form data
      axios({
        method: "PUT",
        url: "/api/getupdatecms/${cmsid}",
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
              window.location.replace("../../cms");
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
        url: "/api/addnewcms",
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
              window.location.replace("../cms");
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
  const createUrl = (e) => {
    var cmstitle = e.target.value;
    var cmsurl = cmstitle.replace(/[_\s]/g, "-").replace(/[^a-z0-9-\s]/gi, "");
    editdata.cms_url = cmsurl.toLowerCase();
  };

  return (
    <>
      <div className="flex bg-white shadow">
        <div className="pageHeader p-3">
          <h1 className="text-2xl font-semibold">
            {cmsid > 0 ? "Edit" : "Add New"} CMS
          </h1>
          <div className="actions">
            <Link
              to={"../cms"}
              alt="Back To cms Listing"
              title="Back To Cms Listing"
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
        <form action="" method="post" id="facilitesForm" onSubmit={addcms}>
          <div className="mt-2">
            <label
              htmlFor="college_url"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Title *
            </label>
            <input
              type="hidden"
              name="cmsid"
              value={editdata.cmsid && editdata.cmsid}
            />
            <input
              type="text"
              name="cms_title"
              value={editdata.cms_title ? editdata.cms_title : ""}
              required="required"
              onChange={handleChangeFormdata}
              onChangeCapture={createUrl}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>{" "}
          <div className="mt-2">
            <label
              htmlFor="college_url"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Title Url *
            </label>

            <input
              type="text"
              name="cms_url"
              value={editdata.cms_url ? editdata.cms_url : ""}
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="college_url"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Description
            </label>
            <CKEditor
              editor={ClassicEditor}
              // config={{
              //   plugins: [Essentials, Bold, Italic, Paragraph, List, Table],

              //   toolbar: [
              //     "bold",
              //     "italic",
              //     "|",
              //     "undo",
              //     "redo",
              //     "|",
              //     "numberedList",
              //     "bulletedList",
              //   ],
              //   menuBar: {
              //     isVisible: true,
              //   },
              // }}
              config={{
                plugins: [
                  Essentials,
                  Heading,
                  Paragraph,
                  Bold,
                  Italic,
                  BlockQuote,
                  Alignment,
                  List,
                  Mention,
                  Table,
                  Number,
                ],
                toolbar: [
                  "Heading",
                  "|",
                  "Essentials",
                  "Paragraph",

                  "Bold",
                  "Italic",
                  "Alignment",
                  "Link",
                  "ListUI",
                  "BlockQuote",
                  "Undo",
                  "Redo",
                  "Mention",
                  "Table",
                  "|",
                  "numberedList",
                  "bulletedList",
                  ,
                ],
                removePlugins: [
                  "Image",
                  "ImageCaption",
                  "ImageStyle",
                  "ImageToolbar",
                  "ImageUpload",
                ],
                menuBar: {
                  isVisible: true,
                },
              }}
              data={editdata.cms_description ? editdata.cms_description : ""}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor 1 is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const cms_desc = editor.getData();
                setCmsdescvalue(cms_desc);
                //console.log({ event, editor, college_descripton_data });
              }}
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="cms_meta_title"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Meta Title *
            </label>
            <input
              type="text"
              name="cms_meta_title"
              value={editdata.cms_meta_title ? editdata.cms_meta_title : ""}
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="cms_meta_description"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Meta Description *
            </label>
            <input
              type="text"
              name="cms_meta_description"
              value={
                editdata.cms_meta_description
                  ? editdata.cms_meta_description
                  : ""
              }
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="cms_meta_keyword"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Meta Keyword *
            </label>
            <input
              type="text"
              name="cms_meta_keyword"
              value={editdata.cms_meta_keyword ? editdata.cms_meta_keyword : ""}
              required="required"
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
export default Addcms;
