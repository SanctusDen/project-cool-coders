(()=>{const e={openModalBtn:document.querySelectorAll("[data-prices-modal-open]"),closeModalBtn:document.querySelector("[data-prices-modal-close]"),modal:document.querySelector("[data-modal-prices]")};e.openModalBtn.forEach(l=>{l.addEventListener("click",o)}),e.closeModalBtn.addEventListener("click",o);function o(){e.modal.classList.toggle("is-hidden")}})();
