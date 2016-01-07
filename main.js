(function() {
  $(document).ready(function() {
     page.init();
 });


  var page = {

    init:function(){
      page.styling();
      page.events();
    },
    styling:function(){

    },
    events:function(){
      //slider effect
      $('section').on('click','.upperbox',function(e){
        e.preventDefault();
        var sibs = $(this).parent().siblings().children(".upperbox");
        var wideness= Math.round($(this).width()/$(this).parent().width()*100);
        if(wideness > 60){
            $(this).animate({width:"50%"},1000);
        }else {
          $(this).animate({width:"100%"},1000);
        }
        sibs.animate({width:"100%"},1000);
      });
        //bounce effect
      $('section').on('mouseover','.upperbox',function(e){
        e.preventDefault();
        var wideness= Math.round($(this).width()/$(this).parent().width()*100);
        if(wideness > 60){
        $(this).animate({width:"99%"},200).animate({width:"100%"},200);
      }
      });
    },
  };


}());
