import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Buy from "../Components/Buy";
import Sell from "../Components/Sell";
import Listing from "../Components/Listing";
import Inquire from "./Inquire";


function NavBar() {

    return (
      <React.Fragment>
        <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container mt-4 p-0 text-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                <ul className="row d-flex navbar-nav ms-auto">
                    
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/Buy" className="navMenu">BUY</NavLink></div>
                    </li>
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/Sell" className="navMenu">SELL</NavLink></div>
                    </li>
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/Listing" className="navMenu">LISTING</NavLink></div>
                    </li>                 
                </ul>
                </div>
            </div>
        </nav>
        </div>
        <Routes>
          
            <Route path="/Buy" element={<Buy />} />
            <Route path="/Sell" element={<Sell />} />
            <Route path="/Listing" element={<Listing />} />
            <Route path="/Listing" element={<Inquire />} />
        </Routes>

      </React.Fragment>
    );
  }
  
  export default NavBar;
  