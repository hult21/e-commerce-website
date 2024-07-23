import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";


const FooterInfo = () => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(true);
  
    const handleChange = (event) => {
      const value = event.target.value;
      setEmail(value);
      validateEmail(value);
    };
  
    const validateEmail = (email) => {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      setIsValid(re.test(email));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (isValid) {
        alert("THANK YOU FOR YOUR REGISTRATION");
      } else {
        alert("PLEASE ENTER A VALID EMAIL ADDRESS");
      }
    };
  
    let address = "help@iliabeauty.com"
  
  return (
    <div className="footer-info">
      <section className="footer-flex">
        <div className="newletter">
          <h4>MORE ILIA BEAUTY NEWS</h4>
          <form>
            <label htmlFor="email">
              JOIN OUR NEWLETTER FOR EXCLUSIVE OFFERS!
            </label>
            <div className="form-details">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email address"
                onChange={handleChange}
                className={`form-input ${isValid ? "" : "invalid"}`}
              />
              {!isValid && (
                <div className="invalid-feedback">
                  Please enter a valid email address
                </div>
              )}
              <button type="submit">
                <RiArrowRightLine />
              </button>
            </div>
          </form>
        </div>

        <div className="order footer">
          <p>ORDER</p>
          <div className="footer-links">
            <Link>Follow My Order</Link>
            <Link>Manage My Return</Link>
            <Link>My Account</Link>
          </div>
        </div>

        <div className="contacts footer">
          <p>HELP</p>
          <div className="footer-links">
            <Link>FAQ</Link>
            <Link>Care Guide</Link>
          </div>
        </div>

        <div className="about footer">
          <p>CONTACT</p>
          <div className="footer-links">
            <a href={`mailto:${address}`} className="email-link">
              {address}
            </a>
            <Link to="https://www.instagram.com/iliabeauty/?hl=en">Instagram</Link>
              <Link to="https://www.linkedin.com/company/ilia-beauty/">LinkedIn</Link>
              <Link to="https://www.pinterest.com/iliabeauty/">Pinterest</Link>
          </div>
        </div>
      </section>

      <section className="trademark">
        <div>
          <h1>ILIA</h1>
          <p>BEAUTY</p>
        </div>
      </section>
    </div>
  );
};

export default FooterInfo;
