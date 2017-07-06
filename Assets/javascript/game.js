/*
- ON PAGE LOAD, SCOREBOARD AND "YOUR NUMBER" TOTAL 0
- RANDOM NUMBER GENERATED BETWEEN 19 AND 120
- RANDOM NUMBERS ARE ASSIGNED TO EACH CRYSTAL BETWEEN 1 AND 19
- ON CLICK CRYSTALS, "YOUR NUMBER" INCREASES BY CRYSTAL VALUE
- IF "YOUR NUMBER" EQUALS "RANDOM NUMBER"
	- PLAYER WINS
	- RANDOM NUMBER CHANGES TO NEW NUMBER
	- CRYSTAL VALUES CHANGE TO NEW NUMBERS
	- "YOUR NUMBER" RESET TO 0
	- +1 POINT FOR WINS
- IF "YOUR NUMBER" IS > THAN "RANDOM NUMBER"
	- PLAYER LOSES
	- RANDOM NUMBER CHANGES
	- CRYSTAL VALUES CHANGE
	- "YOUR NUMBER" RESET TO 0
	- +1 POINT FOR LOSSES
*/


$(document).ready(function() {

	var randomNumber = Math.floor(Math.random() * ((120 - 19)+1) + 19);
	var userNumber = 0;
	var wins = 0;
	var losses = 0;

	//create function for this
	var gem1 = Math.floor(Math.random() * ((19 - 1)+1) + 1);
	var gem2 = Math.floor(Math.random() * ((19 - 1)+1) + 1);
	var gem3 = Math.floor(Math.random() * ((19 - 1)+1) + 1);
	var gem4 = Math.floor(Math.random() * ((19 - 1)+1) + 1); 
	var gem5 = Math.floor(Math.random() * ((19 - 1)+1) + 1);
	var gem6 = Math.floor(Math.random() * ((19 - 1)+1) + 1);


// WHEN CLICKED, "USER NUMBER" INCREASES BY VALUE OF GEM

//combine into one function (attr "data-attribute")
	$("#gem1").on("click", function() {
		console.log(gem1);
		userNumber += gem1;
		console.log(userNumber, 'user number')
		$('#uNumber').html(userNumber)
		displayRandom()
	});

	$("#gem2").on("click", function() {
		console.log(gem2);
		userNumber += gem2;
		console.log(userNumber, 'user number')
	});

	$("#gem3").on("click", function() {
		console.log(gem3);
		userNumber++;
		console.log(userNumber, 'user number')
	});

	$("#gem4").on("click", function() {
		console.log(gem4);
		userNumber++;
		console.log(userNumber, 'user number')
	});

	$("#gem5").on("click", function() {
		console.log(gem5);
		userNumber++;
		console.log(userNumber, 'user number')
	});

	$("#gem6").on("click", function() {
		console.log(gem6);
		userNumber++;
		console.log(userNumber, 'user number')
	});

function displayRandom() {
	

	if (userNumber === randomNumber) {
		alert("Congrats! You won!");
		wins++;
		randomNumber = Math.floor(Math.random() * ((120 - 19)+1) + 19);
		gem1 = Math.floor(Math.random() * ((19 - 1)+1) + 1);
		gem2 = Math.floor(Math.random() * ((19 - 1)+1) + 1);
		gem3 = Math.floor(Math.random() * ((19 - 1)+1) + 1);
		gem4 = Math.floor(Math.random() * ((19 - 1)+1) + 1); 
		gem5 = Math.floor(Math.random() * ((19 - 1)+1) + 1);
		gem6 = Math.floor(Math.random() * ((19 - 1)+1) + 1);	



	} else if (userNumber > randomNumber) {
		alert("Better luck next time!");
		losses++;

	}
};

		var randNumber = 
		"<p>" + randomNumber + "</p>";

		document.querySelector('#randNumber').innerHTML = randNumber;

		var uNumber = 
		"<p>" + userNumber + "</p>";

		document.querySelector('#uNumber').innerHTML = uNumber;


		var html = 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>";

		document.querySelector("#scoreboard").innerHTML = html;
 
});


