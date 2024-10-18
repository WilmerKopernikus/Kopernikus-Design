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

//para hacer scrilling y cambiar el color del fondo
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const triggerPoint = 5000; // Punto en el que comienza la transición
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollY > triggerPoint) {
      const scrollPercent = (scrollY - triggerPoint) / (documentHeight - triggerPoint);

      // Cambiar color de fondo desde negro a blanco a partir de 2000px
      const newColor = `rgb(0, 0, ${scrollPercent * 150})`;
      document.body.style.backgroundColor = newColor;
    }
  });



function toggleContent(element) {
    const content = element.querySelector('p'); // Selecciona solo el <p> dentro del <div> clicado
    content.classList.toggle('show');
}

// Run the function when the document is ready
document.addEventListener('DOMContentLoaded', checkBrowserAndReplaceVideo);

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const menuOverlay = document.getElementById("menuOverlay");

    hamburger.addEventListener("click", function() {
        this.classList.toggle("open");
        menuOverlay.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll('.image-animate');

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    images.forEach(image => {
        observer.observe(image);
    });
});






document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll('.text-animate, .gif-animate');

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            if (this.classList.contains('clicked')) {
                this.classList.remove('clicked');
            } else {
                this.classList.add('clicked');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            if (this.classList.contains('clicked')) {
                this.classList.remove('clicked');
            } else {
                this.classList.add('clicked');
            }
        });
    });
});