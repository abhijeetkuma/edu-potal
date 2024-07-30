import React, { useState, useEffect } from "react";
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
  const [logo, setLogo] = useState([]);
  const [banner, setBanner] = useState([]);
  const [catgoryarr, setCatgoryarr] = useState([]);
  const [coursearr, setCoursearr] = useState([]);

  useEffect(() => {
    /*fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));*/
    axios
      .get("http://localhost:3007/getcategoryarr")
      .then((response) => {
        setCatgoryarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3007/getcoursearr")
      .then((response) => {
        setCoursearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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

  const onLogoChange = (e) => {
    setLogo([...e.target.files]);
  };
  const onBannerChange = (e) => {
    setBanner([...e.target.files]);
  };

  const addnew = (e) => {
    e.preventDefault();
    const {
      college_name,
      college_url,
      tag_line,
      usp_remark,
      college_descripton,
      meta_title,
      meta_keyword,
      meta_description,
      found_year,
      display_type,
      address,
      address2,
      landmark,
      pincode,
      country,
      state,
      city,
      contactno,
      faxno,
      email,
      website,
    } = e.target.elements;

    let errorsForm = [];
    if (college_name.value === "") {
      errorsForm.push(
        <div key="vehnameErr">College Name can not be blank!</div>
      );
    }
    if (college_url.value === "") {
      errorsForm.push(<div key="vehregErr">College URL can not be blank!</div>);
    }
    if (tag_line.value === "") {
      errorsForm.push(<div key="vehchassErr">Tag line can not be blank!</div>);
    }
    if (usp_remark.value === "") {
      errorsForm.push(
        <div key="vehregdateErr">USP remark can not be blank!</div>
      );
    }
    if (errorsForm.length === 0) {
      const payload = {
        college_name: college_name.value,
        college_url: college_url.value,
        tag_line: tag_line.value,
        usp_remark: usp_remark.value,
        found_year: found_year.value,
        college_descripton: college_descripton.value,
        meta_title: meta_title.value,
        meta_keyword: meta_keyword.value,
        meta_description: meta_description.value,
        display_type: display_type.value,
        highlights: highLights,
        address: address.value,
        address2: address2.value,
        landmark: landmark.value,
        pincode: pincode.value,
        country: country.value,
        state: state.value,
        city: city.value,
        contactno: contactno.value,
        faxno: faxno.value,
        email: email.value,
        website: website.value,
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
  console.log("logo-->", logo[0]);
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
          <form
            action=""
            method="post"
            id="vehicleForm"
            encType="multipart/form-data"
            onSubmit={addnew}
          >
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
                    type="text"
                    autoComplete="found_year"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="college_descripton"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <CKTextEditor /> */}

                  <textarea
                    id="college_descripton"
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
                Points
                <input type="radio" value="Tabuller" name="display_type" />
                Tabuller
              </div>
              <div className="sm:col-span-4">
                {highLights.map((item, i) => (
                  <>
                    <div className="flex mb-2" key={`key-${i}`}>
                      <div className="sm:col-span-2 px-2">
                        <input
                          id="highParameter"
                          name="highParameter"
                          type="text"
                          placeholder="Parameter"
                          autoComplete="highParameter"
                          value={item.highParameter}
                          onChange={(e) => handleChange(e, i)}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="sm:col-span-2 px-2">
                        <input
                          id="highDetails"
                          name="highDetails"
                          type="text"
                          placeholder="Details"
                          autoComplete="highDetails"
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
                  Category
                </label>
                <div className="flex ">
                  {catgoryarr.map((item, i) => (
                    <div key={i} className="mt-2 text-sm">
                      <input
                        type="checkbox"
                        name="categories[]"
                        value={item.cat_id}
                        //onChange={(e) => handleCheckBox(e, i)}
                        className="py-2  text-sm font-semibold"
                      />
                      <span className="py-2 px-2 text-sm font-normal text-justify">
                        {item.category_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_title"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Course
                </label>
                <div className="flex flex-wrap">
                  {coursearr.map((item, i) => (
                    <div key={i} className="col-span-8">
                      <input
                        type="checkbox"
                        name="categories[]"
                        value={item.cour_id}
                        //onChange={(e) => handleCheckBox(e, i)}
                        className="py-2  text-sm font-semibold"
                      />
                      <span className="py-2 px-2 text-sm font-normal text-justify">
                        {item.course_name}
                      </span>
                    </div>
                  ))}
                </div>
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
              <div>
                <h3>
                  Contact Details
                  <hr></hr>
                </h3>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="address2"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address2
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="address2"
                    name="address2"
                    type="text"
                    autoComplete="address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>{" "}
              <div className="sm:col-span-4">
                <label
                  htmlFor="landmark"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Landmark
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="landmark"
                    name="landmark"
                    type="text"
                    autoComplete="landmark"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pin Code
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    autoComplete="pincode"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="state"
                    name="state"
                    type="text"
                    autoComplete="state"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    autoComplete="city"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="contactno"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contact No.
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="contactno"
                    name="contactno"
                    type="text"
                    autoComplete="contactno"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="faxno"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Fax No.
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="faxno"
                    name="faxno"
                    type="text"
                    autoComplete="faxno"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Website
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="website"
                    name="website"
                    type="website"
                    autoComplete="website"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="logo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Logo
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    name="logo"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={onLogoChange}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_keyword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Banner
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={onBannerChange}
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
