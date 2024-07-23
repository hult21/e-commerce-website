import React, { useCallback, useEffect, useMemo, useState } from "react";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import useFetchProducts from "../Hooks/useFetchProducts";
import { navLinks } from "../data.js";
import { formatCategoryName } from "../UI/formatCategory.js";
import ProductCard from "../Components/ProductCard.jsx";
import { useProductNavigation } from "../Hooks/useProductNavigation.jsx";
import { shuffleMethod } from "../UI/shuffleMethod.js";
import FooterInfo from "../Components/FooterInfo.jsx";

const Shop = () => {
  const { category } = useParams();
  const onProductClick = useProductNavigation();
  const { products, loading, error } = useFetchProducts();

  const [sortBy, setSortBy] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setSortBy("");
  }, [category]);

  useEffect(() => {
    if (products.length > 0) {
      setItems(shuffleMethod(products));
    }
  }, [products]);

  const handleFilterChanger = useCallback((filter) => {
    setSortBy(filter);
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (category) {
     if (category === "new-arrivals") {
        filtered = filtered.filter((product) => product.newArrival);
      } else {
        filtered = filtered.filter((product) => product.category === category);
      }
    }

    switch (sortBy) {
      case "New In":
        filtered = filtered.filter((product) => product.newArrival);
        break;
      case "Price Low to High":
        filtered = filtered.slice().sort((a, b) => a.price - b.price);
        break;
      case "Price High to Low":
        filtered = filtered.slice().sort((a, b) => b.price - a.price);
        break;
      case "Popularity":
        filtered = filtered.filter((product) => product.bestSeller);
        break;
      default:
        break;
    }
    return filtered;
  }, [products, sortBy, category]);

  const categoryLinks = navLinks.slice(1, 7);
  const totalProducts = filteredProducts.length;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="shop__section" id="target-section">
      <Header
        onFilterChange={handleFilterChanger}
        selectedFilter={sortBy}
        links={categoryLinks}
        category={formatCategoryName(category)}
        totalProducts={totalProducts}
      />

      <section className="products__section">
        {filteredProducts.map((product, index) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              onClick={() => onProductClick(product)}
            />
          </div>
        ))}
      </section>

      <FooterInfo />
    </div>
  );
};
export default Shop;
