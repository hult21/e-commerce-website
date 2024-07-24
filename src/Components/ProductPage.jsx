import React, { useEffect, useState } from "react";
import useFetchProduct from "../Hooks/useFetchProduct";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import ThumbnailGallery from "./ThumbnailGallery";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useFetchProduct(id);
  const [thumbnail, setThumbnail] = useState(null);

 

  useEffect(() => {
    if (product?.photos?.length > 0) {
      setThumbnail(product.photos[0]);
    }
  }, [product]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (

    <>
    <div className="view__section" id="target-section">
    
        <ThumbnailGallery photos={product.photos} thumbnail={thumbnail} setThumbnail={setThumbnail} />
        <ProductDetails 
        
          product={product} 
        />
  
    </div>
    <Footer />
    
    </>
   
  );
};

export default ProductPage;
