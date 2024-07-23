import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ProductCard from "./ProductCard";


const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

return windowWidth;
};

const ProductList = ({ onClick, filteredProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const windowWidth = useWindowWidth();


  const productsArray = Array.isArray(filteredProducts) ? filteredProducts : [];
  const totalPages = Math.ceil(productsArray.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getCurrentPageProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return productsArray.slice(startIndex, endIndex);
  };

  return (
    <div className="product__container container">
      <section className="padding-wrapper">
        <header>
          <h4>hand-picked essentials for you</h4>
          <Link to="/shop/collection">Discover</Link>
        </header>

        <div className="product-section">
          {windowWidth <= 768
            ? filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => onClick(product)}
                />
              ))
            : getCurrentPageProducts().map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => onClick(product)}
                />
              ))}
        </div>

        {windowWidth > 768 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        )}
      </section>
    </div>
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePreviousPage,
}) => {
  return (
    <div className="pagination__container">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        <MdKeyboardArrowLeft />
      </button>

      <span>
        {currentPage} / {totalPages}
      </span>

      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default ProductList;
