$('.testimonials-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
        {
            breakpoint: 950,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        }
    ],
})