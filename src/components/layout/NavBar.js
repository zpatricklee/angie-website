import React, { useState } from 'react';
import classes from './NavBar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar({ bgColor }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const navBarClassName = `${classes['nav-bar']}`;
  const menuBtnClassName = `${classes['menu-button']}`;
  const openBtnClassName = `${classes['open-button']} ${isOpen ? classes.hide : classes.show}`;
  const closeBtnClassName = `${classes['close-button']} ${isOpen ? classes.show : classes.hide}`;

  const hamburgerMenuClassName = `${classes['hamburger-menu']} ${
    isOpen ? classes.open : ''
  }`;
  const hamburgerMenuIconBarClassName = `${classes['hamburger-menu-icon-bar']}`;
  const menuClassName = `${classes.menu} ${isOpen ? classes.open : ''}`;


  return (
    <>
      <div style={{ backgroundColor: bgColor }} className={classes.container}>
        <div className={classes.title}>
          <a href="/">ANGIE JHO LEE</a>
        </div>
        <ul className={navBarClassName}>
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
            <a href="/productionBTS">Production & BTS Photos</a>
          </li>
          <li>
            <a href="/modeling">Modeling</a>
          </li>
          <li>
            <a href="/connect">Connect</a>
          </li>
          <li>
            <a href="/bio">Bio</a>
          </li>
        </ul>
      </div>
      <div className={hamburgerMenuClassName}>
        <div className={menuBtnClassName}>
          <FaBars
            className={openBtnClassName}
            onClick={toggleMenu}
            size="32px"
          />
          <FaTimes
            className={closeBtnClassName}
            onClick={toggleMenu}
            size="32px"
          />
        </div>

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
            <a href="/productionBTS">
              Production Stills
              <br />& BTS Photos
            </a>
          </li>
          <li>
            <a href="/modeling">Modeling</a>
          </li>
          <li>
            <a href="/connect">Connect</a>
          </li>
          <li>
            <a href="/bio">Bio</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
