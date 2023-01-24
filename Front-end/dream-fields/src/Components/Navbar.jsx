import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import BuySellRent from "../Pages/BuySellRent";
import Buy from "./Buy";
import Sell from "./Sell";
import Listing from "./Listing";
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
                    <li className="col-lg-3 nav-item fw-bold">
                        <div className="nav-link"><NavLink to="/" className="navMenu">HOME</NavLink></div>
                    </li>
                    <li className="col-lg-3 nav-item">
                        <div className="nav-link"><NavLink to="/BuySellRent" className="navMenu">Buy/Sell</NavLink></div>
                    </li>
                    <li className="col-lg-6 nav-item d-flex justify-content-center">
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
            <Route path="/BuySellRent/*" element={<BuySellRent />} />
            <Route path="/BuySellRent/Buy" element={<Buy />} />
            <Route path="/BuySellRent/Sell" element={<Sell />} />
            <Route path="/BuySellRent/Listing" element={<Listing />} />
            <Route path="/Listing" element={<Inquire />} />
        </Routes>

      </React.Fragment>
    );
  }
  
  export default NavBar;
  