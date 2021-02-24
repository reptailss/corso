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
    $(function() {
        var a = $(".nav-menu"),
            b = 700;
        $(".submenu", a).each(function(a, c) {
            $(c).parent().on({
                mouseenter: function() {
                    $(c).stop(!0).delay(b).fadeIn(600);
                    b = 100
                },
                mouseleave: function() {
                    $(c).stop(!0).delay(300).fadeOut(600)
                }
            })
        }).hide().eq(0).show();
        a.on({
            mouseleave: function() {
                b = 700
            }
        })
    });
});