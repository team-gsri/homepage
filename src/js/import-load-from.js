$(function() {
    $("[data-load-from]").each(function(index) {
        var from = $(this).attr('data-load-from');
        $(this).load(from);
    });
});