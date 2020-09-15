$(function(){
    var blueItems = $('.item-azul');
    var redItems = $('.item-vermelho');
    var items = $('h1');

    var btnBlue = $('#faca-azul');
    var btnRed = $('#faca-vermelho');
    var btnChange = $('.btn-change');
    var btnRemove = $('.btn-remove');
    var btnToggle = $('.btn-toggle');

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

    btnChange.click(function(){
        items.addClass('change-items');
    })

    btnRemove.click(function(){
        items.removeClass('change-items');
    })

    btnToggle.click(function(){
        items.toggleClass('change-items');
    })
})