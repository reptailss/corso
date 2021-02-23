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
        if (window.matchMedia("(max-width: 800px)").matches) {
            this.children[1].style.transform = "translateY(0)";
            this.children[1].style.overflow = "visible";
            this.children[1].style.opacity = "1";
            this.children[1].style.height = "auto";
            this.children[1].style.display = "block";

        } else {
            this.children[1].style.transform = "translateY(0)";
            this.children[1].style.overflow = "visible";
            this.children[1].style.opacity = "1";
            this.children[1].style.height = "auto";
            this.children[1].style.display = "block";
        }
    } else {
        return false;
    }
}

function hideSub(e) {
    if (this.children.length > 1) {
        if (window.matchMedia("(max-width: 800px)").matches) {
            this.children[1].style.height = "0";
            this.children[1].style.transform = "translateY(100%)";
            this.children[1].style.overflow = "hidden";
            this.children[1].style.opacity = "0";
            this.children[1].style.display = "none";
        } else {

            this.children[1].style.transform = "translateY(100%)";
            this.children[1].style.overflow = "hidden";
            this.children[1].style.opacity = "0";
            this.children[1].style.display = "none";
        }



    } else {
        return false;
    }
}

$(function() {
    $('.burger').on('click', function() {
        $(this).find('.burger-span').toggleClass('active');
        $('.header-menu__list').toggleClass('active');
    })

    $('.footer__item-js').on('click', function() {
        $(this).find('.footer__item-list-js').toggleClass('active');
    })
});