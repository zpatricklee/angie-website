
import React from 'react';
import NavBar from '../components/layout/NavBar';
import classes from './BioPage.module.css';

function BioPage() {
  const bgColor = 'rgba(143, 170, 179, 0)';
  const bioPageClassName = `${classes['bio-page']}`;

  return (
    <>
      <NavBar bgColor={bgColor} />
      <div className={bioPageClassName}>
        <p className={classes.bio}>
          Angie Jho Lee is a Korean-American actor based in Los Angeles.
          Specializing in strong, female leads, Angie is ready to kick ass and
          take names with a pistol in one hand and an oat milk latte in the other.
          She has been in several national commercials including SuperCuts,
          Diablo x Google Play, TD Bank, and Armor All. A multi-faceted voice
          actor, she is currently working on an animated pilot and voicing one
          of the lead characters for a major game with a global following.
          <br />
          <br />
          Imagine if Arden Cho and Karen Fukuhara had a lovechild. Cut to:
          Angie. Angie was born in Long Beach, CA and raised in the South Bay.
          She began pursuing a career in acting after graduating from UCLA. As a
          sociology major, Angie has always had a passion for delving into the
          depths of the human condition. Married with her determination,
          tenacity, and edgy charm, Angie is a collaborator whose North Star is
          telling authentic, honest stories. In her spare time she enjoys
          seeking out new cafes or bookstores, singing, hitting the gym, and
          watching shows with her husband and 2 cats.
          <br />
          <br />
          Fully vaccinated and boosted for COVID. Local LA hire.
        </p>
      </div>
    </>
  );
}

export default BioPage;