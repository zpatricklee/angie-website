import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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
          <Link to="/">ANGIE JHO LEE</Link>
        </div>
        <ul className={navBarClassName}>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/headshots">Headshots</Link>
          </li>
          <li>
            <Link to="/reels">Actor Reels</Link>
          </li>
          <li>
            <Link to="/productionBTS">Production & BTS Photos</Link>
          </li>
          <li>
            <Link to="/modeling">Modeling</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
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
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/headshots">Headshots</Link>
          </li>
          <li>
            <Link to="/reels">Actor Reels</Link>
          </li>
          <li>
            <Link to="/productionBTS">
              Production Stills
              <br />& BTS Photos
            </Link>
          </li>
          <li>
            <Link to="/modeling">Modeling</Link>
          </li>
          <li>
            <Link to="/connect">Connect</Link>
          </li>
          <li>
            <Link to="/bio">Bio</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
