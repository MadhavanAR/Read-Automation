'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});


/*portfolio */

const portImages = document.querySelector('.port-images');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let scrollAmount = 0;
const imageWidth = portImages.clientWidth / 3; // Width of 3 images at a time

rightBtn.addEventListener('click', () => {
    scrollAmount += imageWidth;
    
    if (scrollAmount >= portImages.scrollWidth / 2) {
        scrollAmount = 0; // Reset to the start when reaching the duplicated images
    }
    
    portImages.style.transform = `translateX(-${scrollAmount}px)`;
});

leftBtn.addEventListener('click', () => {
    scrollAmount -= imageWidth;
    
    if (scrollAmount < 0) {
        scrollAmount = portImages.scrollWidth / 2 - imageWidth; // Go to the end of the first set
    }
    
    portImages.style.transform = `translateX(-${scrollAmount}px)`;
});
