(() => {
    const refs = {
      openModalBtn: document.querySelectorAll('[data-room-modal-open]'),
      closeModalBtn: document.querySelector('[data-room-modal-close]'),
      modal: document.querySelector('[data-modal-room]'),
    };
  
    refs.openModalBtn.forEach(el => {
      el.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
