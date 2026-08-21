document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-solicitud');
  const btnClose = document.getElementById('modal-close');
  const btnCancel = document.getElementById('modal-cancel');

  // Seleccionamos TODOS los botones que deben abrir el modal
  const openModalButtons = document.querySelectorAll('.btn-open-modal');

  // Función para abrir la modal
  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add('active');
  };

  // Función para cerrar la modal
  const closeModal = () => {
    modal.classList.remove('active');
  };

  // Asignamos el evento click a cada botón de la lista
  openModalButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  // Eventos de cierre
  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (btnCancel) btnCancel.addEventListener('click', closeModal);

  // Cerrar al hacer clic en el fondo oscuro
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});