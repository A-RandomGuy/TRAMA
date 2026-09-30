document.addEventListener('DOMContentLoaded', () => {
  // Manejo de la navegación interactiva
  const navButtons = document.querySelectorAll('.nav button');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  // Animaciones básicas o inicialización de elementos dinámicos
  console.log('Aplicación TRAMA inicializada correctamente.');
});
