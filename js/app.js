
$(document).ready(function(){
	
	/*--- Get the number at web page load ---*/
	console.log("ready");
	answer=Math.floor((Math.random()*100)+1);
	console.log (answer);
	tries = 0;
	guesses = [];
	howfar = 0;
	prevhowfar = 0;
	guess=0;
	
	
	/*--- Get the hidden number and start the game on new button ---*/
	$(".new").click(function() {
		answer=Math.floor((Math.random()*100)+1);
		console.log (answer);
		tries = 0;
		guesses = [];
		howfar = 0;
		prevhowfar = 0;
		guess=0;
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
		guess = parseInt($("#userGuess").val());
		howfar=Math.abs(answer-guess);
		guesses=[];
		prevhowfar=Math.abs(answer-guesses);
		tries=0;
		guesses.push(guess);
		
		
		// simple logic works
		/* if (guess===answer) {  
			console.log ("Congratulations! You got it! The secret number was " +answer+ "!")
		} else if (guess<answer) {
			console.log ("Cold, guess higher.")
		} else if (guess>answer) {
			console.log ("Cold, guess lower.");  */
		
		
		if (guess===answer) {  
			console.log ("Congratulations! You got it! The secret number was " +answer+ "!")
		} else if (guess<answer) {
			console.log ("You're cold, guess higher.")
		} else if (guess>answer) {
			console.log ("You're cold, guess lower.");

		} else if (prevhowfar==0) {  
			
			} else if (howfar>prevhowfar) {  //colder
				if (guess>answer) {
					console.log ("Yikes! You're really starting to freeze! Guess lower!")
				} else if (guess<answer) {
					console.log ("Yikes! You're really starting to freeze! Guess higher!")
				}
			} else if (howfar<prevhowfar) {  //warmer
				if (guess>answer) {
					console.log ("Ok, you're getting warmer ... guess a bit lower.")
				} else if (guess<answer) {
					console.log ("Ok, you're getting warmer ... guess a bit higher.")
				} else { 			
				console.log ("Sorry, that's not it.");
			};
		prevhowfar=howfar;

		
	//if guess = or not  / do we have a prevhowfar?
	//another guess?  need distance, if less = warmer / if more = colder
	//warmer - take the absolute value as distance. howfar=absolute(answer-guess)
	//if distance is greater - getting colder / if distance is getting lesser - getting warmer.
	//colder - if distance is greater - getting colder - etc

			
		};
		
	};	
});


