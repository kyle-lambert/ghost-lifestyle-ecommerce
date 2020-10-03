import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./Footer.scss";

import { ReactComponent as Logo } from "../../assets/icons/brand_logo.svg";

function Footer(props) {
  return (
    <footer className="Footer">
      <nav className="Footer-nav">
        <ul className="Footer-list">
          <li className="Footer-title">Shop</li>
          {shopRoutes.map((route) => (
            <li key={uuidv4()} className="Footer-item">
              <Link to={route.path} className="Footer-link">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="Footer-list">
          <li className="Footer-title">Information</li>
          {informationRoutes.map((route) => (
            <li key={uuidv4()} className="Footer-item">
              <Link to={route.path} className="Footer-link">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="Footer-list">
          <li className="Footer-title">Social</li>
          {socialLinks.map((link) => (
            <li key={uuidv4()} className="Footer-item">
              <a href={link.href} className="Footer-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="Footer-right">
          <Link to="/" className="Footer-logo">
            <Logo />
          </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

const shopRoutes = [
  {
    name: "Protein",
    path: "/",
  },
  {
    name: "Pre-Workout",
    path: "/",
  },
  {
    name: "Amino Acids",
    path: "/",
  },
  {
    name: "Fat Burner",
    path: "/",
  },
];

const informationRoutes = [
  {
    name: "Contact Us",
    path: "/",
  },
  {
    name: "Privary",
    path: "/",
  },
  {
    name: "Shipping & Returns",
    path: "/",
  },
  {
    name: "Payments",
    path: "/",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "Facebook",
    href: "#",
  },
  {
    name: "Twitter",
    href: "#",
  },
  {
    name: "Pinterest",
    href: "#",
  },
];
