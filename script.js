function checkBrowserAndReplaceVideo() {
    var userAgent = navigator.userAgent.toLowerCase();
    var isWeChatBrowser = /micromessenger/.test(userAgent);

    if (isWeChatBrowser) {
        var videoElement = document.getElementById('background-video');
        var gifElement = document.getElementById('fallback-gif');

        if (videoElement && gifElement) {
            videoElement.style.display = 'none';  // Hide the video element
            gifElement.style.display = 'block';   // Show the GIF image instead
        }
    }
}

// Run the function when the document is ready
document.addEventListener('DOMContentLoaded', checkBrowserAndReplaceVideo);