
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
				check();
				game();
		});
		$("#userGuess").keydown(function(enter) {
			if (enter.keyCode===13) {
	//			enter.preventDefault();
	//			return false;
				console.log("Enter was pressed");
				check()
				game();
			};
		}); 
	};

	getGuess();  //initiates.
	
	/*--- Check for validity ---*/
	function check() {
		guess = parseInt($("#userGuess").val());
		if (isNaN(guess)) {
			console.log("Sorry, this is not a number, try again.")
		} else if (guess<1 || guess>100) {
			console.log("Sorry, you must enter a number between 1 and 100. Try again.");
		};
	};
	
	
	/*--- Maybe I need a function that tracks previous how far ---*/
	function far() {
		howfar=Math.abs(answer-guess);
		prevhowfar=Math.abs(answer-guesses);
		guesses=[];
		guesses.push(guess);		
	};

	/*--- Play the game ---*/
	
	function game() {
		tries+=1;
		$("#count").text(tries);
		far();
		
		
		// simple logic works
		/* if (guess===answer) {  
			console.log ("Congratulations! You got it! The secret number was " +answer+ "!")
		} else if (guess<answer) {
			console.log ("Cold, guess higher.")
		} else if (guess>answer) {
			console.log ("Cold, guess lower.");  */
		
		
		if (guess===answer) {  
			console.log ("Congratulations! You got it! The secret number was " +answer+ "!")
			tries=0;
			
		} else if (guess > answer) {
			if (howfar > prevhowfar) {
				console.log ("Yikes! You're really starting to freeze! Guess lower!")
			} else if (howfar < prevhowfar) {
				console.log ("Ok, you're getting warmer ... guess a bit lower.")
			};
		} else if (guess < answer) {
			if (howfar > prevhowfar) {
				console.log ("Yikes! You're really starting to freeze! Guess higher!")
			} else if (howfar < prevhowfar) {
				console.log ("Ok, you're getting warmer ... guess a bit higher.")
			};
		};			
	};	
});


