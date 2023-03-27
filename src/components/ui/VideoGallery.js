import React, { useState } from 'react';
import classes from './VideoGallery.module.css';
import Modal from './Modal';

const VideoGallery = ({ props: videos }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  
  const setVideoClick = (vidSrc) => {
    setCurrentVideo(vidSrc);
  };

  // console.log(videos);

  return (
    <>
      <div className={classes.gallery}>
        {videos.map((video, index) => (
          <div
            className={classes.pics}
            key={index}
            onClick={() => setVideoClick(video.vidSrc)}
          >
            <iframe
              width="640"
              height="360"
              src={video.imgSrc}
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>
      {currentVideo && (
        <Modal vidSrc={currentVideo} onClose={() => setCurrentVideo(null)} />
      )}
    </>
  );
};

export default VideoGallery;


