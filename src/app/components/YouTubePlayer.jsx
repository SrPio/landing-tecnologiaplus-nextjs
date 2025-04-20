import React, { useState, useEffect } from 'react';
import styles from './YouTubePlayer.module.css';

const YouTubePlayer = ({ videoId }) => {
  const [consent, setConsent] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const [useBackupThumbnail, setUseBackupThumbnail] = useState(false);

  // Highest quality thumbnail URL
  const thumbnailUrl = !useBackupThumbnail 
    ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  // Privacy-enhanced embed URL with minimal parameters to block tracking
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=0&color=white&disablekb=1&hl=es`;

  // Handle high-quality thumbnail load error
  const handleThumbnailError = () => {
    if (!useBackupThumbnail) {
      setUseBackupThumbnail(true);
    }
  };

  // Load thumbnail after component mounts
  useEffect(() => {
    const img = new Image();
    img.onload = () => setThumbnailLoaded(true);
    img.onerror = handleThumbnailError;
    img.src = thumbnailUrl;
  }, [thumbnailUrl]);

  const handleLoadAndPlay = () => {
    setConsent(true);
    setLoaded(true);
  };

  return (
    <div className={styles.youtubeContainer}>
      {!consent ? (
        // Thumbnail with consent overlay
        <div 
          className={styles.thumbnailContainer}
          onClick={handleLoadAndPlay}
        >
          {thumbnailLoaded && (
            <img 
              src={thumbnailUrl}
              alt="Vista previa del video"
              className={styles.youtubeThumbnail}
              width="640"
              height="360"
              loading="lazy"
            />
          )}
          <div className={styles.playButton}>
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </div>
          <div className={styles.consentOverlay}>
            <p>Reproducir video</p>
          </div>
        </div>
      ) : (
        // YouTube iframe (only loaded after consent)
        <iframe
          className={styles.youtubeIframe}
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          width="640"
          height="360"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubePlayer; 