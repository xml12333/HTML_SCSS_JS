// Custom scripts
// Мобильное меню бургер
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
    if (window.innerWidth > 991.98) {
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

//tabs
function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "flex"
) {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);
  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = 0) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");

// Аккордеон
function accordion() {
  const items = document.querySelectorAll(".accordion__item-trigger");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentNode;
      if (parent.classList.contains("accordion__item-active")) {
        parent.classList.remove("accordion__item-active");
      } else {
        document
          .querySelectorAll(".accordion__item")
          .forEach((child) => child.classList.remove("accordion__item-active"));
        parent.classList.add("accordion__item-active");
      }
    });
  });
}
accordion();

//modal

// Модальное окно
function bindModal(trigger, modal, close) {
  (trigger = document.querySelector(trigger)),
    (modal = document.querySelector(modal)),
    (close = document.querySelector(close));

  const body = document.body;

  trigger.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    body.classList.add("locked");
  });
  close.addEventListener("click", () => {
    modal.style.display = "none";
    body.classList.remove("locked");
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      body.classList.remove("locked");
    }
  });
}

// ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal(".modal__btn", ".modal__wrapper", ".modal__close");

//Swiper
const swiper = new Swiper(".swiper", {
  spaceBetween: 20,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".arrow__btn-next",
    prevEl: ".arrow__btn-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
  },
});

//phonemask
const element = document.querySelector(".phone__input");
const maskOptions = {
  mask: "+{3}(000)000-00-00",
};
const mask = IMask(element, maskOptions);

//smooth scroll
new SmoothScroll('a[href*="#"]');

//change cursor
function changeCursor() {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".follower");
  const links = document.querySelectorAll(".link");
  let posx = 0,
    posy = 0;
  let mouseX = 0,
    mouseY = 0;

  TweenMax.to({}, 0.01, {
    repeat: -1,
    onRepeat: () => {
      posx += (mouseX - posx) / 5;
      posy += (mouseY - posy) / 5;
      TweenMax.set(follower, {
        css: {
          left: posx - 12,
          top: posy - 12,
        },
      });
      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    },
  });
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("active");
      follower.classList.add("active");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("active");
      follower.classList.remove("active");
    });
  });
}
changeCursor();


//canvas
window.addEventListener("load", windowLoadHandler, false);

		//for debug messages
		var Debugger = function() { };
		Debugger.log = function(message) {
			try {
				console.log(message);
			}
			catch (exception) {
				return;
			}
		}

		function windowLoadHandler() {
			canvasApp();
		}

		// function canvasSupport() {
		// 	return Modernizr.canvas;
		// }

		function canvasApp() {
			// if (!canvasSupport()) {
			// 	return;
			// }
			
			var theCanvas = document.getElementById("canvasOne");
			var context = theCanvas.getContext("2d");
			
			var displayWidth;
			var displayHeight;
			var timer;
			var wait;
			var count;
			var numToAddEachFrame;
			var particleList;
			var recycleBin;
			var particleAlpha;
			var r,g,b;
			var fLen;
			var m;
			var projCenterX;
			var projCenterY;
			var zMax;
			var turnAngle;
			var turnSpeed;
			var sphereRad, sphereCenterX, sphereCenterY, sphereCenterZ;
			var particleRad;
			var zeroAlphaDepth;
			var randAccelX, randAccelY, randAccelZ;
			var gravity;
			var rgbString;
			//we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
			var p;
			var outsideTest;
			var nextParticle;
			var sinAngle;
			var cosAngle;
			var rotX, rotZ;
			var depthAlphaFactor;
			var i;
			var theta, phi;
			var x0, y0, z0;
				
			init();
			
			function init() {
				wait = 1;
				count = wait - 1;
				numToAddEachFrame = 8;
				
				//particle color
				r = 255;
				g = 255;
				b = 255;
				
				rgbString = "rgba("+r+","+g+","+b+","; //partial string for color which will be completed by appending alpha value.
				particleAlpha = 1; //maximum alpha
				
				displayWidth = theCanvas.width;
				displayHeight = theCanvas.height;
				
				fLen = 320; //represents the distance from the viewer to z=0 depth.
				
				//projection center coordinates sets location of origin
				projCenterX = displayWidth/2;
				projCenterY = displayHeight/2;
				
				//we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
				zMax = fLen-2;
				
				particleList = {};
				recycleBin = {};
				
				//random acceleration factors - causes some random motion
				randAccelX = 0.1;
				randAccelY = 0.1;
				randAccelZ = 0.1;
				
				gravity = 0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.
				
				particleRad = 2.5;
				sphereRad = 280;
				sphereCenterX = 0;
				sphereCenterY = 0;
				sphereCenterZ = -3 - sphereRad;
				
				//alpha values will lessen as particles move further back, causing depth-based darkening:
				zeroAlphaDepth = -750; 
				
				turnSpeed = 2*Math.PI/1600; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
				turnAngle = 0; //initial angle
				
				timer = setInterval(onTimer, 1000/24);
			}
			
			function onTimer() {
				//if enough time has elapsed, we will add new particles.		
				count++;
					if (count >= wait) {
								
					count = 0;
					for (i = 0; i < numToAddEachFrame; i++) {
						theta = Math.random()*2*Math.PI;
						phi = Math.acos(Math.random()*2-1);
						x0 = sphereRad*Math.sin(phi)*Math.cos(theta);
						y0 = sphereRad*Math.sin(phi)*Math.sin(theta);
						z0 = sphereRad*Math.cos(phi);
						
						//We use the addParticle function to add a new particle. The parameters set the position and velocity components.
						//Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
						//it becomes unstuck).
						var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002*x0, 0.002*y0, 0.002*z0);
						
						//we set some "envelope" parameters which will control the evolving alpha of the particles.
						p.attack = 50;
						p.hold = 50;
						p.decay = 160;
						p.initValue = 0;
						p.holdValue = particleAlpha;
						p.lastValue = 0;
						
						//the particle will be stuck in one place until this time has elapsed:
						p.stuckTime = 80 + Math.random()*20;
						
						p.accelX = 0;
						p.accelY = gravity;
						p.accelZ = 0;
					}
				}
				
				//update viewing angle
				turnAngle = (turnAngle + turnSpeed) % (2*Math.PI);
				sinAngle = Math.sin(turnAngle);
				cosAngle = Math.cos(turnAngle);

				//background fill
				context.fillStyle = "#1f1f1f";
				context.fillRect(0,0,displayWidth,displayHeight);
				
				//update and draw particles
				p = particleList.first;
				while (p != null) {
					//before list is altered record next particle
					nextParticle = p.next;
					
					//update age
					p.age++;
					
					//if the particle is past its "stuck" time, it will begin to move.
					if (p.age > p.stuckTime) {	
						p.velX += p.accelX + randAccelX*(Math.random()*2 - 1);
						p.velY += p.accelY + randAccelY*(Math.random()*2 - 1);
						p.velZ += p.accelZ + randAccelZ*(Math.random()*2 - 1);
						
						p.x += p.velX;
						p.y += p.velY;
						p.z += p.velZ;
					}
					
					/*
					We are doing two things here to calculate display coordinates.
					The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
					x and z (but the y coordinate will not change).
					Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
					*/
					rotX = cosAngle*p.x + sinAngle*(p.z - sphereCenterZ);
					rotZ = -sinAngle*p.x + cosAngle*(p.z - sphereCenterZ) + sphereCenterZ;
					m = fLen/(fLen - rotZ);
					p.projX = rotX*m + projCenterX;
					p.projY = p.y*m + projCenterY;
						
					//update alpha according to envelope parameters.
					if (p.age < p.attack+p.hold+p.decay) {
						if (p.age < p.attack) {
							p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;
						}
						else if (p.age < p.attack+p.hold) {
							p.alpha = p.holdValue;
						}
						else if (p.age < p.attack+p.hold+p.decay) {
							p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;
						}
					}
					else {
						p.dead = true;
					}
					
					//see if the particle is still within the viewable range.
					if ((p.projX > displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>displayHeight)||(rotZ>zMax)) {
						outsideTest = true;
					}
					else {
						outsideTest = false;
					}
					
					if (outsideTest||p.dead) {
						recycle(p);
					}
					
					else {
						//depth-dependent darkening
						depthAlphaFactor = (1-rotZ/zeroAlphaDepth);
						depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor<0) ? 0 : depthAlphaFactor);
						context.fillStyle = rgbString + depthAlphaFactor*p.alpha + ")";
						
						//draw
						context.beginPath();
						context.arc(p.projX, p.projY, m*particleRad, 0, 2*Math.PI, false);
						context.closePath();
						context.fill();
					}
					
					p = nextParticle;
				}
			}
				
			function addParticle(x0,y0,z0,vx0,vy0,vz0) {
				var newParticle;
				var color;
				
				//check recycle bin for available drop:
				if (recycleBin.first != null) {
					newParticle = recycleBin.first;
					//remove from bin
					if (newParticle.next != null) {
						recycleBin.first = newParticle.next;
						newParticle.next.prev = null;
					}
					else {
						recycleBin.first = null;
					}
				}
				//if the recycle bin is empty, create a new particle (a new ampty object):
				else {
					newParticle = {};
				}
				
				//add to beginning of particle list
				if (particleList.first == null) {
					particleList.first = newParticle;
					newParticle.prev = null;
					newParticle.next = null;
				}
				else {
					newParticle.next = particleList.first;
					particleList.first.prev = newParticle;
					particleList.first = newParticle;
					newParticle.prev = null;
				}
				
				//initialize
				newParticle.x = x0;
				newParticle.y = y0;
				newParticle.z = z0;
				newParticle.velX = vx0;
				newParticle.velY = vy0;
				newParticle.velZ = vz0;
				newParticle.age = 0;
				newParticle.dead = false;
				if (Math.random() < 0.5) {
					newParticle.right = true;
				}
				else {
					newParticle.right = false;
				}
				return newParticle;		
			}
			
			function recycle(p) {
				//remove from particleList
				if (particleList.first == p) {
					if (p.next != null) {
						p.next.prev = null;
						particleList.first = p.next;
					}
					else {
						particleList.first = null;
					}
				}
				else {
					if (p.next == null) {
						p.prev.next = null;
					}
					else {
						p.prev.next = p.next;
						p.next.prev = p.prev;
					}
				}
				//add to recycle bin
				if (recycleBin.first == null) {
					recycleBin.first = p;
					p.prev = null;
					p.next = null;
				}
				else {
					p.next = recycleBin.first;
					recycleBin.first.prev = p;
					recycleBin.first = p;
					p.prev = null;
				}
			}	
		}