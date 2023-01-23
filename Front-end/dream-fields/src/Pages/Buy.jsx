import React from "react";
import ScrollToTop from "../Components/ScrollToTop";


function Buy() {
  return (
    <>
      <img className="img-fluid opacity-75" src="https://www.wesellsarasota.com/wp-content/uploads/2022/07/sarasota-modern-homes-banner.jpg" alt="" />

      <div className="container-lg quickSearchBg pt-3 rounded-3">
        <div class="input-group input-group-lg mb-3">
          <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
        <div className="d-flex justify-content-between mb-lg-3 pt-lg-2 pb-lg-2">
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

          <section className="col-3 dropdown text-light">
            <button className="btn bg-transparent text-light border-0 border-bottom rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Beds
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">1</button></li>
              <li><button className="dropdown-item" type="button">Another action</button></li>
              <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </section>

          <section className="col-3 dropdown text-light">
            <button className="btn bg-transparent text-light border-0 border-bottom rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Baths
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">1</button></li>
              <li><button className="dropdown-item" type="button">Another action</button></li>
              <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </section>
        </div>
      </div>

      {/* Filter section */}

      <div className="container-lg d-flex mb-3">
        <div className="me-auto p-2">
          <section className="col-3 dropdown text-light">
            <button className="btn bg-transparent text-light border-0 border-bottom rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Baths
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">1</button></li>
              <li><button className="dropdown-item" type="button">Another action</button></li>
              <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </section>
        </div>

        <div class="p-2">
          <section className="col-3 dropdown text-light">
            <button className="btn bg-transparent text-light border-0 border-bottom rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Baths
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">1</button></li>
              <li><button className="dropdown-item" type="button">Another action</button></li>
              <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
          </section>
        </div>
      </div>

      {/* Cards */}
      <div className="container-lg">
        <div className="row">
        <div className="col-md-4">
            <div className="card">
              <div class="position-relative">
                <div class="position-absolute top-0 start-0 m-3">
                  <button className="btn btn-dark">FOR SALE</button>
                </div>
                <div class="position-absolute bottom-0 start-50 translate-middle-x"><h3 className="">Php 1,000,000</h3></div>
                <img src="https://bluprint.onemega.com/wp-content/uploads/2018/06/condoliving-burp-designs-image-1.jpg" class="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div class="position-relative">
                <div class="position-absolute top-0 start-0 m-3">
                  <button className="btn btn-dark">FOR SALE</button>
                </div>
                <div class="position-absolute bottom-0 start-50 translate-middle-x"><h3 className="">Php 1,000,000</h3></div>
                <img src="https://bluprint.onemega.com/wp-content/uploads/2018/06/condoliving-burp-designs-image-1.jpg" class="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div class="position-relative">
                <div class="position-absolute top-0 start-0 m-3">
                  <button className="btn btn-dark">FOR SALE</button>
                </div>
                <div class="position-absolute bottom-0 start-50 translate-middle-x"><h3 className="">Php 1,000,000</h3></div>
                <img src="https://bluprint.onemega.com/wp-content/uploads/2018/06/condoliving-burp-designs-image-1.jpg" class="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>






      <ScrollToTop />

    </>
  );
}

export default Buy;