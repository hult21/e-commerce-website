import React from "react";
import Landing from "../Components/Landing";
import Banner from "../Components/Banner";
import { useProductNavigation } from "../Hooks/useProductNavigation";
import ProductList from "../Components/ProductList";
import useFetchProducts from "../Hooks/useFetchProducts";
import CategoryDisplay from "../Components/CategoryDisplay";
import Footer from "../Components/Footer";

const Home = () => {
  const { products, loading, error } = useFetchProducts();
  const onProductClick = useProductNavigation();

  const essentials = products.filter(product => product.essentials);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Landing />
      <ProductList onClick={onProductClick} filteredProducts={essentials} />
      <div id="target-section">
        <Banner />
        <CategoryDisplay />
        <Footer />
      </div>
    </>
  );
};

export default Home;


///SHOP/ESSENTIALS => CATEGORY ROUTE
// ESSENTAILS IS NOT A CATEGORY KEY = A BLOOEAN 
//FILTEREDPRODUCTS