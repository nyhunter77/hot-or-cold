
$(document).ready(function(){
	/*--- Get the number at web page load ---*/
	console.log("ready");
	answer=Math.floor((Math.random()*100)+1);
		console.log (answer);
	
	/*--- Get the hidden number and start the game on new button ---*/
	$(".new").click(function() {
		answer=Math.floor((Math.random()*100)+1);
		console.log (answer);
	});	
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  	});

	/*--- Take in guess ---*/
	function getGuess() {
		$("#guessButton").click(function(enter) {
				console.log("submit button");
				game();
		});
		$("#userGuess").keydown(function(enter) {
			if (enter.keyCode===13) {
	//			enter.preventDefault();
	//			return false;
				console.log("Enter was pressed");
				game();
			};
		}); 
	};

	getGuess();

	/*--- Play the game ---*/
	
	function game() {
		var guess = $("#userGuess").val();
		var howfar=Math.abs(answer-guess);
		var guesses=[];
		guesses.push(guess);
		var prevhowfar=Math.abs(answer-guesses);
		
		if (guess==answer) {
			console.log ("Congratulations! You got it! The secret number was " +answer+ "!")
		} else if (guess<answer) {
			console.log ("Cold, guess higher.")
		} else if (guess>answer) {
			console.log ("Cold, guess lower.")
		
		
		
		/*(isNaN(prevhowfar)) {
				if (guess>answer) {
					console.log ("You're cold, guess lower.")					
				} else if (guess<answer) {
					console.log ("You're cold, guess higher.")
				}	
			} else if (howfar>prevhowfar) {  //colder
				if (guess>answer) {
					console.log ("Yikes! You're really starting to freeze! Guess lower!")
				} else if (guess<answer) {
					console.log ("Yikes! You're really starting to freeze! Guess higher!")
				}
			} else if (howfar<prevhowfar) {  //warmer
				if (guess>answer) {
					console.log ("Ok, you're getting warmer ... guess a little lower.")
				} else if (guess<answer) {
					console.log ("Ok, you're getting warmer ... guess a little higher.")
				} */
			
			} else { 			
				console.log ("Sorry, that's not it.");
			};

		
		
	//if guess = or not  / do we have a prevhowfar?
	//another guess?  need distance, if less = warmer / if more = colder
	//warmer - take the absolute value as distance. howfar=absolute(answer-guess)
	//if distance is greater - getting colder / if distance is getting lesser - getting warmer.
	//colder - if distance is greater - getting colder - etc

	};
});


