import React from "react";
import sale from "../Images/100a1728-ade0-4a48-8357-4394a6e69065.jpg";
import skincare from "../Images/a4bb50c701b569fddfabffea35892e45.jpg";
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <div className="banner__container container"> 
       <div className="product">
        <img src={sale} alt="Complexion"/>
        <div className="overlay">
          <h2>COMPLEXION</h2>
          <Link to="/shop/complexion">Discover</Link>
        </div>
      </div>
      <div className="product">
        <img src={skincare} alt="Skincare"/>
        <div className="overlay">
          <h2>SKINCARE</h2>
          <Link to="/shop/skincare">Discover</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;