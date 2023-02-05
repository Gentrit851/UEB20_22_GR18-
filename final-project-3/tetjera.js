$(document).ready(function () {
    $("#hide").click(function () {
        $("#qytetet p").hide();
    });
    $("#shfaq").dblclick(function () {
        $("#qytetet p").show();
    });
    $("#toggle").click(function () {
        $("#kerkesat").toggle();
    });
    $("#box-show").click(function () {
        $("#box").fadeTo("slow", 0.15);
    });
    $("#box").click(function () {
        $("#box").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
    
});