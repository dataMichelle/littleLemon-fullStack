import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/reservations" },
  { name: "Order Online", path: "/order-online" },
  { name: "Login", path: "/login" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="relative" aria-label="Main navigation">
      {/* Mobile hamburger */}
      <button
        onClick={toggleMenu}
        aria-label={open ? "Close menu" : "Open menu"}
        className="lg:hidden text-2xl p-2 text-primary-green"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu */}
      <ul
        className={`${
          open ? "block" : "hidden"
        } lg:flex absolute lg:static z-10 bg-white lg:bg-transparent p-4 lg:p-0 rounded-md lg:rounded-none shadow-md lg:shadow-none top-12 right-0 space-y-2 lg:space-y-0 lg:space-x-6 text-right lg:text-left`}
      >
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `button-text text-primary-green  transition-colors duration-200 px-2 py-1 ${
                  isActive ? "bg-secondary-cream" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
