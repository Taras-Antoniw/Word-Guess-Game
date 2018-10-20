
// Initiaize variables
var material = ["ardmore", "balvinie", "bowmore", "caolila", "dalwhinne", "glenfiddich", "glenlivet",
 "glenmorangie", "jura", "lagavulin", "laphroaig", "macallan", "oban", "talisker"];
var gamesWon = 0;
var gamesLost = 0;
var selection = [];
var playerDisplay = [];
var answer = [];
var guess = "";
var availLetters = [];
var usedLetters = [];
var play = "true";
var numGuess = 4;
var indexGuess = 0;
var gameson = "false";
var validLetter = "false";
var gameFinished = "false";
//varInit();
//alert(material);

// Play loop - play until player wants out
//do {
 // Initialize variables for the game
    var guess = "";
    var playerDisplay = [];
    var won = false;
    //var usedLetters = "";
    var usedLetters =[];
    var usedLettersDisplay = [];
    var answer = [];
    var playerGuess = false;
    var numGuess = 4;
    var indexGuess = 0;
    //var selection = "";
    var selection = [];
    var keepPlaying = true;
    var play = true;
    varInit();
    // Game initialization
    // Select item of player to guess
    /*  Inputs length of material
        Outputs -   random selection for player to guess
                    Set up player display */
    var selection = material[Math.floor(Math.random() * material.length)];
    //alert("Game selection " + selection);
   // Setup play display
    for (i=0; i<selection.length; i++) {
        //i2 = i * 2;
        playerDisplay[i*2] = " ";
        playerDisplay[i*2+1] = "_";
        //answer +="_";
    }   
    document.getElementById("results").innerHTML = playerDisplay.join(""); 
    document.getElementById("numGuess").innerHTML = numGuess;
//alert("Display player display" + playerDisplay);
//alert("Display selection " + selection);

    // Game play routine
    /*  Processes in this routine include:
            Player character entry
            Validation that the letter has not been used
            Check if character is in the selected word
                Notify player if the charcter is in the word or not
            Update the following:
                Player display with current correct characters
                Update number of quesses left: 
                    Increment by one of quess was not correct
                    Display updated totals
            Check if game is complete:
                Player has correctly guessed the work - update with success
                Player has run out of guesses - update with loss. */

    //do {
        //var guess = prompt("Please enter a letter.");
        var playerGuess = false;
        document.getElementById('formGuess').addEventListener('keyup', function(event) { 
        guess = event.key; 
        console.lg('Key that was pressed: ' + key);
        })
        //alert("Length used letters " + usedLetters.length);
        //alert("Player guess" + playerGuess);
        // Verify that letter has not been used
        //if (usedLetters.length === 0) {
            //usedLetters += guess;       
           // }
            //alert("Used Letters " + usedLetters);
            //alert("Selection Length" + selection.length);
            //alert("Answer Length" + answer.length);
        
            //alert("Index of Guess " + usedLetters.indexOf(guess));
            if (usedLetters.indexOf(guess) !== -1) {
            //alert("Guess "+ guess);
            //alert("Contents of usedLetters" + usedLetters);
            //alert("You have used this letter. Please select another.");
            document.getElementById("message").innerHTML = "You have used this letter. Please select another";    
                }
            //See if letter is in the seletion
                else {
                    usedLetters += guess
                    usedLettersDisplay += " "
                    usedLettersDisplay += guess
                    //alert("Used letters with latest Guess " + usedLetters);
                    for (i=0; i<selection.length; i++) {
                        if (guess === selection[i]) {
                            answer[i] = guess;
                            //i1=i*2+1;
                            playerDisplay[i*2+1] = guess;
                            playerGuess = true;
                            //alert ("Selection index " + i + " Contents of Selection i " + selection[i]);
                            //alert ("Display play display index " + i1);
        
                            //alert ("Player display " + playerDisplay.join(""));
                            //alert ("display selection " + selection);
                            //alert ("Player Answer " + answer);
                            var trimmedAnswer = answer.join("");
                            //alert ("Trimmed answer " + trimmedAnswer);
                            //alert ("Used Letters " + usedLettersDisplay)
                        
                        }
                    document.getElementById("letUsed").innerHTML = usedLettersDisplay;
                    document.getElementById("results").innerHTML = playerDisplay.join("");    
                    }
                    if (playerGuess) {
                        //alert("You chose well.");
                        document.getElementById("message").innerHTML = "You chose well";
                    }
                    else {
                        //alert("You chose poorly.")
                        var indexGuess = indexGuess + 1;
                        var numGuessLeft = numGuess - indexGuess;
                        //alert("Plays Left" + numGuessLeft);
                        document.getElementById("numGuessLeft").innerHTML = numGuessLeft;
                        document.getElementById("message").innerHTML = "You chose poorly";
                    }
                    if (selection === answer.join("")) {
                        //alert ("Congratulations - You have won the Game");
                        var keepPlaying = false;
                        var gamesWon = gamesWon + 1;
                        document.getElementById("numWins").innerHTML = gamesWon;
                        document.getElementById("message").innerHTML = "Congratulations - You have won the Game";
                        //var usedLetters = [];
                        //alert ("Contents of used letters " + usedLetters);
                    } 
                    if (indexGuess === numGuess) {
                        //alert("You have lost the Game");
                        var keepPlaying = false;
                        var gamesLost = gamesLost + 1;
                        document.getElementById("numLoses").innerHTML = gamesLost;
                        document.getElementById("message").innerHTML = "You have lost the Game";
                        //var usedLetters = [];
                        //alert ("Contents of used letters " + usedLetters);
                    }   
                }   

            
        
            //var gameFinished = confirm ("Keep going");
            //alert ("Keep going " + keepPlaying);
            //var gameGuess = "false";
            //alert ("Game Guess " + gameGuess);
    //} while (keepPlaying);

    // Varify if play guess is in the selection
//var gameFinished = false;

//var play = confirm ("Play again?");
//alert(play);

//}while(play);
document.write("Thank you for playing!");

function varInit() {
    var guess = "";
    var playerDisplay = [];
    var won = false;
    var usedLetters = "";
    var usedLetters =[];
    var usedLettersDisplay = [];
    var answer = [];
    var playerGuess = false;
    var numGuess = 4;
    var indexGuess = 0;
    var selection = [];
    var keepPlaying = true;
    var play = true;
}

function myGuess () {
    var guess = document.getElementById("formGuess")
}