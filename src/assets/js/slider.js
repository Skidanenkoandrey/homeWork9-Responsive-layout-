const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        // when window width is >= 320px
        900: {
            slidesPerView: 5,
            spaceBetween: 30,
            slidesPerGroup: 1,
        }
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});