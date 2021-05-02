var currentTime = moment().hours();
var text = $('.textInput');
var saveBtn = $('.saveBtn');

$("#currentDay").text(moment().format('dddd, MMMM Do'));

$('.time').each(function(){
    var HTMLTime = parseInt($(this).attr('id').split('-')[1])
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
saveBtn.on('click',function(event){
    var userInput = $(this).siblings('.textInput').val()
    var time = $(this).parent().attr('id')
    localStorage.setItem(time,userInput);  
    document.getElementById("userInput").innerHTML = text.userInput;
})
$('#hour-9 .textInput').val(localStorage.getItem('hour-9'))
$('#hour-10 .textInput').val(localStorage.getItem('hour-10'))
$('#hour-11 .textInput').val(localStorage.getItem('hour-11'))
$('#hour-12 .textInput').val(localStorage.getItem('hour-12'))
$('#hour-13 .textInput').val(localStorage.getItem('hour-13'))
$('#hour-14 .textInput').val(localStorage.getItem('hour-14'))
$('#hour-15 .textInput').val(localStorage.getItem('hour-15'))
$('#hour-16 .textInput').val(localStorage.getItem('hour-16'))
$('#hour-17 .textInput').val(localStorage.getItem('hour-17'))
