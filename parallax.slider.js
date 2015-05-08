(function($) {

    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        var settings = $.extend({
            speedParallax        : 0.50
        }, options);

        return this.each( function() {

            var $this = $(this);

            $(document).scroll(function(){

                var scrollTop = $(window).scrollTop();

                var offset = $this.offset().top;

                var height = $this.outerHeight();

                if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
                    return;
                }

                var yBgPosition = -Math.round((offset - scrollTop) * settings.speedParallax);

                $this.css('background-position', 'center ' + yBgPosition + 'px');

                console.log($this);
                
            });
        });
    }

    $.fn.parallaxSlider = function(options) {

        var windowHeight = $(window).height();

        var settings = $.extend({
            speedParallax        : 0.15,
            speedSlide           : 5000
        }, options);

        var slider1 = $(this);
        var slider2 = slider1.clone();

        slider2.css({display:"none"});
        slider2.insertAfter(slider1);

        var images = Array();

        $(this).children().each(function(){
                images.push($(this).attr('src'));
        });


        slider1.css({backgroundImage:"url("+images[0]+")"});


        var max = images.length;
        var i = 0;

        var slider = function(){
            if(i%2 == 0){
                cs = slider1;
                ncs = slider2;
            }else{
                cs = slider2;
                ncs = slider1;
            }
            cs.css({backgroundImage:"url("+images[i%max]+")"});
            cs.fadeIn();
            ncs.fadeOut();

            i++;
        }

        slider1.parallax(options);
        slider2.parallax(options);

        setInterval(slider, settings.speedSlide);
    }

}(jQuery));