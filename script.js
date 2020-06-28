$(document).ready(function(){

    $('#button').on('click', function() {
        var input = $('#input').val();
        var array = getRandomArray(input);
        appendStuff(array);
    });

    $('#sort').on('click', function() {
        console.log(array);
    });
  
});

function getRandomArray(number) {
    var array = [];

    for(var i = 0; i < number; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }

    return array;
}

function appendStuff(array) {
    $(".main-elements").empty();
    for(var i = 0; i< array.length; i++) {
        $( ".main-elements" ).append( "<div class='float-left'>"+array[i]+"</div>" );
    }
}