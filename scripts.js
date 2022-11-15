const mobileMenu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector(".btn-open-menu");
const btnCloseMenu = document.querySelector(".btn-close-menu");

btnOpenMenu.addEventListener('click', (e) => {
    e.preventDefault();
});

btnCloseMenu.addEventListener('click', (e) => {
    e.preventDefault();
});


function openMenu(){
    mobileMenu.classList.remove("hide")
    btnOpenMenu.classList.add("hide")
    btnCloseMenu.classList.remove("hide")

}

function closeMenu() {
    mobileMenu.classList.add("hide")
    btnOpenMenu.classList.remove("hide")
    btnCloseMenu.classList.add("hide")

}