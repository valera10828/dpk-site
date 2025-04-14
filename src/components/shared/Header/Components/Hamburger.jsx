import React from 'react'

const Hamburger = ({ isOpen, onClick }) => (
  <div className={`header__hamburger ${isOpen ? 'active' : ''}`} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default Hamburger;