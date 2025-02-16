import React, { useState, useEffect } from "react";
import axios from "axios";
//const config = require("../../../server/config/config.js");
//import * as config from "../../../server/config/config.js";
//import { port, api_link } from "../../../server/config/config.js";

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
        //url: "https://beta.timesofcollege.com:3007/login",
        url: "/api/auth",
        data: payload,
      })
        .then(function (response) {
          console.log(response.data[0].admin_id);
          if (response.data.length > 0) {
            if (response.data[0].admin_id) {
              //console.log("user details-->", response.data);
              localStorage.setItem("login_id", response.data[0].au_id);
              localStorage.setItem("logedin", response.data[0].admin_id);
              window.location = "/admin";
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
      <div className="mt-20 bg-blue-700 sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="sm:mx-auto sm:w-600 sm:max-w-sm">
            {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
            <h2 className="mt-0 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form 
              className="space-y-6" 
              action=""
              method="post"
              id="loginForm"
              onSubmit={loginuser}
            >
              <div>
                <label for="email" className="block text-sm/6 font-medium text-gray-900">User Id</label>
                <div className="mt-2">
                  <input type="email" name="admin_email"  id="admin_email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                  {/* <div class="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input type="password" name="admin_password" id="admin_password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
              </div>
            </form>

            {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not a member?
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}
