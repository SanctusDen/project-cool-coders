import"./styles-fac82e35.js";import d from"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";new d(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),n=()=>{const o=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");const l=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};e.addEventListener("click",n),c.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",e),t.closeModalBtn.addEventListener("click",e);function e(){t.modal.classList.toggle("is-hidden")}})();
