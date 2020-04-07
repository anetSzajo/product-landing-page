const hamburgerBtn = document.querySelector(".hamburger-button");
const navBar = document.getElementById("nav-bar");

hamburgerBtn.addEventListener('click', () => {
    navBar.classList.toggle('visible');
});