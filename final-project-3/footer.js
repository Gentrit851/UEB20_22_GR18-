$(document).ready(function () {

    $(".down-arrow").click(function () {
        $("p").hide();
    });
    $(".up-arrow").dblclick(function () {
        $("p").show();
    });
    $("#btn").click(function () {
        $("p").toggle();
    });
});