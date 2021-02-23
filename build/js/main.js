const sliders = document.querySelectorAll('.slide');

sliders.forEach((el) => {
    let swiper = new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: el.querySelector('.slide__pagination'),
            clickable: true,
            renderBullet: function(index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            }
        },
        slideClass: 'slide__card',
        wrapperClass: 'slide__wrap',
        containerClass: 'slide__container',
        autoplay: {
            delay: 5000,
        }

    });
});


$(function() {
    $('.burger').on('click', function() {
        $(this).find('.burger-span').toggleClass('active');
        $('.header-menu__list').toggleClass('active');
    })

    $('.footer__item-js').on('click', function() {
        $(this).find('.footer__item-list-js').toggleClass('active');
    })
    $('.header__item-js').hover(function() {
        $(this).find('.header__list-js').toggleClass('active');

    });

});