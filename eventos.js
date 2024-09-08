

const container = document.getElementById('container');
const button = document.getElementById('boton');

// Manejador para el div
container.addEventListener('click', function() {
    alert('Hola! Soy el div');
});

// Manejador para el botón que detiene la propagación
button.addEventListener('click', function(event) {
    alert('Hola!');
    event.stopPropagation(); // Evita que el evento 'click' se propague al div
});