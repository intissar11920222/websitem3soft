 // work slider
    workSlder();

    function workSlder() {
        var owl = $('.work .owl-carousel');

        owl.children().each(function (index) {
            $(this).attr('data-position', index); // NB: .attr() instead of .data()
        });

        owl.owlCarousel({
            loop: false,
            margin: 30,
            mouseDrag: true,
            autoplay: false,
            center: true,
            dots: true,
            nav: false,
            slideBy: 'page',
            dragEndSpeed: 700,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                600: {
                    items: 2,
                    margin: 30,
                },
                1000: {
                    items: 2,
                    margin: 0,

                }
            }
        });

        $(document).on('click', '.work .owl-item>div', function () {
            owl.trigger('to.owl.carousel', $(this).data('position'));
        });
        owl.trigger('refresh.owl.carousel');
    }

