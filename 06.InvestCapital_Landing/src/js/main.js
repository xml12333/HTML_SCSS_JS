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

//Swiper
const swiper = new Swiper(".swiper", {
  spaceBetween: 60,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".next__btn",
    prevEl: ".prev__btn",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
