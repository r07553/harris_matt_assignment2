//alert("JavaScript works!");
// Matt Harris
// 01/17/2013
// Project 2
// SDI 1301
// Video Games

// Start

// My Variables
var myName = "Matt";
var myConsoles = 3;
var myFavGames = ["Call of Duty Black Ops II", "Far Cry 3", "Halo 4", "Borderlands 2", "Assassins Creed III"]
var minutesPerGame = [35, 120, 26, 40, 50]

console.log("My name is " + myName + ", I have " + myConsoles + " Game Consoles.");
console.log("My favorite games to play when I have time are, " + myFavGames);

//Procedure

var hoursToPlay = function(freeHours){
	if (freeHours > 1) {
		console.log("I have " + freeHours + " hours to play games before I do my homework!");	
		} else {
			console.log("I dont have time for games today.")
		}	
};

hoursToPlay(4);

//Boolean Function
console.log("Before I start playing games I want to get something to eat.");

var myMeal = function(slicesOfPizza, pop){
	if(slicesOfPizza + pop > 0) {
		var full = true
		return full; 
	} else {
		var hungry = false
		return hungry;
	}
};

var iEat = myMeal(4, 1);

console.log("It is " + iEat + " that I eat pizza and drink pop, then I have to clean up the dishes!");

// Number Function
var cleanup = function(dishes){
	while (dishes < 5) {
		console.log(dishes + " dishes cleaned.");
		dishes = dishes + 1;
	}
	return dishes;
};

var dishesDone = cleanup(0);
console.log(dishesDone + " dishes cleaned. Now to begin playing video games!");

// String Function

var consoleToPlay = function(thisConsole, thatConsole){
	var microsoft = (" is fun to play with my friends.");
	var sony = (" has great graphics.")
	return thisConsole + microsoft + " but " + thatConsole + sony;
};

var decision = consoleToPlay("Xbox", "PS3");
console.log(decision);
console.log("I will play Xbox first then I will play PS3.");

// Array Function
var playingSomeGames = function(games, time){
	for (var gameNumber = 0; gameNumber < games.length; gameNumber++){
		var iPlayed = games; 
		var gameName = games[gameNumber],
			minutesThisGame = time[gameNumber];
		console.log("Starting to play " + gameName + " for " + minutesThisGame + " minutes.");
		for (var minutes = 0; minutes < minutesThisGame; minutes+= 15) {
		var minutesLeft = minutesThisGame - minutes;
		console.log(minutes + " played, " + minutesLeft + " left.");
	}
		console.log("I am bored with " + gameName + ".");
		return iPlayed;
	
}
};

var hadFun = playingSomeGames(myFavGames, minutesPerGame);
console.log("I played " + hadFun + " until I got bored.");

// Output

console.log("I had a lot of fun playing games, but now I better start my homework.");

//Finish

