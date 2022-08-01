(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openMobileMenuBtn: document.querySelector("[data-mobile-menu-open]"),
      closeMobileMenuBtn: document.querySelector("[data-mobile-menu-close]"),
      mobileMenu: document.querySelector("[data-mobile-menu]"),
    };
    refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
    refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);
    function toggleMobileMenu() {
      refs.mobileMenu.classList.toggle("is-hidden");
    }
  })();
