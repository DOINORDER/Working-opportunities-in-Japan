burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
rightNav.classList.toggle('v-class');
navList.classList.toggle('v-class');
navbar.classList.toggle('h-nav');
})






const about = document.getElementById("about");
const whyJapan = document.getElementById("why-japan");
const japanWork = about.querySelector("japanW-work");

// about.addEventListener("click", (e) => {
//   whyJapan.classList.toggle("open");

//   const isOpen = whyJapan.classList.contains("open");
//   japanWork.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
// });

// whyJapan.addEventListener("click", (e) => {
//   whyJapan.classList.remove("open");
//   japanWork.setAttribute("class", "ri-menu-line");
// });

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".section", {
...scrollRevealOption,
});
ScrollReveal().reveal(".section p", {
...scrollRevealOption,
delay: 500,
});
ScrollReveal().reveal(".section .text-small", {
...scrollRevealOption,
delay: 1000,
});
ScrollReveal().reveal(".thumbnail img", {
...scrollRevealOption,
delay: 1500,
});


ScrollReveal().reveal(".download__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".download__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".download__container .download__btns", {
  ...scrollRevealOption,
  delay: 1000,
});
