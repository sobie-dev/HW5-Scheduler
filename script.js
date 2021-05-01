
$("#currentDay").text(moment().format('dddd, MMMM Do'));


// Get the current time and use to manipulate colors (past/present/future)
var currentTime = moment().hours();
console.log(currentTime, 'time')
$('.time').each(function(){
    var HTMLTime = parseInt($(this).attr('id').split('-')[1])
    console.log (HTMLTime, 'HTMLTime')

    if (HTMLTime < currentTime) {
        $(this.children[1]).addClass('past')
    }
    else if (HTMLTime === currentTime) {
        $(this.children[1]).removeClass('past')
        $(this.children[1]).addClass('present')
    }
    else {
        $(this.children[1]).removeClass('past')
        $(this.children[1]).removeClass('present')
        $(this.children[1]).addClass('future')
    }
})