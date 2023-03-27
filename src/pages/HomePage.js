import classes from './HomePage.module.css';
import NavBar from '../components/layout/NavBar';
// import bgImage from '../resources/AngieJhoLee_Headshot1.jpg';

function HomePage(props) {
  const homePageClassName = `${classes['home-page']}`;
  const contactContainerClassName = `${classes['contact-container']}`;
  const contactClassName = `${classes['contact']}`;
  const bgColor = 'rgba(143, 170, 179, 0)';

  return (
    <>
      <NavBar bgColor={bgColor} />
      <div className={homePageClassName}>
        <div className={contactContainerClassName}>
          <div className={contactClassName}>
            <b>Manager</b><br/>
            ADS Management |
            Mal Haneen <br/>
            anthologyartistscollective@gmail.com
          </div>
          <div className={contactClassName}>
            <b>Theatrical Rep</b><br/>
            Starburst Talent Agency |
            Cristina Ribeiro <br/>
            cristina@starbursttalent.com
          </div>
          <div className={contactClassName}>
            <b>Commercial Rep</b><br/>
            Activity |
            Tim O'Shea <br/>
            tim@activityla.com
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;