import React from "react";
import "./css/Header.css";
import Photo1 from "./Image/first.avif";
import Photo2 from "./Image/second.webp";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <div className="left-container">
            <img src={Photo1} alt="model1" />
          </div>
          <div className="middle-container">
            <img src={Photo2} alt="model2" />
          </div>

          <div className="last-container">
            <div className="last-container-heading">jompers</div>
            <div className="last-container-para">
              Embellished Mandarin-Collar Long Kurta
            </div>
            <div className="last-container-price">1,505</div>
            <div className="last-container-price-para">
              MRP 1,499 (60% discount)
            </div>
            <div className="last-container-price-para-details">
              Price inclusive of all taxes
            </div>
            <div className="last-container-table">
              <tr>
                <th>offer</th>
                <th>get it at 1200</th>
              </tr>
              <tr>
                <td>
                  Use Code
                  <br /> AJIOMANIA
                  <br /> T&C
                </td>

                <td>
                  Get upto 30% Off on 2989 and Above.
                  <br /> Max Discount Rs. 1500. View All Products
                </td>
              </tr>
            </div>
            <div className="last-container-size">
              <div className="last-container-size-heading">Select Size</div>
              <div className="last-container-size-menu">
                <div className="last-container-size-menu-items">s</div>
                <div className="last-container-size-menu-items">m</div>
                <div className="last-container-size-menu-items">l</div>
                <div className="last-container-size-menu-items">xl</div>
                <div className="last-container-size-menu-items">xxl</div>
              </div>
              <div className="last-container-size-scale">check size chart</div>
            </div>

            <div className="last-container-location">
              <div className="last-container-location-para">

              Select your size to know your estimated delivery date.
              </div>
            </div>

            <div className="last-container-bag">
              <div className="last-container-bag-para">

             add to bag
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
