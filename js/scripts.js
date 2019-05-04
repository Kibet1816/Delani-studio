$(document).ready(function(){
  $(".cardA").click(function(){
    $("#card1").slideToggle();
  });
  $(".cardB").click(function(){
    $("#card2").slideToggle();
  });
  $(".cardC").click(function(){
    $("#card3").slideToggle();
  });
  $(".hover").mousemove(function(e){
  	var hovertext= $(this).attr('hovertext');
  	$("#hoverdiv").text(hovertext).show();
  }).mouseout(function(){
  	$("#hoverdiv").hide();
  });
});

 