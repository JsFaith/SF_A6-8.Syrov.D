let progress = 0;

$("#btn1").on('click', function() {
    if (progress <= 99) {
    	progress++;
    	$("#my-progress-bar").width(progress + '%');
    	console.log (progress);
    }
    else $(".btn").prop("disabled", true);
});

$("#btn2").on('click', function() {
    if (progress <= 99) {
    	progress = progress+3;
    	$("#my-progress-bar").width(progress + '%');
        console.log (progress);
    }
    else $(".btn").prop("disabled", true);
});

$("#btn3").on('click', function() {
    if (progress <= 99) {
    	progress = progress+7;
    	$("#my-progress-bar").width(progress + '%');
        console.log (progress);
    }
    else $(".btn").prop("disabled", true);
});

$(document).ready();