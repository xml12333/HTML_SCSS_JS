// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const navBtns = document.querySelector(".nav__btns");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
      navBtns.classList.add("active");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
      navBtns.classList.remove("active");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
      navBtns.classList.remove("active");
    }
  });
}
burgerMenu();

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
