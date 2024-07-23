import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import FilterMenu from './FilterMenu';



const Header = ({ onFilterChange, selectedFilter, links, category, totalProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const displayFilter = (filter) => () => {
    onFilterChange(filter);
    toggleMenu();
  };
  


  return (
    <header className='header-shop'>
      <div className='category__display'>
        <h2>{category}</h2>
        <p>{totalProducts} Products</p>
      </div>

      <div className='header__filters'>
        <p>{totalProducts} Products</p>

        <div className='category__links'> 
          {links.map((link, index) => (
            <ul key={index}>
              <NavLink to={link.path} activeClassName="active">{link.name}</NavLink>
            </ul>
          ))}
        </div>

        <div className='filter__by'>
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls='filterMenu'
          >
            FILTERS
          </button>

          {isOpen && (
            <FilterMenu displayFilter={displayFilter} isOpen={isOpen} toggleMenu={setIsOpen} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

