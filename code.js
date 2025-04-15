// Mobile Menu Toggle
$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.nav-links').toggleClass('active');
    });

    // Smooth Scrolling for Navigation Links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 70,
            },
            500,
            'linear'
        );
    });

    // Slideshow Functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = $('.slide');
        slides.hide();
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        $(slides[slideIndex - 1]).fadeIn(1000);
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    // Manual Slideshow Controls
    $('.next').click(function() {
        let slides = $('.slide');
        slides.hide();
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        $(slides[slideIndex - 1]).fadeIn(1000);
    });

    $('.prev').click(function() {
        let slides = $('.slide');
        slides.hide();
        slideIndex--;
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }
        $(slides[slideIndex - 1]).fadeIn(1000);
    });

    // Add Animation on Scroll
    $(window).scroll(function() {
        $('.animate__animated').each(function() {
            let position = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll + windowHeight > position) {
                $(this).addClass($(this).data('animate'));
            }
        });
    });
});