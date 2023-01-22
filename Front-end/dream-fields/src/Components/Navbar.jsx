import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../Pages/Home";
import Buy from "../Pages/Buy";
import Sell from "../Pages/Sell";
import Listing from "../Pages/Listing";
import Inquire from "../Pages/Inquire";
import './NavBarFooter.css';

function NavBar() {

    return (
      <React.Fragment>
        <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container mt-4 p-0 text-light">
                <a className=" navbar-brand"><h3 className="text-light">Dream <span className="greenText">Fields</span></h3></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                <ul className="row d-flex navbar-nav ms-auto">
                    <li className="col-lg-2 nav-item fw-bold">
                        <div className="nav-link"><NavLink to="/" className="navMenu">HOME</NavLink></div>
                    </li>
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/Buy" className="navMenu">BUY</NavLink></div>
                    </li>
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/Sell" className="navMenu">SELL</NavLink></div>
                    </li>
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/Listing" className="navMenu">LISTING</NavLink></div>
                    </li>
                    <li className="col-lg-4 nav-item d-flex justify-content-center">
                        <NavLink to="/SignIn" className="navMenu"><button type="button" className="btn bg-transparent nav-link text-light border-1 rounded-0 rounded-start">Login</button></NavLink>                                                                                        
                        <NavLink to="/Inquire" className="navMenu"><button type="button" className="btn greenBtn nav-link text-light rounded-0 rounded-end">INQUIRE</button></NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Buy" element={<Buy />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/Listing" element={<Listing />} />
            <Route path="/Listing" element={<Inquire />} />
        </Routes>

      </React.Fragment>
    );
  }
  
  export default NavBar;
  