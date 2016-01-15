(function() {
    $(document).ready(function() {
        page.init();
    });

    var techhigh;
    var page = {

        init: function() {
            page.styling();
            page.events();
        },
        styling: function() {
            techhigh = $('.Projects').height();
        },

        events: function() {
        $(document).on("scroll", onScroll);

        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            $('a').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');

            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });


          function onScroll(event){
            var scrollPos = $(document).scrollTop();
            $('nav a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top -200 <= scrollPos && refElement.position().top + refElement.height()-200 > scrollPos) {
                    $('nav a .boxopt').removeClass("active");
                    currLink.children('.boxopt').addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
          }

            $('nav').on('click','.boxopt',function(e){
              $(this).addClass('active');
              $(this).parent().siblings().children('.boxopt').removeClass('active');
            });

            $('section').on('click', '.upperbox', function(e) {
                e.preventDefault();
                var biggertech = techhigh + 200;
                var sibs = $(this).parent().siblings().children(
                    ".upperbox");

            if(!page.recentlyclicked){
                    page.recentlyclicked = true;
                    window.setTimeout(page.resetClicked, 1000);
                var wideness = Math.round($(this).width() /
                    $(this).parent().width() * 100);
                if (wideness > 60) {
                    $(this).animate({
                        width: "20%"
                    }, 1000);
                    window.setTimeout(page.addClass, 100, $(this));
                    $(this).siblings('.lowerbox').animate({
                        width: '80%'
                    }, 1000);
                    $(this).parent('.Projects').animate({
                        height: biggertech
                    }, 1000);
                    $(this).children().toggleClass('hidden');
                } else {
                    $(this).animate({
                        width: "100%"
                    }, 1000);
                    $(this).removeClass('smallPadding');
                    $(this).siblings('.lowerbox').animate({
                        width: '40%'
                    }, 1000);
                    $(this).parent('.Projects').animate({
                        height: techhigh
                    }, 1000);
                    $(this).children().toggleClass('hidden');
                    window.setTimeout(page.removeClass,500,$(this));
                }
                sibs.animate({
                    width: "100%"
                }, 1000);
                if ($(this).parent().siblings().children(
                    '.upperbox').children('span').hasClass(
                    'hidden')) {
                    $(this).parent().siblings().children(
                        '.upperbox').children(
                        'span.hidden').siblings().toggleClass(
                        'hidden');
                    $(this).parent().siblings().children(
                        '.upperbox').children(
                        'span.hidden').toggleClass(
                        'hidden');
                }
                $(this).parent().siblings().children(
                    '.lowerbox').animate({
                    width: '40%'
                }, 1000);
                window.setTimeout(page.removeSibClass, 500, $(this));
                $(this).parent('.Projects').siblings().animate({
                    height: techhigh
                }, 1000);

              }
            });
        },

        removeSibClass:function($myObj){
          $myObj.parent().siblings().children().removeClass(
              'smallPadding');
              $myObj.parent().siblings().children().removeClass(
                  'openUpper');
              $myObj.parent().siblings().children().removeClass('openLower');
              $myObj.parent('.Projects').siblings().removeClass('noOP');
        },

        recentlyclicked:false,

        resetClicked:function(){
          page.recentlyclicked = false;
        },
        removeClass:function($myObj){
          $myObj.removeClass('openUpper');
          $myObj.siblings('.lowerbox').removeClass('openLower');
          $myObj.parent('.Projects').removeClass('noOP');
        },
        addClass:function($myObj){
          $myObj.addClass('smallPadding');
          $myObj.addClass('openUpper');
          $myObj.siblings('.lowerbox').addClass('openLower');
          $myObj.parent('.Projects').addClass('noOP');
        },




    };


}());
