const mobileMenu = document.querySelector('.mobile-menu');
const btnOpenMenu = document.querySelector(".btn-open-menu");
const btnCloseMenu = document.querySelector(".btn-close-menu");

function readMore(){
    const points = document.getElementById("points");
    const moreText = document.getElementById("more");
    const btnReadMore = document.getElementById("btnReadMore");

    if(points.style.display == "none"){
        points.style.display = "inline";
        moreText.style.display = "none";
        btnReadMore.innerHTML = "Ler mais"
    }else {
        points.style.display = "none";
        moreText.style.display = "inline";
        btnReadMore.innerHTML = "Ler menos"
    }
}

btnOpenMenu.addEventListener('click', (e) => {
    e.preventDefault();
});

btnCloseMenu.addEventListener('click', (e) => {
    e.preventDefault();
});

btnReadMore.addEventListener('click', (e) => {
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