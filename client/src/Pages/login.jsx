import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Login() {
  const [errorMsg, setErrorMsg] = useState([]);
  const [returndspmsg, setReturndspmsg] = useState();
  //const [logedin, setLogedin] = false;
  useEffect(() => {
    localStorage.setItem("logedin", "");
  }, []);
  const loginuser = (e) => {
    e.preventDefault();
    const { admin_email, admin_password } = e.target.elements;

    let errorsForm = [];

    if (admin_email.value === "") {
      errorsForm.push(<div key="branameErr">User Id cann't be blank!</div>);
    } else {
      errorsForm.push();
    }
    if (admin_password.value === "") {
      errorsForm.push(<div key="branurlErr">Password cann't be blank!</div>);
    } else {
      errorsForm.push();
    }

    console.log("errorsForm", errorsForm);
    if (errorsForm.length === 0) {
      const payload = {
        admin_email: admin_email.value,
        admin_password: admin_password.value,
      };
      axios({
        method: "post",
        url: "http://localhost:3007/login",
        data: payload,
      })
        .then(function (response) {
          console.log(response.data[0].admin_id);
          if (response.data.length > 0) {
            if (response.data[0].admin_id) {
              localStorage.setItem("logedin", response.data[0].admin_id);
              window.location = "/";
            } else {
              localStorage.setItem("logedin", "");
              window.location = "/login";
            }
          } else {
            localStorage.setItem("logedin", "");
            window.location = "/login";
          }
          console.log("logedin", localStorage.getItem("logedin"));
          return false;
          //window.location = "/";
        })
        .catch(function (error) {
          console.log(error);
          setReturndspmsg("<div className={errmsg}>Error in login/div>");
        });
    } else {
      setErrorMsg(errorsForm);
    }
  };
  return (
    <>
      <div className="flex bg-white shadow">
        <div className="login-section">
          <form
            action=""
            method="post"
            id="loginForm"
            className="loginform"
            onSubmit={loginuser}
          >
            <h1 className="text-3xl font-semibold">Login</h1>
            <div className="mt-2 mr-4">
              <label>User Id</label>
              <input
                type="text"
                name="admin_email"
                id="admin_email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2 mr-4">
              <label>Password</label>
              <input
                type="password"
                name="admin_password"
                id="admin_password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-2 pb-4">
              <button>Cancle</button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
