(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-prices-modal]"),
      closeModalBtn: document.querySelector("[data-prices-modal-close]"),
      modal: document.querySelector("[data-modal-prices]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();