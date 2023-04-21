import React from "react";
import "./Navbar.css";
import { LogoIcon } from "../../../assets/icons";
import Languages from "../../molecules/Language/Language";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-page">
          <img src={LogoIcon} alt="" className="navbar-img" />
          <h3 className="navbar-name">
            Namangan viloyati OITSga qarshi kurashish markazi
          </h3>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Bosh sahifa
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Markaz haqida
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Yangiliklar
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Loyihalar
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              OIV/OITS
            </a>
          </li>
        </ul>
        {/* <Languages /> */}
      </div>
    </div>
  );
}
export default Navbar;
