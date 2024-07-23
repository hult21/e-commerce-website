import React from "react";
import sale from "../Images/100a1728-ade0-4a48-8357-4394a6e69065.jpg";
import skincare from "../Images/a4bb50c701b569fddfabffea35892e45.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate();



  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <div className="banner__container container"> 
       <div className="product">
        <img src={sale} alt="Complexion" onClick={() => navigateTo("/e-commerce-website/shop/complexion")}/>
        <div className="overlay">
          <h2>COMPLEXION</h2>
          <a href="/e-commerce-website/shop/complexion">Discover</a>
        </div>
      </div>
      <div className="product">
        <img src={skincare} alt="Skincare"  onClick={() => navigateTo('/e-commerce-website/shop/skincare')}/>
        <div className="overlay">
          <h2>SKINCARE</h2>
          <a href="/e-commerce-website/shop/skincare">Discover</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;