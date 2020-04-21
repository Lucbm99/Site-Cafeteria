$(document).ready(function() {
    $('#subir').click(function(){
        $('html, body').animate({scrollTop:0}, 50);
        return false;
    });
});

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});
