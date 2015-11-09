(function ($) {
    $.fn.ar_Animation = function (animationClass,nC) 
    {
        while (nC > 0) {
            $(this).addClass(animationClass)
            //this.style.webkitAnimationPlayState = "running";
            //console.log('animation running');
            $(this).on('webkitAnimationEnd', function () {
                $(this).removeClass(animationClass);
            });
            $(this).delay(1).queue(function () {
                console.log('after delay, i=')
                console.log(nC)
                nC = nC - 1;                
                $(this).ar_Animation(animationClass, nC)
            });
        }
    };
    //$.fn.oc_ar_Animation = function (animationClass) {
    //    $(this).click(function () {
    //        $(this).ar_Animation(animationClass)
    //    });
    //};
})(jQuery);



jQuery(document).ready(function ($) {
    $('.profile-pic').click(function () {
        $(this).ar_Animation('rot360CW_3s', 3);
    });
    
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







//$(document).ready( function () {

    //var rotFunc = function($rotClass) { 
    //    $(this).addClass("imageRot");
    //    //$(this).delay(3000).queue(function () {  // Wait for 10 seconds.
    //    //    $(this).removeClass("imageRot").dequeue();
    //    //});
    //};

    //$(".profile-pic").click(rotFunc(this));
    //rotFunc($(.'profilePic'));

    //MyBlah("Hello this works") // Inside the anonymous function we are cool.

//});
//$(".profile-pic").click(rotFunc());



//F1
////Works
//$(".profile-pic").click(function () {
//    $(this).addClass("imageRot");
//    this.style.webkitAnimationPlayState = "running";
//    $(this).on('webkitAnimationEnd', function () {
//        this.style.webkitAnimationPlayState = "paused";
//        $(this).removeClass("imageRot");
//    });
//});


//F2
////Works but not ideal
//$(".profile-pic").click(function () {
//    $(this).addClass("imageRot");
//    $(this).delay(3000).queue(function () {  // Wait for 10 seconds.
//        $(this).removeClass("imageRot").dequeue();
//    });
//});
