(function ($) {
    $.fn.ar_Animation = function (animationClass,nC) 
    {

        //while (nC > 0) {
        $(this).addClass(animationClass)
            //this.style.webkitAnimationPlayState = "running"; //Not working
            //console.log('animation running');
            $(this).on('webkitAnimationEnd', function () {
                $(this).removeClass(animationClass);
                //added
                //this.style.webkitAnimationPlayState = "paused";
            });

            //$(this).delay(1).queue(function () {
            //    console.log('after delay, i=')
            //    console.log(nC)
            //    nC = nC - 1;                
            //    $(this).ar_Animation(animationClass, nC)
            //});
        //}

    };
    //$.fn.oc_ar_Animation = function (animationClass) {
    //    $(this).click(function () {
    //        $(this).ar_Animation(animationClass)
    //    });
    //};
})(jQuery);



//jQuery(document).ready(function ($) {
$(document).ready( function () {
    //$('.profile-pic').click(function () {
    //    $(this).ar_Animation('rot360CW_3s', 3);
   

    //    $(this).delay(1000).queue(function () {
    //        $(this).ar_Animation('rot360CW_3s', 3)
    //    });


    //});
    //$('.profile-pic').click(function () {
    //    $(this).addClass('rot360CW_3s')
    //    $(this).on('webkitAnimationEnd', function () {
    //        $(this).removeClass('rot360CW_3s');
    //    });
    //});
    $('.profile-pic').click(function () {
        
        //$(this).addClass('rot360CW_3s')

        //$(this).queue( function() {
        //    $(this).removeClass('rot360CW_3s');
        //    // This tells jQuery to continue to the next item in the queue
        //    $(this).dequeue();
        //});
        //1
        $(this).queue("addrotate", function (next) {
            console.log("Step 1");
            $(this).addClass('rot360CW_3s')
            next();
        })
        $(this).dequeue("addrotate");
        //2
        $(this).on('webkitAnimationEnd', function () {
            $(this).removeClass('rot360CW_3s');
            $(this).queue("takerotate", function (next) {
                console.log("Step 2");
                $(this).removeClass('rot360CW_3s');
                next();
            })
            $(this).dequeue("takerotate");
            //3
            //    $(this).delay(1000).queue(function () {
            //        $(this).ar_Animation('rot360CW_3s', 3)
            //    });
            $(this).queue("addrotate2", function (next) {
                console.log("Step 3");
                $(this).addClass('rot360CW_3s')
                next();
            })
            $(this).dequeue("addrotate2");
        });
    });
//        $(this).delay(3000).queue(function () {  // Wait for 3 seconds.
////            $(this).removeClass('rot360CW_3s').dequeue();
//            $(this).addClass('rot360CW_3s')
//            $(this).on('webkitAnimationEnd', function () {
//                $(this).removeClass('rot360CW_3s');
//            });
//});

        $( ".box" )
            .animate( {height: 20}, "slow")
            .queue( function() {
                $( "#title" ).html( "We're in the animation, baby!" );
 
                // This tells jQuery to continue to the next item in the queue
                $( this ).dequeue();
            });

        $(".box")
        .queue("rotate", function (next) {
            console.log("Step 1");
            next();
        })
        .queue("rotate", function (next) {
            console.log("Step 2");
            next();
        })
        .dequeue("rotate");
    //for (i = 0; i < cars.length; i++) {
    //    text += cars[i] + "<br>";
    //}
 
    

    //$('.profile-pic').click(function () {
        //for (i = 0; i < 3; i++) {
            
            
            //$(this).addClass('rot360CW_3s')
            //this.style.webkitAnimationPlayState = "running";
            //console.log('animation running');

            //$(this).on('webkitAnimationEnd', function () {
            //    $(this).removeClass('rot360CW_3s');
            //    $(this).delay(1).queue(function () {  // Wait for 3 seconds.
            //        $(this).addClass('rot360CW_3s')
            //    });
                
                //this.style.webkitAnimationPlayState = "paused";
                //console.log('animation paused');
            //});

            //if (this.style.webkitAnimationPlayState != "running") {
            //    $(this).addClass('rot360CW_3s')
            //    this.style.webkitAnimationPlayState = "running";
            //    console.log('animation running');

            //    $(this).on('webkitAnimationEnd', function () {
            //        this.style.webkitAnimationPlayState = "paused";
            //        $(this).removeClass('rot360CW_3s');
            //        console.log('animation paused');
            //        console.log(i);
            //    });
            //}

        //}
    //});


});


jQuery(document).ready(function ($) {

    //var rotFunc = function($rotClass) { 
    //    $(this).addClass("imageRot");
    //    //$(this).delay(3000).queue(function () {  // Wait for 10 seconds.
    //    //    $(this).removeClass("imageRot").dequeue();
    //    //});
    //};

    //$(".profile-pic").click(rotFunc(this));
    //rotFunc($('.profilePic'));

    //MyBlah("Hello this works") // Inside the anonymous function we are cool.

    //$(".profile-pic").click(function () {
    //    $(this).addClass("rot360CW_3s");
    //    this.style.webkitAnimationPlayState = "running";
    //    $(this).on('webkitAnimationEnd', function () {
    //        this.style.webkitAnimationPlayState = "paused";
    //        $(this).removeClass("rot360CW_3s");
    //    });
    //});

});

//$(".profile-pic").click(rotFunc());



//F1
////Works
//jQuery(document).ready(function ($) {
//    $(".profile-pic").click(function () {
//        $(this).addClass("rot360CW_3s");
//        this.style.webkitAnimationPlayState = "running";
//        $(this).on('webkitAnimationEnd', function () {
//            this.style.webkitAnimationPlayState = "paused";
//            $(this).removeClass("rot360CW_3s");
//        });
//    });
//});

//F2
////Works but not ideal
//jQuery(document).ready(function ($) {
//    $(".profile-pic").click(function () {
//        $(this).addClass("imageRot");
//        $(this).delay(3000).queue(function () {  // Wait for 3 seconds.
//            $(this).removeClass("imageRot").dequeue();
//        });
//    });
//});