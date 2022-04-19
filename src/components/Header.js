import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.svg";
import yogaIcon from "../assets/iconYoga.svg";
import swimIcon from "../assets/iconSwim.svg";
import bicycleIcon from "../assets/iconBicycle.svg";
import weightIcon from "../assets/iconWeight.svg";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar_horizontal">
        <img src={logo} alt="SportSee" className="logo" />
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>

      <nav className="navbar_vertical">
        <ul>
          <li>
            <img src={yogaIcon} alt="Yoga icon" className="NavBar_icons" />
          </li>
          <li>
            <img src={swimIcon} alt="Swimming icon" className="NavBar_icons" />
          </li>
          <li>
            <img
              src={bicycleIcon}
              alt="Bicycle icon"
              className="NavBar_icons"
            />
          </li>
          <li>
            <img src={weightIcon} alt="Weight icon" className="NavBar_icons" />
          </li>
        </ul>
        <p>Copyright, SportSee 2020</p>
      </nav>
    </div>
  );
}
export default Header;
