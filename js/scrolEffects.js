$(() => {

    makeOpaqueByScroll(0);
    console.log("Loaded");

    $(window).scroll(function( i ) {
        amount = $(this).scrollTop();
        makeOpaqueByScroll(amount);
    });




    $(() => window.addEventListener("onLoadedProjects", () => {
        $(".scroll-fade").each(function( i ) {
            $(this).addClass("inActive");
        });
    }));
    
});

function makeOpaqueByScroll(amount) {

    var ship = $(".ship-row");
    var off = 200;
    var raw = amount - ship.offset().top + off;
    var abs = Math.abs(raw);
    var sign = Math.sign(raw);
    var translate = Math.pow(abs * 0.05, 2) * sign;
    ship.css('transform', 'translateX(' + translate + 'px)');

    
    $(".scroll-fade").each(function( i ) {

        var att = $(this).attr("off");
        if (att == undefined)
            att = 0;

        var offset = $(window).height() * (0.75 - att / 100);
        var strength = $(this).offset().top - amount - offset;
        
        var shouldBevisible = strength < 0;
        
        if (shouldBevisible && $(this).hasClass("inActive")) {
            $(this).removeClass("inActive")
        }
    });
    
    $(".scroll-arrow").each(function( a ) {
        if (amount > 100)
            $(this).css('display',  "none" );
        else
            $(this).css('display',  "flex" );
    });
}

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);