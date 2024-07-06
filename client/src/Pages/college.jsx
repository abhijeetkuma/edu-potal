import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// import CKTextEditor from "../Components/ckTextEditor/editor";

function College() {
  if (localStorage.getItem("logedin") == "") {
    window.location = "login";
  }
  const [errorMsg, setErrorMsg] = useState([]);
  const [highLights, setHighLights] = useState([
    { highParameter: "", highDetails: "" },
  ]);
  const [images, setImages] = useState([]);

  const handleClick = (e) => {
    setHighLights([...highLights, { highParameter: "", highDetails: "" }]);
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeData = [...highLights];
    onChangeData[i][name] = value;
    setHighLights(onChangeData);
  };

  const handleDelete = (i) => {
    const deleteData = [...highLights];
    deleteData.splice(i, 1);
    setHighLights(deleteData);
  };

  const onImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const addnew = (e) => {
    e.preventDefault();
    const {
      college_name,
      college_url,
      tag_line,
      usp_remark,
      meta_title,
      meta_keyword,
      found_year,
    } = e.target.elements;

    let errorsForm = [];
    if (college_name.value === "") {
      errorsForm.push(
        <div key="vehnameErr">Vahicle Name can not be blank!</div>
      );
    }
    if (college_url.value === "") {
      errorsForm.push(
        <div key="vehregErr">Registration no. can not be blank!</div>
      );
    }
    if (tag_line.value === "") {
      errorsForm.push(
        <div key="vehchassErr">Chassis no. can not be blank!</div>
      );
    }
    if (usp_remark.value === "") {
      errorsForm.push(
        <div key="vehregdateErr">Registration date can not be blank!</div>
      );
    }
    if (errorsForm.length === 0) {
      const payload = {
        college_name: college_name.value,
        college_url: college_url.value,
        tag_line: tag_line.value,
        usp_remark: usp_remark.value,
        meta_title: highLights,
        meta_keyword: meta_keyword.value,
        found_year: found_year.value,
      };
      axios({
        method: "post",
        url: "http://localhost:3007/addnewcollege",
        data: payload,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setErrorMsg(errorsForm);
    }
  };

  return (
    <>
      <div className="flex bg-white shadow">
        <div className="pageHeader p-3">
          <h1 className="text-2xl font-semibold">New College Details</h1>
          <div className="action">
            <span>
              <Link
                to={"../collegelisting"}
                alt="Back To College Listing"
                title="Back To College Listing"
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
            </span>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-2">
          <form action="" method="post" id="vehicleForm" onSubmit={addnew}>
            {errorMsg && <div className="errorDisp">{errorMsg}</div>}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-4">
                <label
                  htmlFor="college_name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  College Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="college_name"
                      id="college_name"
                      autoComplete="college_name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="college_url"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  College URL
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="college_url"
                      id="college_url"
                      autoComplete="college_url"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="tag_line"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tag Line
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="tag_line"
                      id="tag_line"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="usp_remark"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  USP Remark
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="usp_remark"
                      id="usp_remark"
                      autoComplete="usp_remark"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="found_year"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Foundation Year
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="found_year"
                    name="found_year"
                    type="number"
                    autoComplete="found_year"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="found_year"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <CKTextEditor /> */}

                  <textarea
                    id="found_year"
                    name="college_descripton"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <h1> Highlights</h1>
              <div className="sm:col-span-4">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Display Type :
                </label>
                <input type="radio" value="Points" name="display_type" /> Bullet
                Points <input type="radio" value="Points" name="display_type" />{" "}
                Tabuller
              </div>
              <div className="sm:col-span-4">
                {highLights.map((item, i) => (
                  <>
                    <div className="flex mb-2" key={`key-${i}`}>
                      <div className="sm:col-span-2 px-2">
                        <input
                          id="meta_title"
                          name="highParameter"
                          type="text"
                          placeholder="Parameter"
                          autoComplete="meta_title"
                          value={item.highParameter}
                          onChange={(e) => handleChange(e, i)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="sm:col-span-2 px-2">
                        <input
                          id="meta_title"
                          name="highDetails"
                          type="text"
                          placeholder="Details"
                          autoComplete="meta_title"
                          value={item.highDetails}
                          onChange={(e) => handleChange(e, i)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        {i === 0 && (
                          <button
                            type="button"
                            onClick={handleClick}
                            className="addButton"
                          >
                            Add
                          </button>
                        )}
                        {i !== 0 && (
                          <button
                            type="button"
                            onClick={() => handleDelete(i)}
                            className="removeButton"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                ))}

                <span className="font-light sm:text-gray-dark">
                  &nbsp; Hints: Display data in bullets point user
                </span>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Meta Title
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="meta_title"
                    name="meta_title"
                    type="text"
                    autoComplete="meta_title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Meta Description
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="meta_description"
                    name="meta_description"
                    type="text"
                    autoComplete="meta_description"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_keyword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Meta Keyword
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="meta_keyword"
                    name="meta_keyword"
                    type="text"
                    autoComplete="meta_keyword"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_keyword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Upload Logo
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={onImageChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 mt-6 flex items-center ">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                &nbsp;
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default College;
