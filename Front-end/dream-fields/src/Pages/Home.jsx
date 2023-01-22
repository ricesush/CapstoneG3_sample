import React from "react";

function Home() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row text-center d-grid align-items-end  mainContainer">
            <section>
              <h1 className="fw-bolder">
                Find Your <span className="greenText">Dream Property</span>
              </h1>
              <h4>
                Turning Your Dream Realty To Reality
              </h4>

            </section>
            
            <div className="quickSearchBg d-flex align-items-center justify-content-around mb-lg-3 pt-lg-2 pb-lg-2 rounded-3">
              <section className="col-3 dropdown">
                <button className="btn bg-transparent text-light border-0 border-bottom rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Property Type
                </button>
                <ul className="dropdown-menu ">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </section>
              <section className="col-3 dropdown text-light">
                <button className="btn bg-transparent text-light border-0 border-bottom rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Location
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </section>
              <section className="col-3">
                <div>**Price range goes here**</div>
              </section>
              <section className="col-3">
                <div>**Search Icon**</div>
              </section>

            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  export default Home;