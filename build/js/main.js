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

var el = document.getElementsByClassName('menu-item');

for (var i = 0; i < el.length; i++) {
    el[i].addEventListener("mouseenter", showSub, false);
    el[i].addEventListener("mouseleave", hideSub, false);
}

function showSub(e) {
    if (this.children.length > 1) {
        this.children[1].style.transform = "translateY(0)";
        this.children[1].style.overflow = "visible";
        this.children[1].style.opacity = "1";
        // this.children[1].style.height = "auto";

    } else {
        return false;
    }
}

function hideSub(e) {
    if (this.children.length > 1) {
        this.children[1].style.transform = "translateY(100%)";
        this.children[1].style.overflow = "hidden";
        this.children[1].style.opacity = "0";
        // this.children[1].style.height = "0";

    } else {
        return false;
    }
}

$(function() {
    $('.burger').on('click', function() {
        $(this).find('.burger-span').toggleClass('active');
        $('.header-menu__list').toggleClass('active');
    })
});