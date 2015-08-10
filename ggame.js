// Initializing all the non-function variables
var guess, groupies, musician, gameElement, fullMusicianNameArray, mFirstName, mLastName;

// Set game HTML element holder
gameElement = document.getElementById("game");

// Create an arbitrary number of groupies between 0 and 10000 and print to console (for debug/cheats)
var setGroupies = function() {
  groupies = Math.round(Math.random() * 10000);
  console.log(groupies);
}

// Get user input in various forms
var getUserInputBoth = function() {
  setGroupies();
  musician = prompt("Who is your favorite musician?");
  formatMusicianName();
  getUserInputGuess();
  checkGuess();
}
var getUserInputGuess = function() {
  guess = prompt("And how many groupies do you think they have?");
}
var getUserInputMusician = function() {
  setGroupies();
  musician = prompt("Who is your NEXT favorite musician?");
  formatMusicianName();
  getUserInputGuess();
  checkGuess();
}

// Split musician input string into an array of all (first, middle, last, anything else with a 
// space) and capitalize the first letter of each name.  Then, set first and last name.
var formatMusicianName = function() {
  fullMusicianNameArray = musician.split(" ");

  var tmpName;
  for (name in fullMusicianNameArray) {
    tmpName = fullMusicianNameArray[name].charAt(0).toUpperCase() + fullMusicianNameArray[name].substring(1);
    fullMusicianNameArray[name] = tmpName;
  }

  mFirstName = fullMusicianNameArray[0];
  mLastName = fullMusicianNameArray[fullMusicianNameArray.length - 1];
}

// Check guess and number and write message according to the input
var checkGuess = function() {
  var recognized = true;
  if(Math.abs(groupies - guess) < 1000 && groupies != guess) {
    gameElement.innerHTML += "<h2>OHHHH SO CLOSE!!!</h2><p>You were only off by " + Math.abs(groupies-guess) + "!  " + mFirstName + " has exactly " + groupies + "!  Were you cheating?</p>";
  }
  else if(groupies > 9000 && guess > 9000 && groupies > guess) {
    gameElement.innerHTML += "<h2>WOW!!!</h2><p>Over 9000? What a machine " + mFirstName + 
      " is. You're wrong, though, (s)he has almost " + groupies + ".</p>";
  }
  else if(groupies > 9000 && guess > 9000 && groupies < guess){
    gameElement.innerHTML += "<h2>Hah you're way over.</h2><p>I'm a close, personal friend of " + mFirstName + 
      "'s and (s)he has a ridiculous number of groupies.  In fact, some would say it's over 9000, and they would be right.  Actually, the true figure is " 
      + groupies + ", give or take a couple.  Don't worry about how I know.</p>";
  }
  else if(guess > groupies) {
    gameElement.innerHTML += "<h2>You thought how many?!</h2><p>I know " + 
    mFirstName + " personally, and (s)he only has " + groupies + ".</p>";
  }
  else if(guess < groupies) {
    gameElement.innerHTML += "<h2>You underestimated " + mFirstName + 
    " greatly</h2><p>I know for a FACT that (s)he has over " + groupies + "!</p>";
  }
  else if(guess == groupies) {
    gameElement.innerHTML += "<h1>HOLY CHEESE AND RICE!?!</h1><p>You're right!  Seriously!  Don't ask me how I know this, but " 
      + mFirstName + " has no more or less than " + guess + "!</p>";
  }
  else {
    gameElement.innerHTML += "<h2>I don't understand...</h2><p>That didn't make no damn sense.  DO try again?</p>";
    recognized = false;
  }

  // And, finally, write a button to refresh the page to clear and play again.
  gameElement.innerHTML += "<button type='button' onClick='window.location.reload()'>Start Again!</button>";

  // Another button to change options depending whether input was recognized
  if (recognized) {
    gameElement.innerHTML += "<button type='button' onClick='getUserInputMusician()'>And Besides Mr(s). " + mLastName + "?</button>";
  }
  else {
    gameElement.innerHTML += "<button type='button' onClick='getUserInputMusician()'>Change Musician</button>";
  }
}

// Main game function
getUserInputBoth();