import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

function BuySellRent() {

    return (
      <React.Fragment>
        <div className="container">
        <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg">
            <div className="container mt-4 p-0 text-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                <ul className="row d-flex navbar-nav ms-auto">
                    
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/BuySellRent/Buy" className="navMenu">BUY</NavLink></div>
                    </li>
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/BuySellRent/Sell" className="navMenu">SELL</NavLink></div>
                    </li>
                    <li className="col-lg-2 nav-item">
                        <div className="nav-link"><NavLink to="/BuySellRent/Listing" className="navMenu">LISTING</NavLink></div>
                    </li>                 
                </ul>
                </div>
            </div>
        </nav>
        </div>
        </div>
      </React.Fragment>
    );
  }
  
  export default BuySellRent;
  