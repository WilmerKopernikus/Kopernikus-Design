// script.js
window.addEventListener("load", function() {
    // Hide the loader
    const loader = document.getElementById("loader");
    loader.style.display = "none";


});


document.addEventListener("DOMContentLoaded", function() {
    // Añadir la clase 'no-scroll' para deshabilitar el scroll
    document.body.classList.add("no-scroll");

    window.addEventListener("load", function() {
        // Ocultar el loader y habilitar el scroll una vez que la página esté cargada
        const loader = document.getElementById("loader");
        loader.style.display = "none";
        
        // Remover la clase 'no-scroll' para habilitar el scroll nuevamente
        document.body.classList.remove("no-scroll");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const lazyVideos = document.querySelectorAll('video[data-src]');

    function lazyLoadVideo(video) {
        const source = video.querySelector('source');
        if (source && video.dataset.src) {
            source.src = video.dataset.src;
            video.load(); // Comienza la carga del video
            video.play(); // Reproduce el video si es necesario
        }
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoadVideo(entry.target);
                observer.unobserve(entry.target); // Deja de observar el video una vez cargado
            }
        });
    });

    lazyVideos.forEach(video => {
        observer.observe(video);
    });
});

