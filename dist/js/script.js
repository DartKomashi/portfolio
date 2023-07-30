const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const calculator = document.querySelectorAll('.abilitys__ratings-calculator'),
    lines = document.querySelectorAll('.abilitys__ratings-line span');

calculator.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});