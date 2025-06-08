import React from "react";
import { Link } from "react-router-dom";
import Nav from "@components/navigation/Nav";
import logo from "@assets/logos/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Little Lemon logo" className="h-15 w-auto" />
        </Link>

        {/* Navigation */}
        <Nav />
      </div>
    </header>
  );
};

export default Header;
