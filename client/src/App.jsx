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
//import Exam from "./Pages/exam";
import Newsnevent from "./Pages/newsnevent";
import Newsandevent from "./Pages/newsandevent";
import Newsarticles from "./Pages/newsarticles";
import Questionanswer from "./Pages/questionanswerlist";
import Questionanser from "./Pages/questionanswer";
import Enquiry from "./Pages/collegeenquiry";

import Location from "./Pages/location";
import Roles from "./Pages/roles";
import Companys from "./Pages/companys";
import Placement from "./Pages/placement";
import Notifications from "./Pages/notifications";
import Notificationsadd from "./Pages/notificationadd";
import Advertisement from "./Pages/advertisement";
import Advertisementform from "./Pages/advertisementform";

//-----------Website------------------

import Home from "./Pages/website/home";
import Listing from "./Pages/website/listing";
import CMS from "./Pages/website/cms";
import EXAMS from "./Pages/website/exams";
import STUDYGOAL from "./Pages/website/studygoal";
import COURSES from "./Pages/website/courses";
import EXAMSDETAILS from "./Pages/website/exams/details";
import TOCCAFE from "./Pages/website/toccafe";
import COLLEGEDETAIL from "./Pages/website/college/details";
import CATEGORYWISE from "./Pages/website/categorywise";
import STUDYBYCITY from "./Pages/website/studybycity";
import COURSE from "./Pages/website/course";
import SEARCH from "./Pages/website/search";

import DETAILS from "./Pages/website/collegeDetails";
import SITEMAP from "./Pages/website/sitemap";
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
      {
        path: "/cms?/:cms_url",
        element: <CMS />,
      },
      {
        path: "/courses",
        element: <COURSES />,
      },
      {
        path: "/studygoal",
        element: <STUDYGOAL />,
      },
      {
        path: "/exams",
        element: <EXAMS />,
      },

      {
        path: "/exam?/:na_url",
        element: <EXAMSDETAILS />,
      },
      {
        path: "/toccafe",
        element: <TOCCAFE />,
      },
      // {
      //   path: "/college?/:college_url",
      //   element: <COLLEGEDETAIL />,
      // },
      {
        path: "/categorywise?/:category_url",
        element: <CATEGORYWISE />,
      },
      {
        path: "/studybycity?/:city_url",
        element: <STUDYBYCITY />,
      },
      {
        path: "/course?/:course_url",
        element: <COURSE />,
      },
      {
        //path: "/search?/:search_parameter",
        path: "/search",
        element: <SEARCH />,
      },
      {
        path: "/college?/:college_url",
        element: <DETAILS />,
      },
      {
        path: "/sitemap",
        element: <SITEMAP />,
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
        path: "/admin/cms/addcms?/:cmsid",
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
      { path: "/admin/college_enquiry", element: <Enquiry /> },
      {
        path: "/admin/roles",
        element: <Roles />,
      },
      {
        path: "/admin/notifications",
        element: <Notifications />,
      },
      {
        path: "/admin/notifications/notificationadd?/:notif_id",
        element: <Notificationsadd />,
      },
      {
        path: "/admin/advertisement",
        element: <Advertisement />,
      },
      {
        path: "/admin/advertisement/advertisementform?/:ad_id",
        element: <Advertisementform />,
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
