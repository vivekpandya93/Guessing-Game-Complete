$(document).ready(function(){
	var guesses = [];
	var rand_num = Math.round((Math.random())*100);
	var guess_counter = 0;
	var input_guess = 0;
	var variance = 0;
	var diffisPositive = function(input_guess){
		if((input_guess-rand_num) > 0)return true;
		else return false;
	}
	$('#submit_guess').on('click', function(){
		if(guess_counter==5) {
			$('#input_style').on('click',function(){
			$('#submit_guess').html("Sorry too many chances, press the reset button to try again");
			});
		}

		input_guess = parseInt($("#input_style").val(), 10);
	  variance = Math.abs(rand_num - input_guess);
	  var message = "";

	  if(diffisPositive(input_guess)){
	  	message = " Guess Lower";
	  };

	  if(!(diffisPositive(input_guess))) {
	  	message = " Guess Higher";
	  };

		if (input_guess < 1 || input_guess > 100) {
			guess_counter++;
			$(this).html("<h1>Wrong input type! Try again.</h1>");
			$('#input_style').on('click',function(){
			$('#submit_guess').html("Submit Your Guess");
			});
		}

		else {
				if (variance > 50) {
					guess_counter++;
					$(this).html("<h1>What is wrong with you?</h1>"+ message);
					$('#buttonedUP').html((5-guess_counter)+ " Guesses Remaining");
					$('#input_style').on('click',function(){
					$('#submit_guess').html("Submit Your Guess");
				});
			}
				else if (variance >=40 && variance <= 50) {
					guess_counter++;
					$(this).html("<h1>Making some progress</h1>"+ message);
					$('#buttonedUP').html((5-guess_counter)+ " Guesses Remaining");
					$('#input_style').on('click',function(){
					$('#submit_guess').html("Submit Your Guess");
				});
			}

				else if (variance >= 30 && variance < 40) {
					guess_counter++;
					$(this).html("<h1>Way off.</h1>"+ message);
					$('#buttonedUP').html((5-guess_counter)+ " Guesses Remaining");
					$('#input_style').on('click',function(){
					$('#submit_guess').html("Submit Your Guess");
				});
			}
				else if (variance >=20 && variance < 30) {
					guess_counter++;
					$(this).html("<h1>Still far off, Try again.</h1>"+ message);
					$('#buttonedUP').html((5-guess_counter)+ " Guesses Remaining");
					$('#input_style').on('click',function(){
					$('#submit_guess').html("Submit Your Guess");
				});
			}
				else if (variance >=10 && variance < 20) {
					guess_counter++;
					$(this).html("<h1>You're getting there.</h1>"+ message);
					$('#buttonedUP').html((5-guess_counter)+ " Guesses Remaining");
					$('#input_style').on('click',function(){
					$('#submit_guess').html("Submit Your Guess");
			 });
			}
				else if (variance >0 && variance <10) {
					guess_counter++;
					$(this).html("<h1>Super Hot.</h1>"+ message);
					$('#buttonedUP').html((5-guess_counter)+ " Guesses Remaining");
					$('#input_style').on('click',function(){
					$('#submit_guess').html("Submit Your Guess");
				});
			}
				else if (variance === 0) {
					guess_counter++;
					$(this).html("<h1>Correct!</h1>");
					$('#buttonedUP').html((5-guess_counter)+ " Guesses Remaining");
					$('#input_style').on('click',function(){
					$('#submit_guess').html("Submit Your Guess");
				});
			}	
		}	
	});
	$("#reset").on("click", function() {
	  		location.reload();
     });

	$("#Hint").on("click", function() {
	  	$('#submit_guess').text("The answer is " + rand_num + ", press 'Enter' to play again");
	  	$('.container').keypress(function(eve){
	  		if(eve.which === 13) {
	  			location.reload();
	  		}
	  	});
		});
});

	

	