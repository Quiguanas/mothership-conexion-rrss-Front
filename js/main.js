// Agrega el siguiente código JavaScript para compartir en Facebook
document.querySelector('.share-button').addEventListener('click', () => {
    FB.ui({
      method: 'share',
      href: 'URL_DE_TU_CONTENIDO',
    }, response => handleResponse('Facebook', response));
});

// Redirigir a la página de publicación de Instagram
document.querySelector('.share-button').addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/create/captioned/?caption=DESCRIPCION_DE_TU_CONTENIDO';
});

// Agrega el siguiente código JavaScript para compartir en YouTube
document.querySelector('.share-button').addEventListener('click', () => {
    // Utiliza la API de YouTube para publicar un video
    // Aquí deberías implementar la lógica de autorización y publicación según la API de YouTube
    // Puedes usar Google API Client Library: https://developers.google.com/api-client-library
    handleResponse('YouTube', { success: true }); // Simulado, ajusta según la implementación real
});

function handleResponse(platform, response) {
    if (response && !response.error_message) {
        alert(`¡Contenido compartido en ${platform} con éxito!`);
    } else {
        alert(`Error al compartir en ${platform}: ${response.error_message}`);
    }
}
// Agrega el siguiente código JavaScript para compartir en Facebook
document.querySelector('.share-button').addEventListener('click', () => {
    FB.ui({
      method: 'share',
      href: 'URL_DE_TU_CONTENIDO',
    }, response => handleResponse('Facebook', response));
});

// Redirigir a la página de publicación de Instagram
document.querySelector('.share-button').addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/create/captioned/?caption=DESCRIPCION_DE_TU_CONTENIDO';
});

// Agrega el siguiente código JavaScript para compartir en YouTube
document.querySelector('.share-button').addEventListener('click', () => {
    // Utiliza la API de YouTube para publicar un video
    // Aquí deberías implementar la lógica de autorización y publicación según la API de YouTube
    // Puedes usar Google API Client Library: https://developers.google.com/api-client-library
    handleResponse('YouTube', { success: true }); // Simulado, ajusta según la implementación real
});

function handleResponse(platform, response) {
    if (response && !response.error_message) {
        alert(`¡Contenido compartido en ${platform} con éxito!`);
    } else {
        alert(`Error al compartir en ${platform}: ${response.error_message}`);
    }
}

// Función para mostrar una alerta de éxito
function showSuccessAlert() {
    showAlert('¡Éxito! Contenido compartido correctamente.', 'alert-success');
  }

  // Función para mostrar una alerta de error
  function showErrorAlert() {
    showAlert('¡Oops! Hubo un error al compartir contenido.', 'alert-error');
  }

  // Función para mostrar una alerta
  function showAlert(message, alertType) {
    // Crear elemento de alerta
    const alertElement = document.createElement('div');
    alertElement.className = `alert ${alertType}`;
    alertElement.innerText = message;

    // Agregar la alerta al contenedor
    const alertsContainer = document.getElementById('alerts-container');
    alertsContainer.innerHTML = ''; // Limpiar alertas anteriores
    alertsContainer.appendChild(alertElement);

    // Mostrar la alerta
    alertElement.style.display = 'block';

    // Ocultar la alerta después de 3 segundos
    setTimeout(() => {
      alertElement.style.display = 'none';
    }, 3000);
  }
