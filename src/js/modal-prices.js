(() => {
    const refs = {
      openModalBtn: document.querySelectorAll('[data-prices-modal-open]'),
      closeModalBtn: document.querySelector('[data-prices-modal-close]'),
      modal: document.querySelector('[data-modal-prices]'),
    };
  
    refs.openModalBtn.forEach(el => {
      el.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();