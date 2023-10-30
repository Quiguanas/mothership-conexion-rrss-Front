document.addEventListener("DOMContentLoaded", () => {
    const progreso = document.getElementById("progreso");

    let porcentaje = 0;

    const intervalo = setInterval(() => {
        porcentaje += 1;
        progreso.style.width = porcentaje + "%";
        progreso.textContent = porcentaje + "%";

        if (porcentaje >= 100) {
            clearInterval(intervalo);
        }
    }, 30);
});