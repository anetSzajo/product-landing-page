const hamburgerBtn = document.querySelector(".hamburger-button");
const navBar = document.querySelector(".nav-bar");

hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('visible');
});