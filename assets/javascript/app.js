
var correct = 0;
var wrong = 0;

		$('#start').on('click', buttonClicked);

		function buttonClicked() {
            delayButtonAlert = setTimeout(buttonAlert, 3000);

            var questions = $('<div>')
            for (i =0; i<4; i++){

            var choice = $('<p>')

            choice.text(i + "ooo");

            //choice.attr('type', radio);

            
            $('#question').append(choice);
            
        }



            //$('#question').text(choice);
        }

         function buttonAlert() {
            alert('Alert #2')
         }

	var Male = $("#Male");
    

	if (Male.checked) {
	correct++;
	console.log(correct);
	// alert("correct:" + correct);
	// else(Male.checked = false){
	// 	aert("no");
	} 







// var windowTimeout = setTimeout(windowAlert, 2000)

// function windowAlert() {
//             alert('Alert #1')
//         }



// timeConverter: function(t){
//         var minutes = Math.floor(t/60);
//         var seconds = t - (minutes * 60);
//         if (seconds < 10){
//             seconds = "0" + seconds;
//         }
//         if (minutes === 0){
//             minutes = "00";
//         } else if (minutes < 10){
//             minutes = "0" + minutes;
//         }
//         return minutes + ":" + seconds;
//     }