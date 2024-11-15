const navBars = document.querySelector('.fa-bars ')
const navOverlay = document.querySelector('.overlay-nav')
const navClose = document.querySelector('.nav-close')


// Navigation event listeners
navBars.addEventListener('click', function(){
    navOverlay.style.width = "100%"
})

navClose.addEventListener('click', function() {
    navOverlay.style.width = "0"
})