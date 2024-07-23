import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import ProductInput from "./ProductInput";
import useFetchProducts from "../Hooks/useFetchProducts";

const getFilteredItems = (query, items) => {
  if (!query) {
    return [];
  }
  return items.filter((i) =>
    i.name.toLowerCase().includes(query.toLowerCase())
  );
};

const SearchInput = ({ openSearch, setOpenSearch, onClick }) => {
  const { products, loading, error } = useFetchProducts(); 
  const [query, setQuery] = useState("");

  const items = Array.isArray(products) ? products : [];
  const filteredItems = getFilteredItems(query, items);

  return (
    <div className={`offcanvas-container ${openSearch ? "open" : ""}`}>
      <div className="offcanvas-header">
        <div className="search-ico">
          <CiSearch />
        </div>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="close-button" onClick={() => setOpenSearch(false)}>
          <IoCloseOutline />
        </button>
      </div>

      <div className="offcanvas-body">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>} 
        <ul>
          {query &&
            (filteredItems.length > 0 ? (
              filteredItems.map((value) => (
                <ProductInput key={value.id} value={value} />
              ))
            ) : (
              <li>No products match the search for "{query}"</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchInput;
