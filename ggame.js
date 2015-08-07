// Game HTML element holder
var gameElement = document.getElementById("game");

// Get user input
var musician = prompt("Who is your favorite musician?");

// Create an arbitrary number of groupies between 0 and 10000 and print to console (for debug)
var groupies = Math.round(Math.random() * 10000);
console.log(groupies);

// And get more user input (the random math was moved to directly before this
// statement to allow for source-spying cheating while answering this question.)
var guess = prompt("How many groupies do you think they have?");

// Split musician input string into an array of all (first, middle, last, anything else with a space)
var fullMusicianNameArray = musician.split(" ");
var mFirstName = fullMusicianNameArray[0];

// Check guess and number and write message according to the input
if(groupies > 9000 && guess > 9000 && groupies > guess) {
  gameElement.innerHTML += "<h2>WOW!!!</h2><p>Over 9000? What a machine " + mFirstName + 
    " is. You're wrong, though, (s)he has almost " + groupies + ".</p>";
}else if(groupies > 9000 && guess > 9000 && groupies < guess){
  gameElement.innerHTML += "<h2>Hah you're way over.</h2><p>I'm a close, personal friend of " + mFirstName + 
    "'s and (s)he has a ridiculous number of groupies.  In fact, some would say it's over 9000, and they would be right.  Actually, the true figure is " 
    + groupies + ", give or take a couple.  Don't worry about how I know.</p>";
}else if(guess > groupies) {
  gameElement.innerHTML += "<h2>You thought how many?!</h2><p>I know " + 
  mFirstName + " personally, and (s)he only has " + groupies + "!</p>";
}else if(guess < groupies) {
  gameElement.innerHTML += "<h2>You underestimated " + mFirstName + 
  " greatly</h2><p>I know for a FACT that (s)he has over " + groupies + "!</p>";
}else if(guess == groupies){
  gameElement.innerHTML += "<h1>HOLY CHEESE AND RICE!?!</h1><p>You're right!  Seriously!  Don't ask me how I know this, but " 
    + mFirstName + " has no more or less than " + guess + "!</p>";
}else {
  gameElement.innerHTML += "<h2>I don't understand...</h2><p>Something was wrong with your guess.  DO try again?</p>";
}

//And, finally, write a button to refresh the page and play again.
gameElement.innerHTML += "<button type='button' onClick='window.location.reload()'>Play Again</button>";