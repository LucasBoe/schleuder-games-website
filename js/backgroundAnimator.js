randomOffset = function() {
    var i = (Math.pow(Math.random(),0.1) * 4) - 1;
    return i * 25;
}

$(() => {
    var lastRoll = -1;
    var x;
    var y;
    $(".background").find("ul").children('li').each(function(e) {
        $( this ).toggleClass( "example" );

        var g = Math.round((e + Math.random() * 3) / 4);

        if (lastRoll < g)
        {
            lastRoll = g;
            x = randomOffset();
            y = randomOffset();
        }       

        //$(this).css({'margin-top' : y + 'px'})

        $(this).css({'transform' : 'translate(' + x +'px, ' + y + 'px) scaleX(1.5)'});
    });
    console.log(lastRoll);
});