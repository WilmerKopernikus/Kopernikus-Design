// script.js
window.addEventListener("load", function() {
    // Hide the loader
    const loader = document.getElementById("loader");
    loader.style.display = "none";


    // Ensure the welcome video starts playing first if it's not autoplaying
    const video = document.getElementById("welcome-video");
    if (video.paused) {
        video.play();
    }
});