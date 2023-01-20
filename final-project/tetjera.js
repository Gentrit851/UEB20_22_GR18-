

$(document).ready(function(){

  $(".btn").click(function(){
      $("p").hide();
  });
  $(".btn").dblclick(function(){
      $("p").show();
  });
  $("#btn").click(function(){
      $("p").toggle();
  });

  $('#btn').mouseenter(function(){
  alert("Ju tani jeni ne butonin per shfaqje");
})

});