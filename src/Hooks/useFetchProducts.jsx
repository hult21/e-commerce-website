import { useState, useEffect } from 'react';

/**
 * @typedef {Object} Product
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {string} description
 * @property {string} ingredients
 * @property {string} howto
 * @property {string[]} photos
 * @property {string} category
 * @property {boolean} bestSeller
 * @property {boolean} newArrival
 * @property {boolean} essentials
 */

/**
 * Custom hook to fetch products
 * @returns {{ products: Product[], loading: boolean, error: string | null }}
 */
const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []); // **Ensuring the data is an array**
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [API_URL]);

  return { products, loading, error };
};

export default useFetchProducts;


