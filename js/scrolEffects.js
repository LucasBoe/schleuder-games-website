$(() => {

    makeOpaqueByScroll(0);
    console.log("Loaded");

    $(window).scroll(function( i ) {
        amount = $(this).scrollTop();
        makeOpaqueByScroll(amount);
    });
});

function makeOpaqueByScroll(amount) {
    $("section").each(function( i ) {
        var strength = $(this).offset().top - amount;
        var scale = 1 -  Math.pow(Math.max(0, Math.min((strength), 2000)) / 4000, 1.5);
        var yTranslate = Math.pow ((strength) / 5, 1.1);           
        $(this).css('transform', 'translate(0px, ' + yTranslate + 'px) scale(' + scale + ')');
    });
}