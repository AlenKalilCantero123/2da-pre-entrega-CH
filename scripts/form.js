// Obtener el formulario y el mensaje de éxito desde el DOM
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

// Agregar un listener para el evento 'submit' del formulario
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío estándar del formulario
  
  // Aquí podrías agregar código para enviar el formulario por AJAX si es necesario
  
  contactForm.reset(); // Limpiar el formulario
  successMessage.style.display = 'block'; // Mostrar mensaje de éxito
});
