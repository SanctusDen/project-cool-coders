(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-open-modal-table]"),
      closeModalBtn: document.querySelector("[data-modal-close-table]"),
      modal: document.querySelector("[data-modal-table]"),
    };
    refs.openModalBtn.forEach(el => {
      el.addEventListener('click', toggleModal);
    });
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
