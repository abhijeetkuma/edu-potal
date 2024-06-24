import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutType1 from "./Layouts/layoutType1";
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

import Expenses from "./Pages/expenses";
import ErrorPage from "./Components/errorComp";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutType1 />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/collegelisting",
        element: <Collegelisting />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/coursebranchs",
        element: <Coursebranchs />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/facilites",
        element: <Facility />,
      },
      {
        path: "/approvedby",
        element: <Approvedby />,
      },
      {
        path: "/jobsapproval",
        element: <Jobsapproval />,
      },
      {
        path: "/memonbilling",
        element: <Memonbilling />,
      },
      {
        path: "/csm",
        element: <Csm />,
      },

      {
        path: "/expenses",
        element: <Expenses />,
      },
      {
        path: "/vehicles",
        element: <Vehicles />,
      },
      {
        path: "/collegelisting/college",
        element: <College />,
      },
      {
        path: "/adminusers",
        element: <Adminusers />,
      },
      {
        path: "/roles",
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
