import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({ title, href, dropdownItems }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    if (dropdownItems) {
      e.preventDefault();
      setDropdownOpen((prev) => !prev);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const isExternalLink = (url) => {
    return url && (url.startsWith('http') || url.startsWith('https'));
  };

  return (
    <li className="nav__item" ref={dropdownRef}>
      <NavLink
        to={dropdownItems ? "#" : href}
        className="nav__link"
        onClick={toggleDropdown}
        aria-disabled={!!dropdownItems ? "true" : "false"}
      >
        {title}
        {dropdownItems && (
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className={isDropdownOpen ? 'rotate' : ''}>
              <path d="M7 4 L5.5 6 L4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        )}
      </NavLink>
      {dropdownItems && (
        <ul className={`nav__item--dropdown ${isDropdownOpen ? 'active' : ''}`}>
          {dropdownItems.map((item, index) => (
            <li key={index}>
              {isExternalLink(item.href) ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  to={item.href}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
