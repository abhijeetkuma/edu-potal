import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutType1 from "./Layouts/layoutType1";
import UserLayoutType1 from "./Layouts/UserLayoutType1";

import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import Collegelisting from "./Pages/collegelisting";
import Courses from "./Pages/courses";
import Coursetype from "./Pages/coursetype";
import Collegetype from "./Pages/collegetype";
import Coursebranchs from "./Pages/coursebranchs";
import Categories from "./Pages/categories";
import Facility from "./Pages/facilites";
import Approvedby from "./Pages/approvedby";
import Jobsapproval from "./Pages/jobsapproval";
import Memonbilling from "./Pages/memonbilling";
import Vehicles from "./Pages/vehicles";
import College from "./Pages/college";
import Addcms from "./Pages/addcms";
import Cms from "./Pages/cms";
import Adminusers from "./Pages/adminusers";
import Exam from "./Pages/exam";
import Newsnevent from "./Pages/newsnevent";
import Newsandevent from "./Pages/newsandevent";
import Newsarticles from "./Pages/newsarticles";
import Questionanswer from "./Pages/questionanswerlist";
import Questionanser from "./Pages/questionanswer";

import Location from "./Pages/location";
import Roles from "./Pages/roles";
import Companys from "./Pages/companys";
import Placement from "./Pages/placement";

//-----------Website------------------

import Home from "./Pages/website/home";
import Listing from "./Pages/website/listing";

import Expenses from "./Pages/expenses";
import ErrorPage from "./Components/errorComp";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayoutType1 />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/listing",
        element: <Listing />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutType1 />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/admin/collegelisting",
        element: <Collegelisting />,
      },
      {
        path: "/admin/collegetype",
        element: <Collegetype />,
      },
      {
        path: "/admin/coursetype",
        element: <Coursetype />,
      },
      {
        path: "/admin/exam",
        element: <Exam />,
      },
      {
        path: "/admin/newsnevent",
        element: <Newsnevent />,
      },
      {
        path: "/admin/newsandevent",
        element: <Newsandevent />,
      },
      {
        path: "/admin/questionanswerlist",
        element: <Questionanswer />,
      },
      {
        path: "/admin/location",
        element: <Location />,
      },
      {
        path: "/admin/placement",
        element: <Placement />,
      },
      {
        path: "/admin/courses",
        element: <Courses />,
      },
      {
        path: "/admin/coursebranchs",
        element: <Coursebranchs />,
      },
      {
        path: "/admin/categories",
        element: <Categories />,
      },
      {
        path: "/admin/facilites",
        element: <Facility />,
      },
      {
        path: "/admin/approvedby",
        element: <Approvedby />,
      },
      {
        path: "/admin/jobsapproval",
        element: <Jobsapproval />,
      },
      {
        path: "/admin/memonbilling",
        element: <Memonbilling />,
      },
      {
        path: "/admin/cms/addcms",
        element: <Addcms />,
      },
      {
        path: "/admin/cms",
        element: <Cms />,
      },
      {
        path: "/admin/companys",
        element: <Companys />,
      },
      {
        path: "/admin/vehicles",
        element: <Vehicles />,
      },
      {
        //path: "/admin/collegelisting/college",
        path: "/admin/collegelisting/college?/:cid",
        element: <College />,
      },
      {
        //path: "/admin/collegelisting/college",
        path: "/admin/questionanswerlist/questionanswer?/:qid",
        element: <Questionanser />,
      },
      {
        //path: "/admin/collegelisting/college",
        path: "/admin/newsnevent/newsarticles?/:na_id",
        element: <Newsarticles />,
      },
      {
        path: "/admin/adminusers",
        element: <Adminusers />,
      },
      {
        path: "/admin/roles",
        element: <Roles />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
