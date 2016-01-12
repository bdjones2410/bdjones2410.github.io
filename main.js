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
    },
    events:function(){
        $('section').on('click','.upperbox',function(e){
          e.preventDefault();
          var biggertech = techhigh + 200;
          var sibs = $(this).parent().siblings().children(".upperbox");
          var wideness= Math.round($(this).width()/$(this).parent().width()*100);
          if(wideness > 60){

              $(this).animate({width:"20%"},1000);
              $(this).addClass('smallPadding');
              $(this).siblings('.lowerbox').animate({width:'80%'},1000);
              $(this).parent('.Projects').animate({height:biggertech},1000);
              $(this).children().toggleClass('hidden');
          }else {
            $(this).animate({width:"100%"},1000);
            $(this).removeClass('smallPadding');
            $(this).siblings('.lowerbox').animate({width:'40%'},1000);
            $(this).parent('.Projects').animate({height:techhigh},1000);
            $(this).children().toggleClass('hidden');
          }
          sibs.animate({width:"100%"},1000);
          if($(this).parent().siblings().children('.upperbox').children('span').hasClass('hidden')){
            $(this).parent().siblings().children('.upperbox').children('span.hidden').siblings().toggleClass('hidden');
            $(this).parent().siblings().children('.upperbox').children('span.hidden').toggleClass('hidden');
          }
          $(this).parent().siblings().children('.lowerbox').animate({width:'40%'},1000);
          $(this).parent().siblings().children().removeClass('smallPadding');
          $(this).parent('.Projects').siblings().animate({height:techhigh},1000);
        });
    },



  };


}());
