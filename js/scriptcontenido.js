console.log(`scriptcontenido `);
document.getElementById("boton-compartir").addEventListener("click", function() {
    var listaDesplegable = document.getElementById("lista-desplegable");
    if (listaDesplegable.style.display === "block") {
        listaDesplegable.style.display = "none";
    } else {
        listaDesplegable.style.display = "block";
    }
});

// Cerrar la lista desplegable si se hace clic en cualquier lugar fuera de ella
window.addEventListener("click", function(event) {
    var listaDesplegable = document.getElementById("lista-desplegable");
    var botonCompartir = document.getElementById("boton-compartir");
    if (event.target !== listaDesplegable && event.target !== botonCompartir) {
        listaDesplegable.style.display = "none";
    }
});