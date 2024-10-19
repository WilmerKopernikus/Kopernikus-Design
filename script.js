//para hacer scrolling y cambiar el color del fondo
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