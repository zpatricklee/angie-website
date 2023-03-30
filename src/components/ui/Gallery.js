import React, {useState} from 'react';
import classes from './Gallery.module.css';
import Modal from './Modal';

const Gallery = ({props: photos}) => {
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const handlePhotoClick = (photoSrc) => {
    setCurrentPhoto(photoSrc);
  };

  return (
    <>
      <div className={classes.gallery}>
        {photos.map((photo, index) => (
          <div
            className={classes.pics}
            key={index}
            onClick={() => handlePhotoClick(photo.imgSrc)}
          >
            <img src={photo.imgSrc} alt={photo.id} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
      {currentPhoto && (
        <Modal photoSrc={currentPhoto} onClose={() => setCurrentPhoto(null)} />
      )}
    </>
  );
}

export default Gallery;