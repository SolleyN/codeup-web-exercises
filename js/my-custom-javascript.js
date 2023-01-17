"use strict"

$(document).ready(function() {

//     $(function() {
//         alert( 'The DOM has finished loading!' );
//     });
    
// });
// var contents = $('#codeup').html();
// alert(contents);
// let contents = $('#p1').html();
// alert(contents);

// $('.codeup').css('background-color', 'red');

// $('.codeup').css( 'border', 'solid 1px red');

//  let contents = $('li').css('font-size', '20px').html();
// let contents = $('h1, p, li').css('background-color', 'yellow').html();

// $('#codeup').click(function() {
//     alert('h1 with id "codeup" was clicked');

$('#title').click(function() {
    $(this).css('background-color', 'red');
});

$('#p1').dblclick(function() {
    $(this).css ('font-size', '18px');
});

$('li').hover(function() {

$('li').css('color', 'red');

}, function(){

    $('li').css('color', '');
    
})
});
