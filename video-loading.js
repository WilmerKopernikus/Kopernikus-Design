document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.mobile-video');
  
    videos.forEach((video) => {
      // Make sure the video is paused initially (avoid concurrency loading)
      video.pause();
  
      // When the video can play through, start playback
      video.addEventListener('canplaythrough', () => {
        video.play().catch(err => {
          console.warn("Autoplay failed:", err);
        });
      });
    });
  });
  
  