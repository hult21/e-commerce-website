import React from "react";

import { IoCloseOutline } from "react-icons/io5";


const FilterMenu = ({ displayFilter, isOpen, toggleMenu }) => {
  const closeCanva = () => {
    toggleMenu(false);
  };

  return (
    <div
      className={`offcanvas-container ${isOpen ? "open" : ""}`}
      id="filterMenu"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">FILTERS</h5>
        <button className="close-button" onClick={closeCanva}>
          <IoCloseOutline />
        </button>
      </div>
      <div className="offcanvas-body ">
      <ul className="filter__options">
        <h2>SORT BY:</h2>
        <button onClick={displayFilter("Popularity")}> Best Sellers </button>
        <button onClick={displayFilter("Price Low to High")}>Price Low to High</button>
        <button onClick={displayFilter("Price High to Low")}>Price High to Low</button>
        <button onClick={displayFilter("New In")}>New Arrivals</button>
      </ul>

      <button onClick={displayFilter("")}>RESET</button>

      </div>
    </div>
  );
};

export default FilterMenu;
