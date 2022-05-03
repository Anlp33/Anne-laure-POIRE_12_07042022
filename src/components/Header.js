import React from "react";
import "../styles/header.css";
import logo from "../assets/logo.svg";



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
    </div>
  );
}
export default Header;
