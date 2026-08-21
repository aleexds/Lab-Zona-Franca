document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-solicitud');
  const btnSolicitudes = document.getElementById('btn-solicitudes');
  const btnClose = document.getElementById('modal-close');
  const btnCancel = document.getElementById('modal-cancel');

  // Función para abrir la modal
  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.classList.add('active');
  };

  // Función para cerrar la modal
  const closeModal = () => {
    modal.classList.remove('active');
  };

  // Event Listeners
  if (btnSolicitudes) btnSolicitudes.addEventListener('click', openModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (btnCancel) btnCancel.addEventListener('click', closeModal);

  // Cerrar si se hace clic fuera del contenido blanco
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});