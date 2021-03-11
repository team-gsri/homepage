$(function() {
    AOS.init();

    $('body>section').before($('<div class="gsri-splitter w3-theme"></div>'));
    $('body>section').append($('<div style="clear: both;"></div>'));

    $('.warning').prepend($('<span><i class="fas fa-2x fa-exclamation-triangle w3-left w3-padding"></i> &nbsp; </span>'));
    $('.warning').prepend($('<p> &nbsp; </p>'));
    $('.warning').append($('<p> &nbsp; </p>'));

    $('.hero').parallax({
        naturalWidth: 1280,
        naturalHeight: 720
    });

    $('#contact').parallax({
        naturalWidth: 1280,
        naturalHeight: 720
    });

    $('.parallax-slider').addClass('w3-opacity-max');
});