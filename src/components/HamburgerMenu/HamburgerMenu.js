//** HAMBURGER MENU Component

import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const HamburgerIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18M3 6h18M3 18h18"></path>
    </svg>
  );

  return (
    <div>
      <h2>Hamburger Menu</h2>

      <button className="menu-icon" onClick={toggleMenu}>
        <HamburgerIcon />
      </button>

      {isOpen && (
        <button className="close-button" onClick={closeMenu}>
          Close
        </button>
      )}

      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
