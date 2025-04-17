'use client';

import { useState, memo } from 'react';
import styles from './YouTubePlayer.module.css';

/**
 * Privacy-focused YouTube embed component
 * Uses youtube-nocookie.com domain for privacy
 */
const YouTubePlayer = ({ videoId, title, thumbnailQuality = 'hqdefault' }) => {
  const [consent, setConsent] = useState(false);

  // Extract video ID if a full URL was provided
  const extractedVideoId = videoId.includes('youtube.com') || videoId.includes('youtu.be')
    ? videoId.split(/[\/=]/g).pop()
    : videoId;
  
  // Thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${extractedVideoId}/${thumbnailQuality}.jpg`;
  
  // Privacy-enhanced embed URL
  const embedUrl = `https://www.youtube-nocookie.com/embed/${extractedVideoId}?rel=0&modestbranding=1`;

  const handleConsent = () => {
    setConsent(true);
  };

  return (
    <div className={styles.youtubeContainer}>
      {!consent ? (
        <div className={styles.consentOverlay}>
          <div className={styles.thumbnailContainer}>
            <img 
              src={thumbnailUrl}
              alt={title || "YouTube video thumbnail"}
              className={styles.thumbnail}
              loading="lazy"
            />
            <div className={styles.playButton} aria-hidden="true">
              <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                <path className={styles.playButtonBg} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                <path d="M 45,24 27,14 27,34" fill="#fff"></path>
              </svg>
            </div>
            <div className={styles.consentMessage}>
              <h3>Cookie Notice</h3>
              <p>Loading this video will set cookies from YouTube.</p>
              <button 
                onClick={handleConsent}
                className={styles.consentButton}
                aria-label="Accept cookies and play video"
              >
                Accept cookies & play
              </button>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className={styles.youtubeIframe}
          src={embedUrl}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(YouTubePlayer); 