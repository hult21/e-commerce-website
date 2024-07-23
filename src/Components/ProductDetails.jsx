import React, { useState } from "react";
import formatCurrency from "../UI/formatCurrency";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";

const ProductDetails = ({ product, category }) => {
  const [isTextToggled, setTextToggle] = useState("description");

  const handleToggle = (element) => {
    setTextToggle(element);
  };

  return (
    <div className="split flex-left">
      <header>
        <span>
          <Link to="/">Home</Link>
          <Link to={`/shop/${category}`}>{category}</Link>
        </span>
        <h2>{product.name}</h2>
        <p>{formatCurrency(product.price)}</p>
      </header>
    

      <div className="prod-btn">
        <div className="description-field">
          <CartButton id={product.id} name={product.name}  price={product.price} photo={product.photos[0]} />
        </div>

        <div className="more-prod">
          <div className="description-field toggle"></div>
        </div>
      </div>

      <div className="more-prod">
        <div className="toggle">
          <button
            onClick={() => handleToggle("description")}
            className={isTextToggled === "description" ? "selected" : ""}
          >
            Description
          </button>
          <button
            onClick={() => handleToggle("formula")}
            className={isTextToggled === "formula" ? "selected" : ""}
          >
            Formula
          </button>

          <button
            onClick={() => handleToggle("howto")}
            className={isTextToggled === "howto" ? "selected" : ""}
          >
            How To
          </button>
        </div>

        <div className="info-toggle">
          {isTextToggled === "description" && <p>{product.description}</p>}

          {isTextToggled === "howto" && <p>{product.howto}</p>}

          {isTextToggled === "formula" && <p>{product.ingredients}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
