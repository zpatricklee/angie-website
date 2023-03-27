import React from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaImdb
} from 'react-icons/fa';
import imdbIcon from '../resources/imdb-icon.png';
import { SocialIcon } from 'react-social-icons';
import styled, { keyframes } from 'styled-components';

import classes from './ConnectPage.module.css';

import NavBar from '../components/layout/NavBar';
import HamburgerMenu from '../components/layout/HamburgerMenu';

const scale = keyframes`
  from {
    transform: scale(2);
  }
  to {
    transform: scale(2.5);
  }
`;

const Icon = styled(SocialIcon)`
  transform: scale(2);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    animation: ${scale} 0.2s ease-in-out forwards;
  }
`;

const imdbClassName = `${classes.icon} ${classes.imdb}`;

const ConnectPage = () => {
  const connectPageClassName = `${classes['connect-page']}`;
  const bgColor = 'rgba(0, 0, 0, 0)';

  return (
    <>
      <NavBar bgColor={bgColor} />
      <div className={connectPageClassName}>
        <div className={classes.container}>
          <div className={classes.social}>
            <Icon
              className={classes.icon}
              url="https://www.instagram.com/angjholee"
              network="instagram"
            >
              <FaInstagram />
            </Icon>
          </div>
          <div className={classes.social}>
            <Icon
              className={classes.icon}
              url="https://www.facebook.com/angjholee"
              network="facebook"
            >
              <FaFacebook />
            </Icon>
          </div>
          <div className={classes.social}>
            <Icon
              className={imdbClassName}
              url="https://imdb.me/angiejholee"
              network="imdb"
            >
              <FaImdb />
            </Icon>
          </div>
          <div className={classes.social}>
            <Icon
              className={classes.icon}
              url="https://www.youtube.com/@angiejholee3705"
              network="youtube"
            >
              <FaYoutube />
            </Icon>
          </div>
          <div className={classes.social}>
            <Icon
              className={classes.icon}
              url="https://www.tiktok.com/@angjholee"
              network="tiktok"
            >
              <FaTiktok />
            </Icon>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectPage;