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
