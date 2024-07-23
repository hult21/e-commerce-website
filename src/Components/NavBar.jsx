import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
//CSS
import "../Styles/navbar.css";
import { IoIosMenu } from "react-icons/io";
import { BsFillHandbagFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { GoPlus } from "react-icons/go";

//DATA
import { navLinks } from "../data";

//SHOPPING CART CONTEXT
import { useShoppingCart } from "../Context/ShoppingCartContext";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  let address = "help@iliabeauty.com";

  const toggleShopMenu = () => {
    setIsShopOpen(!isShopOpen);
  };

  const toggleContactsMenu = () => {
    setIsContactsOpen(!isContactsOpen);
  };

  const showContacts = () => {
    setIsMobileMenuOpen(true)
    setIsContactsOpen(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("target-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        setScrolled(window.scrollY >= sectionTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openSearch, setOpenSearch] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();
  const navbar = navLinks.slice(0, 1);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenSearch(true);
  }

  const handleCart = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    openCart()
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <IoIosMenu />
        </div>

        <ul className="nav__links">
          {navbar.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} activeClassName="active">
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="logo-container">
          <NavLink to="/" className="logo_link">
            <h2>
              ILIA <br />
              <span>BEAUTY</span>
            </h2>
          </NavLink>
        </div>

        <ul className="nav__buttons">
          <button className="btn" onClick={showContacts}>Contacts</button>

          <button
            className="open-search btn"
            onClick={() => setOpenSearch(true)}
          >
            Search
          </button>

          <button className="open-cart" onClick={openCart}>
            Cart ({cartQuantity})
          </button>
        </ul>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <header>
          <button className="close-menu" onClick={toggleMobileMenu}>
            ✕
          </button>
          <div className="logo-mobile">
            <a href="//e-commerce-website">
              ILIA <br />
              <span>BEAUTY</span>
            </a>
          </div>
          <button onClick={handleCart}>
            <BsFillHandbagFill /> ({cartQuantity})
          </button>
        </header>

        <button className="open-search btn" onClick={handleSearch}>
          Search
          <span>
            <GoSearch />
          </span>
        </button>
        <ul className="mobile__links">
          
          <h4 onClick={toggleShopMenu}>
            SHOP
            <span className={`${isShopOpen ? "rotate" : ''}`}>
              <GoPlus />
            </span>
          </h4>
          {isShopOpen && (
            <div className="shop-links links">
              <Link to="/e-commerce-website/shop/collection">All</Link>
              <Link to="/e-commerce-website/shop/complexion">Complexion</Link>
              <Link to="/e-commerce-website/shop/skincare">Skincare</Link>
              <Link to="/e-commerce-website/shop/lips-cheeks">Lips & Cheeks</Link>
              <Link to="/e-commerce-website/shop/tools">Tools</Link>
              <Link to="/e-commerce-website/shop/new-arrivals">New In</Link>
            </div>
          )}
            
         

          <h4 onClick={toggleContactsMenu}>
            CONTACTS
            <span className={`${isContactsOpen ? "rotate" : ''}`}>
              <GoPlus />
            </span>
          </h4>
          {isContactsOpen && (
            <div className="contact-links links">
              <a href={`mailto:${address}`} className="email-link">
                {address}
              </a>
              <Link to="https://www.instagram.com/iliabeauty/?hl=en">Instagram</Link>
              <Link to="https://www.linkedin.com/company/ilia-beauty/">LinkedIn</Link>
              <Link to="https://www.pinterest.com/iliabeauty/">Pinterest</Link>
            </div>
          )}
        </ul>
      </div>
      <SearchInput openSearch={openSearch} setOpenSearch={setOpenSearch} />
    </>
  );
};

export default NavBar;
