$(document).ready(function (){
    $('#mobileBtn').on('click', function () {
        $('#mobileMenu').toggleClass('active');
        $('#mobileBtn').find('i').toggleClass('fa-x');
    })

    $('.dish-heart').on('click', function (){
        
        $(this).toggleClass('activeContHeart');
        $(this).find('.heart').toggleClass('activeHeart');
    });

    const sections = $('section');
    const navItens = $('.nav-item');

    $(window).on('scroll', function (){
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let sectionActive = 0;
        
        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        } else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function (i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                sectionActive = i;
                return false
        }});

        navItens.removeClass('active');
        $(navItens[sectionActive]).addClass('active');
    })

    ScrollReveal().reveal('.cont', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.contButtons', {
        origin: 'left',
        delay: 500,
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.socialMedia_Buttons', {
        origin: 'left',
        delay: 600,
        duration: 2000,
        distance: '20%',
    });

    ScrollReveal().reveal('.dish', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',
        interval: 500
    });

    ScrollReveal().reveal('.testimonials_cont', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        delay:200,
        duration: 2000,
        distance: '20%',
        interval: 500
    });
})