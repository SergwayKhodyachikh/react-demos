import React from "react";
import logoGreen1X from "../../img/logo-green-1x.png";
import logoGreen2X from "../../img/logo-green-2x.png";
import logoGreen1xSmall from "../../img/logo-green-small-1x.png";
import logoGreen2xSmall from "../../img/logo-green-small-2x.png";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <picture className="footer__logo">
        <source
          srcSet={`${logoGreen1xSmall} 1x, ${logoGreen2xSmall} 2x`}
          media="(max-width: 37.5em)"
        />
        <img
          srcSet={`${logoGreen1X} 1x, ${logoGreen2X} 2x`}
          alt="Full logo"
          src={logoGreen2X}
        />
      </picture>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#!" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="#!" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="#!" className="footer__link">
                Carrers
              </a>
            </li>
            <li className="footer__item">
              <a href="#!" className="footer__link">
                Privacy policy
              </a>
            </li>
            <li className="footer__item">
              <a href="#!" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className="footer__copyright">
          Built by{" "}
          <a href="#!" className="footer__link">
            Jonas Schmedtmann
          </a>{" "}
          for his online course{" "}
          <a href="#!" className="footer__link">
            Advanced CSS and Sass
          </a>
          . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
          this webpage for both personal and commercial use, but NOT to claim it
          as your own design. A credit to the original author, Jonas
          Schmedtmann, is of course highly appreciated!
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
