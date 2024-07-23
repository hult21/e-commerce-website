import React from "react";
import FooterInfo from "./FooterInfo";

const Footer = () => {
 
  return (
    <div className="footer__container">

      <section className="quote-flex">
        <h4>ILIA Beauty embodies authenticity and embraces everything with confidence, from its innovative formulations to its sustainable practices.</h4>
        <p>Inspired by the natural beauty of everyday moments and clean aesthetics, ILIA Beauty continually redefines its own standards. Products created with the intention to care for and enhance the skin. Every item is meticulously crafted, beginning with thoughtful design in our Los Angeles studio and produced with care, prioritizing organic and ethically-sourced ingredients from around the globe.</p>
      </section>

     <FooterInfo />
    </div>
  );
};

export default Footer;