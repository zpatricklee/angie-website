import React from 'react';
import NavBar from '../components/layout/NavBar';
import Card from '../components/ui/Card';
import classes from './ActorReels.module.css';
import VideoGallery from '../components/ui/VideoGallery';

function ActorReelsPage() {

  return (
    <>
      <NavBar />
      <div className="container">
        <Card>
          <div className="videos">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/807414030?h=41da508fd1"
              height="360"
              width="100%"
              frameborder="0"
              allowfullscreen="true"
              // text-align="center"
            ></iframe>
          </div>
        </Card>
        <Card>
          <div className="videos">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/807427450?h=11a382b9fa"
              height="360"
              width="100%"
              frameborder="0"
              allowfullscreen="true"
              // text-align="center"
            ></iframe>
          </div>
        </Card>
      </div>
    </>
  );
}

export default ActorReelsPage;
