import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import Modal from "../../commonComps/modal";
import GlobalSearch from "../globalSearch";
import { openModel, closeModel } from "../../../../redux/manageModelSlice";

import logo from "/images/logo.png";

function Relatedcolleges(props) {
    const modelStatus = useSelector((state) => state.manageModel.isOpen)
    const dispatch = useDispatch()

    console.log('modelState------', modelStatus);
    
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
            <div className="logo">
            <a href={`/`}>
                <img src={logo} alt="Edu Potal" />
            </a>
            </div>
            <nav>
            <ul>
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
                    to={`/`}
                    className={`text-sm ${({ isActive }) => (isActive ? "active" : "")}`}
                >
                    Courses
                </NavLink>
                </li>
                <li>
                <NavLink
                    to={`/`}
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
                    <span onClick={() => dispatch(openModel())}>Search Colleges</span>
                </li>
            </ul>
            </nav>
            <div className="profile">{/* <Link to="/login">Login</Link> */}</div>
        </header>
        <Modal 
            isModalOpen={modelStatus}          
            onClose={() => dispatch(closeModel())}
        >
            <section className="">
                <GlobalSearch />
            </section>
        </Modal>
    </>
  );
}
export default Relatedcolleges;
