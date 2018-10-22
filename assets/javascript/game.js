
// Initiaize variables
var material = ["ardmore", "balvinie", "bowmore", "caolila", "dalwhinne", "glenfiddich", "glenlivet",
 "glenmorangie", "jura", "lagavulin", "laphroaig", "macallan", "oban", "talisker"];
var gamesWon = 0;
var gamesLost = 0;

var guess = "";
var playerDisplay = [];
var won = false;
var usedLetters =[];
var usedLettersDisplay = [];
var answer = [];
var playerGuess = false;
var numGuess = 4;
var indexGuess = 0;
var selection = [];
var keepPlaying = true;
var endPlay = false;

 
    selection = material[Math.floor(Math.random() * material.length)];
   
    for (i=0; i<selection.length; i++) {
        playerDisplay[i*2] = " ";
        playerDisplay[i*2+1] = "_";
    }   
    document.getElementById("results").innerHTML = playerDisplay.join(""); 
    document.getElementById("numGuess").innerHTML = numGuess;
    //console.log("The selection is " + selection);

        document.getElementById('formGuess').addEventListener('keyup', function(event) { 
        guess = event.key; 
        //console.log('Key that was pressed: ' + guess);
        //console.log("Letter used " + usedLetters.indexOf(guess));
        if(endPlay) {
            document.getElementById("gamesWon").innerHTML = gamesWon;
            document.getElementById("gamesLost").innerHTML = gamesLost;
            //document.getElementById("message").innerHTML = "Game over. Refresh Browser to play again"
            console.log("end play " + endPlay)
            guess = "";
            playerDisplay = [];
            endPlay = false;
            usedLetters =[];
            usedLettersDisplay = [];
            answer = [];
            playerGuess = false
            indexGuess = 0;
            selection = [];
            selection = material[Math.floor(Math.random() * material.length)];
   
            for (i=0; i<selection.length; i++) {
                playerDisplay[i*2] = " ";
                playerDisplay[i*2+1] = "_";
            }   
            document.getElementById("results").innerHTML = playerDisplay.join(""); 
            document.getElementById("numGuess").innerHTML = numGuess;
            //console.log("The selection is " + selection);
            document.getElementById("message").innerHTML = "Game over - Play again";
        }
        else{

        if (usedLetters.indexOf(guess) !== -1) {
            //console.log("You have used the letter " +guess)
            document.getElementById("message").innerHTML = "You have used this letter. Please select another";    
                } 
            else {
                usedLetters += guess
                usedLettersDisplay += " "
                usedLettersDisplay += guess
                //console.log("Used letters with latest Guess " + usedLetters);
                    for (i=0; i<selection.length; i++) {
                        if (guess === selection[i]) {
                            answer[i] = guess;
                            playerDisplay[i*2+1] = guess;
                            playerGuess = true;
                            trimmedAnswer = answer.join("");
                            //console.log("Results " + trimmedAnswer);
                        }
                    }
                
                    document.getElementById("letUsed").innerHTML = usedLettersDisplay;
                    document.getElementById("results").innerHTML = playerDisplay.join("");    
                    
                    if (playerGuess) {
                        //console.log("You chose well.");
                        document.getElementById("message").innerHTML = "You chose well";
                        playerGuess = false;
                    }
                    else {
                        //console.log("You chose poorly.");
                        indexGuess = indexGuess + 1;
                        numGuessLeft = numGuess - indexGuess;
                        //console.log("Plays Left" + numGuessLeft);
                        
                        document.getElementById("numGuessLeft").innerHTML = numGuessLeft;
                        document.getElementById("message").innerHTML = "You chose poorly";
                        }
                
                    
                    
                
                    if (selection === answer.join("")) {
                        
                        document.getElementById("message").innerHTML = "Congratulations - You have won the Game";
                        endPlay = true;
                        gamesWon = gamesWon + 1;
                        console.log(endPlay);
                    } 
                    if (numGuessLeft === 0) {                        
                        
                        document.getElementById("message").innerHTML = "You have lost the Game";
                        endPlay = true;
                        gamesLost = gamesLost + 1;
                        console.log(endPlay);
                    }
                    else if (numGuessLeft < 0) {
                        document.getElementById("message").innerHTML = "The Game is lost. Restart to play again";
                    }
                } 
                }
                })
            
                
           