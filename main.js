const slides1 = document.querySelector('.s1');
const slides2 = document.querySelector('.s2');
const slides3 = document.querySelector('.s3');
const totalSlides1 = document.querySelectorAll('.ss1').length;
const totalSlides2 = document.querySelectorAll('.ss2').length;
const totalSlides3 = document.querySelectorAll('.ss3').length;
let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;


function showNextSlide1() {
    currentIndex1 = (currentIndex1 + 1) % totalSlides1; // Loop back to the first slide
    const offset = -currentIndex1 * 300; // Calculate the offset
    slides1.style.transform = `translateX(${offset}px)`; // Move the slides
}
function showNextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2; // Loop back to the first slide
    const offset = -currentIndex2 * 300; // Calculate the offset
    slides2.style.transform = `translateX(${offset}px)`; // Move the slides
}
function showNextSlide3() {
    currentIndex3 = (currentIndex3 + 1) % totalSlides3; // Loop back to the first slide
    const offset = -currentIndex3 * 300; // Calculate the offset
    slides3.style.transform = `translateX(${offset}px)`; // Move the slides
}


setInterval(showNextSlide1, 3000);
setInterval(showNextSlide2, 3000);
setInterval(showNextSlide3, 3000);


  