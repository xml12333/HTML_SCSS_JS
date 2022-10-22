//Navbar
// Мобильное меню бургер
//All Pages
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector("nav");

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav");
  } else {
    nav.classList.remove("fixed__nav");
  }
}
window.addEventListener("scroll", fixedNav);

//Main Page Scripts
if (document.querySelector(".body__main")) {
  const swiper = new Swiper(".swiper__innovation", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper__arrow-next",
      prevEl: ".swiper__arrow-prev",
    },


      // Responsive breakpoints
      breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.8,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2.8,
        spaceBetween: 20
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3.2,
        spaceBetween: 30
      },
      // when window width is >= 1000px
      1000: {
        slidesPerView: 4,
        spaceBetween: 30
      },
    }
  });
}
