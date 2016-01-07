$('.upperbox').on('click',function(e){
  e.preventDefault();
  var sibs = $(this).parent().siblings().children(".upperbox");
  var wideness= Math.round($(this).width()/$(this).parent().width()*100);
  if(wideness > 60){
      $(this).animate({width:"50%"},1000);
  }else {
    $(this).animate({width:"100%"},1000);
  }

  sibs.animate({width:"100%"},1000);

  // ("shrunk");
  // $(this).removeClass("twitch");
  // sibs.removeClass("shrunk");
  // sibs.addClass("twitch");

});
