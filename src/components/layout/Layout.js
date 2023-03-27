import React, { useState } from 'react';
import classes from './Layout.module.css';
import NavBar from './NavBar';

function Layout(props) {
  return (
    <div className={classes.container}>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;