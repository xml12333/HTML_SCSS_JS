//Submenu
function submenu() {
    const submenu = document.querySelector(".submenu");
    const trigger = document.querySelector(".with__submenu");
    const triggerLink = document.querySelector(".trigger__link");
    const arrow = document.querySelector(".submenu__arrow");
    trigger.addEventListener("click", () => {
      submenu.classList.toggle("active");
      triggerLink.classList.toggle("active");
      arrow.classList.toggle("active");
    });
  }
  submenu();
  