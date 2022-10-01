$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('nav').addClass('changeColor')
        } else {
            $('nav').removeClass('changeColor')
        }
    });
});