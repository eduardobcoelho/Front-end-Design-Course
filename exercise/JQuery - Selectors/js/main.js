$(function(){
    var blueItems = $('.item-azul');
    var redItems = $('.item-vermelho');

    var btnBlue = $('#faca-azul');
    var btnRed = $('#faca-vermelho');

    btnBlue.click(function(){
        blueItems.css({
            color: 'blue',
            backgroundColor: 'white'
        });
        $('body').css('background-color','blue');
    })

    btnRed.click(function(){
        redItems.css({
            color: 'red',
            backgroundColor: 'white'
        })
        $('body').css('background-color','red');
    })
})