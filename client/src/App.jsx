import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutType1 from "./Layouts/layoutType1";
import UserLayoutType1 from "./Layouts/UserLayoutType1";

import Login from "./Pages/login";
import Dashboard from "./Pages/dashboard";
import Collegelisting from "./Pages/collegelisting";
import Courses from "./Pages/courses";
import Coursebranchs from "./Pages/coursebranchs";
import Categories from "./Pages/categories";
import Facility from "./Pages/facilites";
import Approvedby from "./Pages/approvedby";
import Jobsapproval from "./Pages/jobsapproval";
import Memonbilling from "./Pages/memonbilling";
import Vehicles from "./Pages/vehicles";
import College from "./Pages/college";
import Csm from "./Pages/csm";
import Adminusers from "./Pages/adminusers";
import Roles from "./Pages/roles";

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
        path: "/admin/csm",
        element: <Csm />,
      },
      {
        path: "/admin/expenses",
        element: <Expenses />,
      },
      {
        path: "/admin/vehicles",
        element: <Vehicles />,
      },
      {
        path: "/admin/collegelisting/college",
        element: <College />,
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
