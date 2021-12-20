/***** Import custom style ****/
import './assets/css/fonts.css'
import './assets/scss/style.scss'

let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
};

const body = document.querySelector('body');
const dropdownMenu = document.querySelector('.dropdown-menu');
const isTouch = document.querySelector('.touch');
if (isMobile.any()) {
    body.classList.add('touch');
} else {
    body.classList.add('mouse');
}

const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu');
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_loc');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

const menuParents = document.querySelectorAll('.dropdown-item');
// let menuChildren = document.querySelectorAll('.catalogue__list-sub');

for (let i = 0; i < menuParents.length; i++) {
    const menuParent = menuParents[i];
    const childItem = menuParent.querySelector('.catalogue__list-sub');
    const btnBack = document.querySelector('.arrow-back');
    const basket = document.querySelector('.bask-comp');


    menuParent.addEventListener('click', function () {
        // const parentNumber = parseInt(menuParent.getAttribute('data-item'));
        // menuChildren[menuItem].classList.add('_active');
        childItem.classList.add('_active');
        btnBack.classList.add('_show');
        basket.classList.add('_show');
    });

    btnBack.addEventListener('click', function () {
        childItem.classList.remove('_active');
        btnBack.classList.remove('_show');
        basket.classList.remove('_show');
    });
}

