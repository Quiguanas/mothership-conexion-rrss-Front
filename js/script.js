function statusChangeCallback(response) {
    if (response.status === 'connected') {
        // El usuario está conectado, puedes obtener la información del usuario aquí
        console.log('Logged in and authenticated');
    } else {
        // El usuario no está conectado, mostrar un popup personalizado para iniciar sesión con Facebook
        openFacebookLoginPopup();
    }
}

function openFacebookLoginPopup() {
    var width = 600;
    var height = 400;
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    
    window.open(
        'URL_DEL_ENDPOINT_DE_AUTENTICACIÓN_DE_FACEBOOK',
        'Iniciar Sesión con Facebook',
        'width=' + width + ',height=' + height + ',left=' + left + ',top=' + top
    );
}

const ratingInputs = document.querySelectorAll('.rate input');
const pageTitle = document.title;

ratingInputs.forEach(input => {
    input.addEventListener('change', (event) => {
        const selectedRating = event.target.value;
        console.log(`Calificación seleccionada: ${selectedRating} ${pageTitle} `);
    });
});


function cargarContenido(archivo) {
    var iframe = document.getElementById('content');
            iframe.src = archivo;
}

// Ejemplo de carga de contenido desde un archivo llamado "contenido1.html"
cargarContenido('contenido.html');
console.log(`Calificación sel `);






