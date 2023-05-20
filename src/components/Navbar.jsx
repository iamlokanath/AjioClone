import React from "react";
import "./css/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="logo">ajio</div>
          <div className="nav-menu">
            <div className="nav-items">men</div>
            <div className="nav-items">women</div>
            <div className="nav-items">kids</div>
            <div className="nav-items">indie</div>
            <div className="nav-items">home and kitchen</div>
            <div className="search">
              <input type="text" placeholder="Search AJIO" />
            </div>
          </div>
        </div>
      </div>

      {/* for mobile view */}
      <div className="small-nav">
        <div className="small-container">
          <div className="small-back-btn">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="middle-menu">ajio</div>

          <div className="small-nav-menu">
            <div className="small-nav-items">
              <i className="fa-light fa-bag-shopping"></i>
            </div>
            <div className="small-nav-items">
              <i className="fa-regular fa-heart"></i>
            </div>
            <div className="small-nav-items">
              <i className="fa-sharp fa-light fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
