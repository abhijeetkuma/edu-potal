import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../../commonComps/modal";
import GlobalSearch from "../globalSearch";
import { openModel, closeModel } from "../../../../redux/manageModelSlice";

import logo from "/images/logoWhite.png";
import searchIcon from "/images/search.svg";

function Relatedcolleges(props) {
  const modelStatus = useSelector((state) => state.manageModel.isOpen);
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false)
  const dispatch = useDispatch();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //     setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //     setIsModalOpen(false);
  // };

  return (
    <>
      <header className="website-wrapper">
        <div className="desktop logo">
          <a href={`/`}>
            <img src={logo} alt="Edu Potal" />
          </a>
        </div>
        <nav>
          <ul className="desktop-menu">
            <li>
              <NavLink
                to={`/`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/listing`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Colleges
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/exams`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Exams
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/courses`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/studygoal`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Study Goal
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/toccafe`}
                className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
              >
                TOC Cafe
              </NavLink>
            </li>
            <li>
              <span
                className="globalSearch"
                onClick={() => dispatch(openModel())}
              >
                <img src={searchIcon} alt="Global Search" />
              </span>
            </li>
          </ul>
          <div className="mobile-menu">
            <span className={`hamburger-menu ${isMobMenuOpen ? 'open' : 'close'}`} onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </span>
            {isMobMenuOpen && 
              <ul>
                <li>
                  <NavLink
                    to={`/`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                    onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/listing`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                    onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                  >
                    Colleges
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/exams`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                    onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                  >
                    Exams
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/courses`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                    onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/studygoal`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                    onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                  >
                    Study Goal
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`/toccafe`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                    onClick={() => setIsMobMenuOpen(!isMobMenuOpen)}
                  >
                    TOC Cafe
                  </NavLink>
                </li>
              </ul>
            }
            <div className="logo">
              <a href={`/`}>
                <img src={logo} alt="Edu Potal" />
              </a>
            </div>
            <div>
              <span
                className="globalSearch"
                onClick={() => dispatch(openModel())}
              >
                <img src={searchIcon} alt="Global Search" />
              </span>
            </div>
          </div>
        </nav>
        <div className="profile">{/* <Link to="/login">Login</Link> */}</div>
      </header>
      <Modal isModalOpen={modelStatus} onClose={() => dispatch(closeModel())}>
        <section className="">
          <GlobalSearch />
        </section>
      </Modal>
    </>
  );
}
export default Relatedcolleges;
