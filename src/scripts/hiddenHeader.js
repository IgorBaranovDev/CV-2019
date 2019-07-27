// $(document).on('scroll', function () {
//     let scroll_top = $(document).scrollTop();
//     if (scroll_top <= 100) {
//         $('header').addClass('header active')
//     } else {
//         $('header').removeClass('header active');
//     }
// });

$(document).on('mousemove', function (event) {
    if (event.clientY <= 80 || event.pageY <= 640) {
        $('header').removeClass('header none')
                   .addClass('header active');
    } else {
        $('header').removeClass('header active')
        .addClass('header none');
    }
});

// $('#menu').mouseout(function () {
//     $('header').removeClass('header active')
//         .addClass('header none');
// });

// $('#menu').mousemove(function () {
//     $('header').removeClass('header none')
//         .addClass('header active');
// });
