"use strict"

const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// function counterRating() {
//     const itemRatings = document.querySelectorAll('.skills__ratings-item');
//     itemRatings.forEach(item => {
//         const counter = item.querySelector('.skills__ratings-counter');
//         const line = item.querySelector('.skills__ratings-line span');
//         const counterInt = parseInt(counter.innerHTML);
//         if (counterInt <= 100 && counterInt >= 0) {
//             line.style.width = counter.innerHTML;
//         } else if (counterInt <= 0) {
//             line.style.width = '0%';
//         }
//     })
// }

// counterRating()

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) =>{
    lines[i].style.width = item.innerHTML;
})