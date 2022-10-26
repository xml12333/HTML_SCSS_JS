// ========================Burger=================
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    const navBtns = document.querySelector('.nav__buttons')
  
    burger.addEventListener("click", () => {
      if (!menu.classList.contains("active")) {
        menu.classList.add("active");
        burger.classList.add("active-burger");
        body.classList.add("locked");
        navBtns.classList.add('active')
      } else {
        menu.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("locked");
        navBtns.classList.remove('active')
      }
    });
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener("resize", () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("locked");
        navBtns.classList.remove('active')
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
  
  