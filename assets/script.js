var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, HH:mm:ss'));
};

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});


$('.saveBtn').on('click', function(event){
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);
})

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

function colorUpdate() {
    var currentHour = moment().hours()
    console.log(currentHour)
    $(".time-block").each(function(){
        var blockNumber = parseInt($(this).attr("id").split("-")[1])
        if (blockNumber < currentHour) {
            $(this).addClass("past")
        }
        else if (blockNumber === currentHour) {
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }

    })
}

colorUpdate()