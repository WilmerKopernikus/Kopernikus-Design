// script.js

// Función para ocultar el preloader y habilitar el scroll después de que los elementos críticos se carguen
window.addEventListener("load", function() {
    // Ocultar el preloader
    const loader = document.getElementById("loader");
    loader.style.display = "none";

    // Remover la clase 'no-scroll' para habilitar el scroll nuevamente
    document.body.classList.remove("no-scroll");
});

// Añadir la clase 'no-scroll' al cargar la página para deshabilitar el scroll mientras carga
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("no-scroll");

    // Carga inmediata de elementos críticos (por ejemplo, la cabecera, el menú, etc.)
    const criticalElements = document.querySelectorAll(".critical");
    criticalElements.forEach(element => {
        // Si tienes algún comportamiento especial para estos elementos, lo puedes añadir aquí
        // Por ejemplo, activar animaciones o mostrar imágenes principales
        element.classList.add('visible');
    });
});

// Función para lazy loading de videos o imágenes pesadas
document.addEventListener('DOMContentLoaded', function () {
    const lazyVideos = document.querySelectorAll('video[data-src]');

    function lazyLoadVideo(video) {
        const source = video.querySelector('source');
        if (source && video.dataset.src) {
            source.src = video.dataset.src; // Asignar la fuente real
            video.load(); // Comienza la carga del video
        }
    }

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoadVideo(entry.target); // Carga el video cuando el usuario hace scroll
                observer.unobserve(entry.target); // Deja de observar el video una vez cargado
            }
        });
    });

    lazyVideos.forEach(video => {
        observer.observe(video); // Observar cada video que tenga el atributo data-src
    });
});


