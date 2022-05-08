const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-link');
const cross = document.querySelector('.cross');

hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    if (nav.classList.contains('show')){
        hamburger.setAttribute('src', 'assets/shared/mobile/icon-close.svg');
    } else {
        hamburger.setAttribute('src', 'assets/shared/mobile/icon-hamburger.svg');
    }
})