/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});
 /*Scroll to top when arrow up clicked END*/

 var media = window.matchMedia("(max-width: 700px)");
    if(media.matches) {
        var loc = "ov_mob.mp4";
        document.getElementById("ov-vid").src = loc;
    }
