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
function randomRange(min, max) {
	// returm a random number between the range
	return Math.floor(Math.random() * ((max - min)+1) + min);
}

$(document).ready(function() {


	function gemRandom() {
		gem1 = randomRange(1,19);
		gem2 = randomRange(1,19);
		gem3 = randomRange(1,19);
		gem4 = randomRange(1,19); 
		gem5 = randomRange(1,19);
		gem6 = randomRange(1,19);

		$("#gem1").attr("data-value", gem1);
		$("#gem2").attr("data-value", gem2);
		$("#gem3").attr("data-value", gem3);
		$("#gem4").attr("data-value", gem4);
		$("#gem5").attr("data-value", gem5);
		$("#gem6").attr("data-value", gem6);

	}

	var randomNumber = randomRange(19, 120);
	var userNumber = 0;
	var wins = 0;
	var losses = 0;

	var gem1, gem2, gem3, gem4, gem5, gem6;
	gemRandom();
	
	var score = 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>";

	document.querySelector("#scoreboard").innerHTML = score;


var play = function() {
	randomNumber = randomRange(19, 120);
	userNumber = 0;
	gemRandom();

		var randNumber = 
		"<p>" + randomNumber + "</p>";

		document.querySelector('#randNumber').innerHTML = randNumber;

		var uNumber = 
		"<p>" + userNumber + "</p>";

		document.querySelector('#uNumber').innerHTML = uNumber;
}


// WHEN CLICKED, "USER NUMBER" INCREASES BY VALUE OF GEM

$('.gems').on('click', function() {
	// var score = $(this).attr('data-score');
	userNumber += Number($(this).attr("data-value"));
	$('#uNumber').html(userNumber);
	displayRandom();

});


function displayRandom() {
	
	if (userNumber === randomNumber) {
		wins++;
		alert("Congrats! You won!");
		play();

	} else if (userNumber > randomNumber) {
		losses++;
		alert("Better luck next time!");
		play();

	};

		score = 
		"<p>Wins: " + wins + "</p>" + 
		"<p>Losses: " + losses + "</p>";

		document.querySelector("#scoreboard").innerHTML = score;
};

		var randNumber = 
		"<p>" + randomNumber + "</p>";

		document.querySelector('#randNumber').innerHTML = randNumber;

		var uNumber = 
		"<p>" + userNumber + "</p>";

		document.querySelector('#uNumber').innerHTML = uNumber;

});


