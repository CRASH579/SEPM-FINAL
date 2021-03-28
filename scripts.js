$(document).ready(function () {
    $('.carousel').carousel({interval: 6000});
    $("#carouselButton").click(function(){
       

    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $(".carousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $(".carousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
});

$('#resbtn').click(function(){
    $('#reserve').modal('show');
});

$('#logmod').click(function(){
    $('#loginModal').modal('show');
});



});