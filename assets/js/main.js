var bar = document.querySelector('.nav__mobile');


var nav_bar = document.querySelector('.nav');
var nav_menu_mobile = document.querySelector('#nav__menu__mobile');
console.log(nav_menu_mobile);
bar.addEventListener('click', function() {
    var valueOfNav = bar.getAttribute('data-nav');
    if (valueOfNav == 0) {
        nav_bar.classList.add('is__show');
        nav_menu_mobile.classList.add('is__show_mobile');
        bar.setAttribute('data-nav', '1');
    } else {
        nav_bar.classList.remove('is__show');
        nav_menu_mobile.classList.remove('is__show_mobile');
        bar.setAttribute('data-nav', '0');
    }

    // if (valueOfNav == 1) {
    //     nav_bar.classList.remove('is__show');
    //     nav_menu_mobile.classList.remove('is__show_mobile')
    // }
})