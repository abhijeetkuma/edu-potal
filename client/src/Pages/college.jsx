import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  List,
  Table,
} from "ckeditor5";

//import { SlashCommand } from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
//import "ckeditor5-premium-features/ckeditor5-premium-features.css";
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
  const [clogo, setClogo] = useState();
  const [banner, setBanner] = useState([]);
  const [catgoryarr, setCatgoryarr] = useState([]);
  const [coursearr, setCoursearr] = useState([]);
  const [approvedbyarr, setApprovedbyarr] = useState([]);
  const [tradingarr, setTradingarr] = useState([]);
  const [examarr, setExamarr] = useState([]);
  const [collegetypearr, setCollegetypearr] = useState([]);
  const [collegetypevalue, setCollegetypevalue] = useState([]);
  const [tradingvalue, setTradingvalue] = useState([]);
  const [approvedbyvalue, setApprovedbyvalue] = useState([]);
  const [categoryvalue, setCategoryvalue] = useState([]);
  const [coursevalue, setCoursevalue] = useState([]);
  const [examvalue, setExamvalue] = useState([]);

  //const [editdata, setEditdata] = useState([]);
  const [editdata, setEditdata] = useState({
    college_name: "",
    college_url: "",
    tag_line: "",
    usp_remark: "",
    found_year: "",
    intake: "",
    college_descripton: "",
    meta_title: "",
    meta_description: "",
    meta_keyword: "",
    address: "",
    address2: "",
    landmark: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    contactno: "",
    faxno: "",
    email: "",
    website: "",
    ctype: [],
    trading: [],
  });
  const { cid } = useParams();
  console.log("College id:", cid);

  useEffect(() => {
    /*fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));*/
    axios
      .get("http://localhost:3007/getapprovedbyarr")
      .then((response) => {
        setApprovedbyarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
    axios
      .get("http://localhost:3007/gettradingarr")
      .then((response) => {
        setTradingarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3007/getexamarr")
      .then((response) => {
        setExamarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3007/getcollegetypearr")
      .then((response) => {
        setCollegetypearr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    if (cid > 0) {
      axios
        .get("http://localhost:3007/editcolleges/" + cid)
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
    //setLogo([...e.target.files]);
    setLogo(e.target.files[0].name);
    //setLogo(URL.createObjectURL(e.target.files[0]));
  };
  const onBannerChange = (e) => {
    setBanner([...e.target.files]);
  };
  const createUrl = (e) => {
    var collegename = e.target.value;
    var collegeurl = collegename
      .replace(/[_\s]/g, "-")
      .replace(/[^a-z0-9-\s]/gi, "");
    editdata.college_url = collegeurl.toLowerCase();
    console.log(
      "college new url-->",
      collegeurl.toLowerCase(),
      editdata.college_url
    );
  };
  //console.log("college edit url", editdata.college_url);
  const addnew = (e) => {
    e.preventDefault();
    /* file upload */
    const url = "http://localhost:5173/colleges";
    const formData = new FormData();
    formData.append("file", clogo);
    formData.append("fileName", clogo.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
    /* end file upload */
    const {
      cid,
      college_name,
      college_url,
      tag_line,
      usp_remark,
      college_descripton,
      meta_title,
      meta_keyword,
      meta_description,
      found_year,
      intake,
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
      ctype,
      trading,
      approvedby,
      hostel_available,
    } = e.target.elements;

    let errorsForm = [];
    /*if (college_name.value === "") {
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
    }*/
    if (errorsForm.length === 0) {
      const payload = {
        cid: cid.value,
        college_name: college_name.value,
        college_url: college_url.value,
        tag_line: tag_line.value,
        usp_remark: usp_remark.value,
        found_year: found_year.value,
        intake: intake.value,
        college_descripton: college_descripton.value,
        meta_title: meta_title.value,
        meta_keyword: meta_keyword.value,
        meta_description: meta_description.value,
        display_type: display_type.value,
        //highlights: highLights,
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
        ctype: collegetypevalue.join(","),
        trading: tradingvalue.join(","),
        approvedby: approvedbyvalue.join(","),
        categories: categoryvalue.join(","),
        courses: coursevalue.join(","),
        hostel_available: hostel_available.value,
      };
      if (cid.value > 0) {
        //update form data
        axios({
          method: "PUT",
          url: "http://localhost:3007/getupdatecollege/${cid}",
          data: payload,
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        //end update form data
      } else {
        //add form data
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
        //end add form data
      }
    } else {
      setErrorMsg(errorsForm);
    }
  };

  const collegetypeCheck = (event) => {
    var colltype_array = [...collegetypevalue];
    if (event.target.checked) {
      colltype_array = [...collegetypevalue, event.target.value];
    } else {
      colltype_array.splice(collegetypevalue.indexOf(event.target.value), 1);
    }
    setCollegetypevalue(colltype_array);
  };
  const tradingCheck = (event) => {
    var trading_array = [...tradingvalue];
    if (event.target.checked) {
      trading_array = [...tradingvalue, event.target.value];
    } else {
      trading_array.splice(tradingvalue.indexOf(event.target.value), 1);
    }
    setTradingvalue(trading_array);
  };
  const approvedbyCheck = (event) => {
    var approved_array = [...approvedbyvalue];
    if (event.target.checked) {
      approved_array = [...approvedbyvalue, event.target.value];
    } else {
      approved_array.splice(approvedbyvalue.indexOf(event.target.value), 1);
    }
    setApprovedbyvalue(approved_array);
  };
  const categoryCheck = (event) => {
    var category_array = [...categoryvalue];
    if (event.target.checked) {
      category_array = [...categoryvalue, event.target.value];
    } else {
      category_array.splice(categoryvalue.indexOf(event.target.value), 1);
    }
    setCategoryvalue(category_array);
  };
  const courseCheck = (event) => {
    var course_array = [...coursevalue];
    if (event.target.checked) {
      course_array = [...coursevalue, event.target.value];
    } else {
      course_array.splice(coursevalue.indexOf(event.target.value), 1);
    }
    setCoursevalue(course_array);
  };
  const examCheck = (event) => {
    var exam_array = [...examvalue];
    if (event.target.checked) {
      exam_array = [...examvalue, event.target.value];
    } else {
      exam_array.splice(examvalue.indexOf(event.target.value), 1);
    }
    setExamvalue(exam_array);
  };
  function handleChangelogo(e) {
    //console.log(e.target.files);
    //setClogo(URL.createObjectURL(e.target.files[0]));
    setClogo(e.target.files[0]);
  }
  console.log("logo-->", clogo);
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="pageHeader p-3">
          <h1 className="text-2xl font-semibold">
            {cid > 0 ? "Update" : "New"} College Details
          </h1>
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
            //encType="multipart/form-data"
            onSubmit={addnew}
          >
            {errorMsg && <div className="errorDisp">{errorMsg}</div>}
            <input
              type="hidden"
              name="cid"
              value={editdata.cid && editdata.cid}
            />
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-4">
                <label
                  htmlFor="college_name"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  College Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="college_name"
                      id="college_name"
                      //autoComplete="college_name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Please enter college name"
                      value={editdata.college_name && editdata.college_name}
                      onBlur={createUrl}
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="college_url"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  College URL
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="college_url"
                      id="college_url"
                      autoComplete="college_url"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="College Url not user space"
                      value={editdata.college_url && editdata.college_url}
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="tag_line"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Tag Line
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="tag_line"
                      id="tag_line"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                      value={editdata.tag_line && editdata.tag_line}
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="usp_remark"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  USP Remark
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="usp_remark"
                      id="usp_remark"
                      autoComplete="usp_remark"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                      value={editdata.usp_remark && editdata.usp_remark}
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="found_year"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Foundation Year
                </label>
                <div className="flex rounded-md">
                  <input
                    id="found_year"
                    name="found_year"
                    type="text"
                    autoComplete="found_year"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={editdata.found_year && editdata.found_year}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="intake"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Intake
                </label>
                <div className="flex rounded-md">
                  <input
                    id="intake"
                    name="intake"
                    type="text"
                    autoComplete="intake"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={editdata.intake && editdata.intake}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="hostel_available"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Hostel Available
                </label>
                <div className="flex rounded-md">
                  <input
                    id="hostel_available"
                    name="hostel_available"
                    type="text"
                    autoComplete="hostel_available"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={
                      editdata.hostel_available && editdata.hostel_available
                    }
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="college_descripton"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="flex rounded-md ">
                  {/* <CKTextEditor /> */}

                  <textarea
                    id="college_descripton"
                    name="college_descripton"
                    className="block w-full "
                    rows={10}
                    value={
                      editdata.college_descripton && editdata.college_descripton
                    }
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <h1> Highlights</h1>
              <div className="sm:col-span-4">
                <label className="block text-sm font-bold leading-6 text-gray-900">
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
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
                  htmlFor="collegetype"
                  className="block text-sm leading-6 text-gray-900 font-bold"
                >
                  College Type
                </label>
                <div className="flex ">
                  {collegetypearr.map((item, i) => (
                    <div key={i} className="mt-2 text-sm">
                      <input
                        type="checkbox"
                        name="collegetype"
                        value={item.col_type}
                        onClick={collegetypeCheck}
                        onChange={handleChangeFormdata}
                        /*checked={
                          editdata.ctype?.length
                            ? editdata.ctype.includes(
                                JSON.stringify(item.col_type)
                              )
                            : false
                        }*/
                        className="py-2  text-sm font-semibold"
                      />
                      <span className="py-2 px-2 text-sm font-normal text-justify">
                        {item.college_type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="approvedby"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Trading
                </label>
                <div className="flex ">
                  {tradingarr.map((item, i) => (
                    <div key={i} className="mt-2 text-sm">
                      <input
                        type="checkbox"
                        name="approvedby"
                        value={item.tid}
                        onClick={tradingCheck}
                        onChange={handleChangeFormdata}
                        className="py-2  text-sm font-semibold"
                      />
                      <span className="py-2 px-2 text-sm font-normal text-justify">
                        {item.trading_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="approvedby"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Approved By
                </label>
                <div className="flex ">
                  {approvedbyarr.map((item, i) => (
                    <div key={i} className="mt-2 text-sm">
                      <input
                        type="checkbox"
                        name="approvedby"
                        onClick={approvedbyCheck}
                        onChange={handleChangeFormdata}
                        value={item.approv_id}
                        //onChange={(e) => handleCheckBox(e, i)}
                        className="py-2  text-sm font-semibold"
                      />
                      <span className="py-2 px-2 text-sm font-normal text-justify">
                        {item.approved_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>{" "}
              <div className="sm:col-span-4">
                <label
                  htmlFor="categories"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="flex ">
                  {catgoryarr.map((item, i) => (
                    <div key={i} className="mt-2 text-sm">
                      <input
                        type="checkbox"
                        name="categories"
                        value={item.cat_id}
                        onClick={categoryCheck}
                        onChange={handleChangeFormdata}
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
                  htmlFor="courses"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Course
                </label>
                <div className="flex flex-wrap">
                  {coursearr.map((item, i) => (
                    <div key={i} className="col-span-8">
                      <input
                        type="checkbox"
                        name="courses"
                        value={item.cour_id}
                        onClick={courseCheck}
                        onChange={handleChangeFormdata}
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
              <div className="text-left font-extrabold border-x-blue border-spacing-5">
                <h3>Adminssion Process</h3>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="adminssiondetails"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Admission Details
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  {/*  <textarea
                    id="adminssiondetails"
                    name="adminssiondetails"
                    type="text"
                    autoComplete="adminssiondetails"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={
                      editdata.adminssiondetails && editdata.adminssiondetails
                    }
                    onChange={handleChangeFormdata}
                  /> */}
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      plugins: [
                        Essentials,
                        Bold,
                        Italic,
                        Paragraph,
                        Mention,
                        List,
                        Table,
                      ],

                      toolbar: [
                        "bold",
                        "italic",
                        "|",
                        "undo",
                        "redo",
                        "|",
                        "Mention",
                        "table",
                      ],
                    }}
                    data={
                      editdata.adminssiondetails && editdata.adminssiondetails
                    }
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor 1 is ready to use!", editor);
                    }}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="approvedby"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Exam
                </label>
                <div className="flex ">
                  {examarr.map((item, i) => (
                    <div key={i} className="mt-2 text-sm">
                      <input
                        type="checkbox"
                        name="approvedby"
                        value={item.exam_id}
                        onClick={examCheck}
                        onChange={handleChangeFormdata}
                        className="py-2  text-sm font-semibold"
                      />
                      <span className="py-2 px-2 text-sm font-normal text-justify">
                        {item.exam_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="scholarshipoffer"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Scholarship Offers
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      plugins: [
                        Essentials,
                        Bold,
                        Italic,
                        Paragraph,
                        List,
                        Table,
                      ],

                      toolbar: [
                        "bold",
                        "italic",
                        "|",
                        "undo",
                        "redo",
                        "|",

                        "table",
                        "list",
                      ],
                    }}
                    data={
                      editdata.scholarshipoffer && editdata.scholarshipoffer
                    }
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor 1 is ready to use!", editor);
                    }}
                  />
                  {/*<textarea
                    id="scholarshipoffer"
                    name="scholarshipoffer"
                    type="text"
                    autoComplete=""
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={
                      editdata.scholarshipoffer && editdata.scholarshipoffer
                    }
                    onChange={handleChangeFormdata}
                  />*/}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="facultyprofile"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Faculty Profile
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      plugins: [
                        Essentials,
                        Bold,
                        Italic,
                        Paragraph,
                        List,
                        Table,
                      ],

                      toolbar: [
                        "bold",
                        "italic",
                        "|",
                        "undo",
                        "redo",
                        "|",

                        "table",
                        "list",
                      ],
                    }}
                    data={editdata.facultyprofile && editdata.facultyprofile}
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor 1 is ready to use!", editor);
                    }}
                  />
                  {/*<textarea
                    id="scholarshipoffer"
                    name="scholarshipoffer"
                    type="text"
                    autoComplete=""
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={
                      editdata.scholarshipoffer && editdata.scholarshipoffer
                    }
                    onChange={handleChangeFormdata}
                  />*/}
                </div>
              </div>{" "}
              <div className="sm:col-span-4">
                <label
                  htmlFor="faq"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  FAQ
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      plugins: [
                        Essentials,
                        Bold,
                        Italic,
                        Paragraph,
                        List,
                        Table,
                      ],

                      toolbar: [
                        "bold",
                        "italic",
                        "|",
                        "undo",
                        "redo",
                        "|",

                        "table",
                        "list",
                      ],
                    }}
                    data={editdata.faq && editdata.faq}
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor 1 is ready to use!", editor);
                    }}
                  />
                  {/*<textarea
                    id="scholarshipoffer"
                    name="scholarshipoffer"
                    type="text"
                    autoComplete=""
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={
                      editdata.scholarshipoffer && editdata.scholarshipoffer
                    }
                    onChange={handleChangeFormdata}
                  />*/}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_title"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Meta Title
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    id="meta_title"
                    name="meta_title"
                    type="text"
                    autoComplete="meta_title"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={editdata.meta_title && editdata.meta_title}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>{" "}
              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_description"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Meta Description
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <textarea
                    id="meta_description"
                    name="meta_description"
                    type="text"
                    rows={5}
                    autoComplete="meta_description"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={
                      editdata.meta_description && editdata.meta_description
                    }
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_keyword"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Meta Keyword
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    id="meta_keyword"
                    name="meta_keyword"
                    type="text"
                    autoComplete="meta_keyword"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={editdata.meta_keyword && editdata.meta_keyword}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="text-left font-extrabold">
                <h3>
                  Contact Details
                  <hr></hr>
                </h3>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="address"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Address*
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={editdata.address && editdata.address}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="address2"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.address2 && editdata.address2}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>{" "}
              <div className="sm:col-span-4">
                <label
                  htmlFor="landmark"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.landmark && editdata.landmark}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="country"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.country && editdata.country}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="state"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.state && editdata.state}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.city && editdata.city}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="pincode"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.pincode && editdata.pincode}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="contactno"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.contactno && editdata.contactno}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="faxno"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.faxno && editdata.faxno}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.email && editdata.email}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="website"
                  className="block text-sm font-bold leading-6 text-gray-900"
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
                    value={editdata.website && editdata.website}
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="logo"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Logo
                </label>
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    name="logo"
                    type="file"
                    //multiple
                    //accept="image/*"
                    // onChange={onLogoChange}
                    onChange={handleChangelogo}
                  />
                  <img src={clogo} />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="meta_keyword"
                  className="block text- font-bold leading-6 text-gray-900"
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
              <div className="text-left font-extrabold">
                <h3>
                  Placements
                  <hr></hr>
                </h3>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="placement"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Placement
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="placement"
                      id="placement"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                      value={editdata.placement && editdata.placement}
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="placementdescription"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                  <textarea
                    id="placementdescription"
                    name="placementdescription"
                    type="text"
                    autoComplete=""
                    rows={5}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={
                      editdata.placementdescription &&
                      editdata.placementdescription
                    }
                    onChange={handleChangeFormdata}
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="totalplacementratio"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Total Placement Ratio
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="totalplacementratio"
                      id="totalplacementratio"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="like- d%"
                      value={
                        editdata.totalplacementratio &&
                        editdata.totalplacementratio
                      }
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="averageplacementrecord"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Average Placement Record
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="averageplacementrecord"
                      id="averageplacementrecord"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Like- d LPA"
                      value={
                        editdata.averageplacementrecord &&
                        editdata.averageplacementrecord
                      }
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="higestplacementrecord"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Higest Placement Record
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="higestplacementrecord"
                      id="higestplacementrecord"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Like- d LPA"
                      value={
                        editdata.higestplacementrecord &&
                        editdata.higestplacementrecord
                      }
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="lowestplacementrecord"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Lowest Placement Record
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="lowestplacementrecord"
                      id="lowestplacementrecord"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Like- d LPA"
                      value={
                        editdata.lowestplacementrecord &&
                        editdata.lowestplacementrecord
                      }
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="toprecruiters"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Top Recruiters
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="toprecruiters"
                      id="toprecruiters"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Like- Google, IBM, Microsoft, Delloit etc."
                      value={editdata.toprecruiters && editdata.toprecruiters}
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="toprecuitingsectors"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Top Recruiting Sectors
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="toprecuitingsectors"
                      id="toprecuitingsectors"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Finance, IT etc."
                      value={
                        editdata.toprecuitingsectors &&
                        editdata.toprecuitingsectors
                      }
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="topprofile"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Top Profile
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md">
                    <input
                      type="text"
                      name="topprofile"
                      id="topprofile"
                      autoComplete="tag_line"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Trainee, Accounts, Marketing Heads"
                      value={editdata.topprofile && editdata.topprofile}
                      onChange={handleChangeFormdata}
                    />
                  </div>
                </div>
              </div>
              <div className="text-left font-extrabold">
                <h3>
                  Gallery
                  <hr></hr>
                </h3>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="gallery_image1"
                  className="block text- font-bold leading-6 text-gray-900"
                >
                  Gallery Image1
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
              <div className="sm:col-span-4">
                <label
                  htmlFor="gallery_image2"
                  className="block text- font-bold leading-6 text-gray-900"
                >
                  Gallery Image2
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
              <div className="sm:col-span-4">
                <label
                  htmlFor="gallery_image3"
                  className="block text- font-bold leading-6 text-gray-900"
                >
                  Gallery Image3
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
              <div className="sm:col-span-4">
                <label
                  htmlFor="gallery_image4"
                  className="block text- font-bold leading-6 text-gray-900"
                >
                  Gallery Image4
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
              <div className="sm:col-span-4">
                <label
                  htmlFor="gallery_image5"
                  className="block text- font-bold leading-6 text-gray-900"
                >
                  Gallery Image5
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
                  {cid > 0 ? "Update" : "Save"}
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
