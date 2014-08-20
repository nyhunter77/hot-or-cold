
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  	});
	
	/*--- Get the hidden number and start the game ---*/
	$(".new").click(function() {
		answer=Math.floor((Math.random()*100)+1);
		console.log (answer);
	});

	/*--- Take in guess ---*/
	function getGuess() {
		$("#guessButton").click(function(enter) {
				console.log("submit button");
				game();
		});
		$("#userGuess").keydown(function(enter) {
			if (enter.keyCode===13) {
				console.log("Enter was pressed");
				game();
			};
		}); 
	};

	getGuess();

	/*--- Play the game   Need to take in the var guess---*/
	
	function game() {
		var guess = $("#userGuess").val();
		
		if (guess==answer) {
			alert ("Congratulations! You got it! The secret number was " +answer+ "!")
		} else {
			alert ("wrong");	
		};
	};
});


