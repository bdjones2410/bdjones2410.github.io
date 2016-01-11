(function() {
  $(document).ready(function() {
     page.init();
 });

  var techhigh;
  var page = {

    init:function(){
      page.styling();
      page.events();
    },
    styling:function(){
      techhigh = $('.Projects').height();
    //   var scrnHeight = $(window).height();
    //   $('section').css('height',scrnHeight+50);
    //   $('.Projects').css('height',scrnHeight/4-25);
    //
    },
    events:function(){
      //slider effect
      $('section').on('click','.upperbox',function(e){
        e.preventDefault();
        var that = $(this);
        var biggertech = techhigh + 100;
        var sibs = $(this).parent().siblings().children(".upperbox");
        var wideness= Math.round($(this).width()/$(this).parent().width()*100);
        if(wideness > 60){

            $(this).animate({width:"20%"},1000);
            $(this).siblings('.lowerbox').animate({width:'80%'},1000);
            $(this).parent('.Projects').animate({height:biggertech},1000);
            $(this).children().toggleClass('hidden');
        }else {
          $(this).animate({width:"100%"},1000);
          $(this).siblings('.lowerbox').animate({width:'40%'},1000);
          $(this).parent('.Projects').animate({height:techhigh},1000);
          $(this).children().toggleClass('hidden');
        }
        sibs.animate({width:"100%"},1000);
        if($(this).parent().siblings().children('.upperbox').children('span').hasClass('hidden')){
          $(this).parent().siblings().children('.upperbox').children().toggleClass('hidden');
        }
        $(this).parent().siblings().children('.lowerbox').animate({width:'40%'},1000);
        $(this).parent('.Projects').siblings().animate({height:techhigh},1000);
      });
        //bounce effect
      // $('section').on('mouseover','.upperbox',function(e){
      //   e.preventDefault();
      //   var wideness= Math.round($(this).width()/$(this).parent().width()*100);
      //   if(wideness > 60){
      //   $(this).animate({width:"99%"},200).animate({width:"100%"},200);
      // }
      // });
    },
  };


}());
