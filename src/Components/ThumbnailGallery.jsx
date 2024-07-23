import React, { useEffect, useRef } from 'react';

const ThumbnailGallery = ({ photos, thumbnail, setThumbnail }) => {
  const thumbnailRefs = useRef([]);
  const productImgsRef = useRef();


  useEffect(() => {
    if (thumbnail) {
      const index = photos.indexOf(thumbnail);
      const thumbnailElement = thumbnailRefs.current[index];
      if (thumbnailElement) {
        thumbnailElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [thumbnail, photos]);

  return (
    <section className='gallery__section'>
      <div className="flex-prod-img">
        <div className="thumbnail-field">
          {photos.map((photo, index) => (
            <img
              ref={el => (thumbnailRefs.current[index] = el)}
              key={index}
              src={photo}
              alt={`View ${index + 1}`}
              onClick={() => setThumbnail(photo)}
              
            />
          ))}
        </div>
      <div className="product-imgs">
        {photos.map((photo, index) => (
          <img
            className={thumbnail === photo ? "selected" : ""}
            key={index}
            src={photo}
            alt={`View ${index + 1}`}
            onClick={() => setThumbnail(photo)}
            ref={productImgsRef}
          />
        ))}
      </div>
      </div>
    </section>
  );
};

export default ThumbnailGallery;
