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


