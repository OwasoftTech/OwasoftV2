$(function () {
    $(".brand").owlCarousel({
        loop: true,
        margin: 40,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 4,
            },
            1000: {
                items: 6,
            },
        },
        navContainer: ".brandButton",
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        autoplay: false,
    });

    AOS.init({
        offset: 100,
        duration: 1000,
    });
});
