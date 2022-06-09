/*show menu-mobile */
var bar = document.querySelector('.nav__mobile');
var nav_bar = document.querySelector('.nav');
var nav_menu_mobile = document.querySelector('#nav__menu__mobile');
console.log(nav_menu_mobile);
bar.addEventListener('click', function() {
    var valueOfNav = this.getAttribute('data-nav');
    if (valueOfNav == 0) {
        nav_bar.classList.add('is__show');
        nav_menu_mobile.classList.add('is__show_mobile');
        this.setAttribute('data-nav', '1');
    } else {
        nav_bar.classList.remove('is__show');
        nav_menu_mobile.classList.remove('is__show_mobile');
        this.setAttribute('data-nav', '0');
    }

    // if (valueOfNav == 1) {
    //     nav_bar.classList.remove('is__show');
    //     nav_menu_mobile.classList.remove('is__show_mobile')
    // }
})
var backtop = document.querySelector(".back-to-top");
console.log(backtop);
window.addEventListener('scroll', function() {
    const scroled = window.pageYOffset;
    if (scroled > 537) {
        backtop.classList.add('active-top');
    } else {
        backtop.classList.remove('active-top');
    }
    backtop.addEventListener('click', function() {
        window.scrollTo({
            top: 0
        })
    })
    console.log(scroled);
    // if (this.scrollTop(0)) {
    //     backtop.fadeIn();
    // } else {
    //     backtop.fadeOut();
    // }
})