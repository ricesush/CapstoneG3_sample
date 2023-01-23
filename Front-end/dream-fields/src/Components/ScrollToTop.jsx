import React from "react";

function ScrollToTop() {
  window.scrollTo(0,0);

    return (
    <div onClick={ScrollToTop}><button className="btn btn-dark float-end m-5"> ↑↑↑</button></div>    
    );
  }
  
  export default ScrollToTop;