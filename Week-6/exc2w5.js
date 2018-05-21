var stdiv = $('<div>');

var nddiv = $('<div>');


var feet = 'https://images.unsplash.com/photo-1501631957818-9f4b96ca2b0f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1f1917e3200635fb2a6506e7f89d079b&auto=format&fit=crop&w=1350&q=80';

var rail = 'https://images.unsplash.com/photo-1514828260103-1e9bf9a58446?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f36a98f5f1b150a523b924915c1544a5&auto=format&fit=crop&w=1350&q=80';

var favela = 'https://images.unsplash.com/photo-1510041883570-1c5b27d85cb8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01c289e0c299345b66298cb5f62d37ea&auto=format&fit=crop&w=1311&q=80';


var summer = 'https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=1350&q=80';

var sunset = 'https://images.unsplash.com/photo-1516083970832-95ec61992d84?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2acd2dc1756dab0dcd5b1b07767ecd73&auto=format&fit=crop&w=1950&q=80';

var miami = 'https://images.unsplash.com/photo-1519255122284-c3acd66be602?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e04961056fdf4f059220b38f43dff1de&auto=format&fit=crop&w=726&q=80';


$('body').append(stdiv);
$('body').append(nddiv);




var listPic = [feet, rail, favela];
var listPic2 = [miami, sunset, summer];


for (var i = 0; i < listPic.length; i++) {
    var img = $('<img>');

    img.attr('src', listPic[i]);
    img.attr('width', '33%');
    img.attr('height', '480');

    stdiv.append(img);
}


for (var i = 0; i < listPic2.length; i++) {
    var img = $('<img>');

    img.attr('src', listPic2[i]);
    img.attr('width', '33%');
    img.attr('height', '480');

    nddiv.append(img);
}

$('div:nth-of-type(1) > img:nth-of-type(1)').addClass('redBord');


$(function () {

    $('img.redBord').removeClass('redBord');
    $('body').children().eq(3).children().eq(1).addClass('redBord')

})