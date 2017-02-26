console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardTwo === cardFour) {
	alert ('Sorry, try again.');
} else if (cardTwo === cardOne) {
	alert ('You found a match!');
 } else if (cardThree === cardFour){
	alert ('You found a match!'); 
} else if (cardThree === cardTwo){
	alert ('Sorry, try again.'); 