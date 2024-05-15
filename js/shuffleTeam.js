$(() => {

    var people =  $(".person-element").toArray();

    while (people.length > 0) {

        var person = people[Math.floor(Math.random()*people.length)];

        people = jQuery.grep(people, function(value) {
            return value != person;
        });

        $(person).appendTo("#person-container");
    }
});