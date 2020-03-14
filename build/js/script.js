let navButton = document.querySelector(".header__button");
let navMenu = document.querySelector(".header__hider")
navButton.onclick = function (e) {
    navMenu.classList.toggle('header__hider');
}
