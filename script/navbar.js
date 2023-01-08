$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.navigation').addClass('navigationChangeColor')
        } else {
            $('.navigation').removeClass('navigationChangeColor')
        }
    });
});