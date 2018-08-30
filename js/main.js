
$(document).ready(function () {
    $('.text .btn').click(function () {
        $('.text .content').css({
            'max-height': '100%',
            'transition': 'width linear .5s'
        });
        $('.text .btn').css({
            'display':'none'
        })
    });
    $("#partners-carousel").owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav:true,
        navText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    document.getElementById('links').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = this.getElementsByTagName('a');
        blueimp.Gallery(links, options);
    };
});