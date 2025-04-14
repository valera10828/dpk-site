import React from 'react';
import './Header.scss';
import Logo from "./Components/Logo";
import Navigation from "./Components/Navigation";
import Hamburger from "./Components/Hamburger";
import useHeaderLogic from "./useHeaderLogic";
const Header = () => {
  const { isMenuOpen, isHeaderVisible, menuRef, toggleMenu } = useHeaderLogic();

  return (
    <header className={`header ${isHeaderVisible ? '' : 'header--hidden'}`}>
      <div className="header__container">
        <Logo />
        <div ref={menuRef}>
          <Navigation isOpen={isMenuOpen} />
          <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
