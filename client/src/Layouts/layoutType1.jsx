import React from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink, Link } from "react-router-dom";

import logo from "/images/logo.png";
import "./layoutType1.css";
import "./responsive.css";

function LayoutType1(props) {
  const renderProfile = () => (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Options
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Account settings
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
          >
            Support
          </a>
          <a
            href="#"
            className="text-gray-700 block px-4 py-2 text-sm"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-2"
          >
            License
          </a>
          <form method="POST" action="#" role="none">
            <button
              type="submit"
              className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="Edu Potal" />
        </div>
        <div className="profile">
          <Link to="/login">Logout</Link>
        </div>
      </header>
      <div className="root">
        <div className="sidebar relative flex flex-col bg-white text-gray-700 h-100vh p-4 shadow-xl shadow-blue-gray-900/5">
          <aside id="sidebar">
            <ul>
              <li>
                <NavLink
                  to={`/admin`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`collegelisting`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  College Listing
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  to={`collegetype`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  College Type
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`courses`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`coursetype`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Course Type
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`coursebranchs`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Course Branch
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`categories`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`facilites`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Facility
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`approvedby`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Approved By
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`placement`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Placement
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`companys`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Companys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`adminusers`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Admin Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`roles`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Roles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`location`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Location
                </NavLink>
              </li>
              {/*  <li>
                <NavLink
                  to={`exam`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Exam
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to={`newsnevent`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  News & Articles
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`questionanswerlist`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Question & Answer
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`cms`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  CMS
                </NavLink>
              </li>{" "}
              <li>
                <NavLink
                  to={`notifications`}
                  className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                  Notifications
                </NavLink>
              </li>
            </ul>
          </aside>
        </div>
        <div className="main-contents w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

LayoutType1.propTypes = {};

export default LayoutType1;
