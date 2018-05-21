
$(function () {
    var chick = 'https://images.unsplash.com/photo-1524108569173-c878b2026ad4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=78c812e767ca214504259fb47c871f09&auto=format&fit=crop&w=1350&q=80';

    var heli = 'https://images.unsplash.com/photo-1495734300409-f6bfb3a6f88f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7bad8def37744ce431f0bc6e9956debe&auto=format&fit=crop&w=1267&q=80';

    var water = 'https://images.unsplash.com/photo-1525968902-070804c406e0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1fd511e8084af7e3c53226f4a54cbbf&auto=format&fit=crop&w=1350&q=80';


    var array = [chick, heli, water];
    var notFound = true;
    for (var i = 0; i < array.length; i++) {
        var imgs = $('<img>');
        var size = Math.floor((Math.random() * 1500) + 50);


        var res = imgs.attr('src', array[i]);
        res = imgs.attr('width', size);


        if (size < 500 && notFound) {
            imgs.addClass('green');
            notFound = false;
        }

        $('body').append(res);


    }
    var title = $('<h1>');

    title.text("gallery title");
    title.css('font-size', 90);

    $('body').prepend(title);


    // $('img').fadeOut(10000);

});