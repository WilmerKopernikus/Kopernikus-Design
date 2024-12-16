document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.mobile-video');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };
  
    function onIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          // Start the buffering process for this video
          video.load();  
          // Once the browser signals it can play the video...
          video.addEventListener('canplaythrough', () => {
            video.play().catch(err => console.warn("Autoplay failed:", err));
          }, { once: true });
  
          // Stop observing once done
          observer.unobserve(video);
        }
      });
    }
  
    const observer = new IntersectionObserver(onIntersection, observerOptions);
  
    videos.forEach(video => {
      // Postpone loading until in view
      video.setAttribute('preload', 'none');
      // Important: keep them muted, have autoplay & playsinline attributes in HTML
      observer.observe(video);
    });
  });
  