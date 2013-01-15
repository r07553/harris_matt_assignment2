//alert("JavaScript works!");
// Matt Harris
// Date of Completion
// Project 2
// Video Games

//Start

//My Variables
var myGames = ["Halo 4", "Black Ops II", "Far Cry 3", "Borderlands 2"]; 
var minutesPerGame = [24, 36, 120, 16];
var hoursToPlay= (3);
var myName = ("Matt Harris");
var say = function(message){
	console.log(message)
};

var playOneGame = function(){
	var myGame = myGames[gameNum],
	minutesThisGame = minutesPerGame[gameNum];
	console.log("I start playing " + myGame + " for "
		+ minutesThisGame + " minutes.");
	for (var minutes = 0; minutes < minutesThisGame; minutes += 10) {
		var minutesLeft =   minutesThisGame - minutes;
		console.log(minutes + " minutes played, " + minutesLeft + " minutes until I finish 			    playing.");
	}
	console.log("I'm bored with " + myGame + ".");
};
for (var gameNum = 0; gameNum < myGames.length; gameNum++) {
	playOneGame();
};

console.log("Wow I have played video games for over " + hoursToPlay + " hours. Time to do some homework.");

say("My name is " + myNam +  "and I love playing video Games")
