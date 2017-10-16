import React from "react";
import { Link } from "react-router-dom";
import SubscribeForm from "../SubscribeForm";

import "./footer.css";

const Footer = props => {
  return (
    <footer className="footer">
      <section className="container">
        <div className="footer-wrapper">
          <section>
            <h3>Subscribe</h3>
            <SubscribeForm />
          </section>
          <section>
            <h3>Info</h3>
            <ul className="footer-lists">
              <li className="footer-list-item">
                <Link to="/peaks">Peaks</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/about">About</Link>
              </li>
              <li className="footer-list-item">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </section>
          <section>
            <h3>Contact</h3>
            <ul className="footer-lists">
              <li className="footer-list-item">
                <a href="mailto:jacob.h.felman@gmail.com">
                  <i
                    className="fa fa-envelope fa-md align-right"
                    aria-hidden="true"
                  />{" "}
                  | Email
                </a>
              </li>
              <li className="footer-list-item">
                <a href="https://www.linkedin.com/in/jacobhfeldman/">
                  <i className="fa fa-linkedin fa-md" aria-hidden="true" /> |
                  Linkedin
                </a>
              </li>
              <li className="footer-list-item">
                <a href="https://github.com/jakeFeldman">
                  <i className="fa fa-github fa-md" aria-hidden="true" /> |
                  Github
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
      <section className="copy-section">
        <p className="copy-paragraph">
          &#60;/&#62; with<span> &hearts; </span>By Jacob Feldman | &copy;
          Copyright 2017
        </p>
      </section>
    </footer>
  );
};

export default Footer;
