(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-room-modal-open]"),
    closeModalBtn: document.querySelector("[data-room-modal-close]"),
    modal: document.querySelector("[data-modal-room]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();