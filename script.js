$(document).ready(function () {
    $('a[href="#sheldure"], .main_btna, .main_btn').click(function() {
        $('.overlay').fadeIn(500);
        $('.modal').slideDown(500);
    });

    $('.close').click(function() {
        $('.overlay').fadeOut(500);
        $('.modal').slideUp(500);
    });
});