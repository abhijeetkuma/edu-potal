import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
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
} from "ckeditor5";

import axios from "axios";

function Questionanswer() {
  if (localStorage.getItem("login_id") <= 0) {
    window.location = "/login";
  }
  const [datas, setDatas] = useState([]);
  const [returndspmsg, setReturndspmsg] = useState();
  const [errorMsg, setErrorMsg] = useState([]);
  const [anservalue, setAnswervalue] = useState();
  const [catgoryarr, setCatgoryarr] = useState([]);
  const [categoryvalue, setCategoryvalue] = useState([]);
  const [tradingarr, setTradingarr] = useState([]);
  const [tradingvalue, setTradingvalue] = useState([]);
  const [editdata, setEditdata] = useState({
    qid: "",
    question: "",
    question_url: "",
    qmeta_title: "",
    qmeta_description: "",
    qmeta_keyword: "",
    answer: "",
    catgories: "",
    qstatus: "A",
    categories: "",
    trading: "",
  });
  const { qid } = useParams();
  useEffect(() => {
    /*fetch("http://localhost:3001/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));*/
    axios
      .get("/api/getcategoryarr")
      .then((response) => {
        setCatgoryarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/api/gettradingarr")
      .then((response) => {
        setTradingarr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    if (qid > 0) {
      axios
        .get("/api/editquestion/" + qid)
        .then((response) => {
          setEditdata(response.data[0]);
        })
        .catch((error) => {
          console.error(error);
        });
      //editdata.ctype != "" && setCollegetypevalue(editdata.ctype);
    }
  }, []);
  const categoryCheck = (event) => {
    var category_array = [...categoryvalue];
    if (event.target.checked) {
      category_array = [...categoryvalue, event.target.value];
    } else {
      category_array.splice(categoryvalue.indexOf(event.target.value), 1);
    }
    setCategoryvalue(category_array);
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
  const handleChangeFormdata = (e) => {
    const { name, value } = e.target;
    setEditdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addquestion = (e) => {
    e.preventDefault();
    const {
      qid,
      question,
      qstatus,
      question_url,
      qmeta_title,
      qmeta_description,
      qmeta_keyword,
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
      qid: qid.value,
      question: question.value,
      answer: anservalue,
      qstatus: qstatus.value,
      question_url: question_url.value,
      qmeta_title: qmeta_title.value,
      qmeta_description: qmeta_description.value,
      qmeta_keyword: qmeta_keyword.value,
      trading: tradingvalue.join(","),
      catgories: categoryvalue.join(","),
    };
    if (qid.value > 0) {
      //update form data
      axios({
        method: "PUT",
        url: "/api/getupdatequestion/${qid}",
        data: payload,
      })
        .then(function (response) {
          //console.log(response);
          //console.log(response.statusText);
          if (response.statusText === "OK") {
            //window.location.href = "../../questionanswerlist";
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
              window.location.replace("../../questionanswerlist");
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
        //url: "/api/addfacitly",
        url: "/api/addquestion",
        data: payload,
      })
        .then(function (response) {
          console.log(response);
          setReturndspmsg(
            "<div className={sussmsg}>Record successfully added</div>"
          );
        })
        .catch(function (error) {
          console.log(error);
          setReturndspmsg(
            "<div className={errmsg}>Error in add question record</div>"
          );
        });
    }

    /*  } else {
      setErrorMsg(errorsForm);
    } */
  };
  // end add new question
  const createUrl = (e) => {
    var questions = e.target.value;
    var qsturl = questions.replace(/[_\s]/g, "-").replace(/[^a-z0-9-\s]/gi, "");
    editdata.question_url = qsturl.toLowerCase();
  };
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="pageHeader p-3">
          <h1 className="text-2xl font-semibold">Question & Answer</h1>
          <div className="actions">
            <Link
              to={"../questionanswerlist"}
              alt="Back To Question Listing"
              title="Back To Question Listing"
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
        <form action="" method="post" id="facilitesForm" onSubmit={addquestion}>
          {returndspmsg && returndspmsg}

          <div className="mt-2">
            <label
              htmlFor="college_url"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Question
            </label>
            <input
              type="hidden"
              name="qid"
              value={editdata.qid && editdata.qid}
            />
            <input
              type="text"
              name="question"
              value={editdata.question ? editdata.question : ""}
              required="required"
              onChangeCapture={createUrl}
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <div className="errmsg">{errorMsg[0]}</div>
          </div>
          <div className="mt-2">
            <label
              htmlFor="college_url"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Question Url *
            </label>

            <input
              type="text"
              name="question_url"
              value={editdata.question_url ? editdata.question_url : ""}
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
              Answer
            </label>
            <CKEditor
              editor={ClassicEditor}
              config={{
                plugins: [Essentials, Bold, Italic, Paragraph, List, Table],

                toolbar: [
                  "bold",
                  "italic",
                  "|",
                  "undo",
                  "redo",
                  "|",
                  "numberedList",
                  "bulletedList",
                ],
                menuBar: {
                  isVisible: true,
                },
              }}
              data={editdata.answer ? editdata.answer : ""}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor 1 is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const ans_data = editor.getData();
                setAnswervalue(ans_data);
                //console.log({ event, editor, college_descripton_data });
              }}
            />
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="categories"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="flex flex-wrap ">
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
                    defaultChecked={
                      editdata.categories?.length
                        ? editdata.categories.includes(
                            JSON.stringify(item.cat_id)
                          )
                        : false
                    }
                  />
                  <span className="py-2 px-2 text-sm font-normal text-justify">
                    {item.category_name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="sm:col-span-4">
            <label
              htmlFor="trading"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Trading
            </label>
            <div className="flex flex-wrap ">
              {tradingarr.map((item, i) => (
                <div key={i} className="mt-2 text-sm">
                  <input
                    type="checkbox"
                    name="trading"
                    value={item.tid}
                    defaultChecked={
                      editdata.trading?.length
                        ? editdata.trading.includes(JSON.stringify(item.tid))
                        : false
                    }
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
          <div className="mt-2">
            <label
              htmlFor="college_url"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Meta Title *
            </label>
            <input
              type="text"
              name="qmeta_title"
              value={editdata.qmeta_title ? editdata.qmeta_title : ""}
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="qmeta_description"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Meta Description *
            </label>
            <input
              type="text"
              name="qmeta_description"
              value={
                editdata.qmeta_description ? editdata.qmeta_description : ""
              }
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2">
            <label
              htmlFor="qmeta_keyword"
              className="block text-sm font-bold leading-6 text-gray-900"
            >
              Meta Keyword *
            </label>
            <input
              type="text"
              name="qmeta_keyword"
              value={editdata.qmeta_keyword ? editdata.qmeta_keyword : ""}
              required="required"
              onChange={handleChangeFormdata}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex mt-2 sm:size-4 lx zl alt ars ary">
            <div className="lk acf cct cgl chn chu flex flex-wrap">
              <label
                htmlFor="college_url"
                className="block text-sm font-bold leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="lx zg">
                <input
                  type="radio"
                  name="qstatus"
                  value="A"
                  checked={editdata.qstatus == "A" && true}
                  required="required"
                  onChange={handleChangeFormdata}
                  className="oc se agc ayn bnu"
                />
                <label className="jw lu awg awk awv ayb">Active</label>
              </div>
              <div className="lx zg">
                <input
                  type="radio"
                  name="qstatus"
                  value="D"
                  checked={editdata.qstatus == "D" && true}
                  required="required"
                  onChange={handleChangeFormdata}
                  className="oc se agc ayn bnu"
                />
                <label className="jw lu awg awk awv ayb">Inactive</label>
              </div>
            </div>
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
export default Questionanswer;
