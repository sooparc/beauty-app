import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.png"
import Navbar from "./Navbar";

const Header = ({ title }) => {
  return (
    <>
        <header className="home-header">
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="company_logo" width="100px;"/>
            </div>

            <div className="search-bar-wrapper">
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="Search products"
                        className="search-input"
                    />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>  
            </div>
        </header>
        <Navbar/>
    </>
  );
};

export default Header;