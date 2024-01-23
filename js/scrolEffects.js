$(() => {

    $(".backdrop").each(function( i ) {
        $(this).attr("offset", $(this).offset().top );
    });

    makeOpaqueByScroll(0);
    console.log("Loaded");

    $(window).scroll(function( i ) {
        amount = $(this).scrollTop();
        makeOpaqueByScroll(amount);
    });
});

function makeOpaqueByScroll(amount) {    
    $(".scroll-fade").each(function( i ) {

        var att = $(this).attr("off");
        if (att == undefined)
            att = 0;

        var offset = $(window).height() * (0.75 - att / 100);
        var strength = $(this).offset().top - amount - offset;
        
        var shouldBevisible = strength < 0;
        
        if (shouldBevisible && !$(this).hasClass("in")) {
            $(this).addClass("in");
        }
    });

    
    $("span").each(function( i ) {

        var att = $(this).attr("off");
        if (att == undefined)
            att = 0;

        var offset = $(window).height() * 0.5;
        var strength = $(this).offset().top - amount - offset;

        var shouldBevisible = Math.abs( strength) < 200;
        
        if (shouldBevisible && $(this).hasClass("out")) {
            $(this).removeClass("out");
        } else if (!shouldBevisible && !$(this).hasClass("out")) {
            $(this).addClass("out");
        }
    });
    

    var logoShouldBeSmall = amount > 100;
    var logoIsSmall = $("#logo").hasClass("small");

    if (logoIsSmall != logoShouldBeSmall) {
        if (logoShouldBeSmall)
        {
            $("#logo").addClass("small");
        } else {
            $("#logo").removeClass("small");
        }
    }
}

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);