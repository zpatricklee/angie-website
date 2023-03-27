import React, { useState } from 'react';

import classes from "./HamburgerMenu.module.css";

function HamburgerMenu({ isOpen, toggleMenu }) {
const hamburgerMenuClassName = `${classes['hamburger-menu']} ${isOpen ? classes.open : ''}`;
const hamburgerMenuIconBarClassName = `${classes['hamburger-menu-icon-bar']}`;
const menuClassName = `${classes.menu} ${isOpen ? classes.open : ''}`;

  return (
    <div>
      <button className={hamburgerMenuClassName} onClick={toggleMenu}>
        <span className={hamburgerMenuIconBarClassName}>______</span>
        <span className={hamburgerMenuIconBarClassName}>______</span>
        <span className={hamburgerMenuIconBarClassName}>______</span>
      </button>
      <ul className={menuClassName}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/headshots">Headshots</a>
        </li>
        <li>
          <a href="/reels">Actor Reels</a>
        </li>
        <li>
          <a href="/productionBTS">Production Stills<br/>& BTS Photos</a>
        </li>
        <li>
          <a href="/modeling">Modeling</a>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;