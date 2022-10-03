/// <reference path="./jquery-3.6.0.js" />

var projectsData;

$(() => {

    $.getJSON("/json/projects.json", (data) => {

        projectsData = data;

        $.each(projectsData, (key, val) => {

            var project = projectsData[key];

            $.ajax({
                type: "GET",
                url: 'components/projectTemplate.html',
                async: false
            }).done((data) => {

                $(data).appendTo('#projectHolder');
                var instance = $("#projectHolder").children().last();
                
                //load name
                $(instance).find("h4").html(project["name"]);


                //load thumbnail
                $(instance).find("img").attr("src", project["thumbnailUrl"]);

                //load links
                var linkParent = $(instance).find("ul");
                $.each(project["linkouts"], function (text, url) {
                    $(linkParent).append($(['<li><a href=">',url,'">', text, '</a></li>'].join("")))
                });

                //load description
                $(instance).find(".info").prepend(iterateThroughElementsAndCreate("i", project["description"]));

            });
        });
    });
});

function iterateThroughElementsAndCreate(type, content) {
    var string = "";
    $(content).each((index) => {
        string += createElementOpenClose(type, content[index]);
    })
    return string;
}

function createElementOpenClose(typePrefix, content) {
    return '<' + typePrefix + '>' +
        content +
        '</' + typePrefix + '>';
}