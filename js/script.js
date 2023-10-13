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