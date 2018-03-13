"use strict"
function selectRandomCountries(){
    let eithgteenSidedDice = [" ", 
                               "Australia", "Iran", "Japan",
                               "Nigiria", "Egypt", "Morroco",
                               "Mexico",  "Costa Rica", "Panama",
                               "Peru", "Columbia", "Brazil",
                               "Russia", "England", "Poland",
                               "Portugal", "Serbia", "Sweden"];
    let diceRoll = Math.random() * 18 +1;
        diceRoll = Math.floor(diceRoll);
        let userinput = window.prompt(eithgteenSidedDice[diceRoll] + ". Can you tell what Footbal Assisiation this country belongs to (For example, England belongs to UEFA)?", "");
        if ((userinput === null) || (userinput === "")) {
    alert("This input is not valid. Plese try again.");
    window.prompt(eithgteenSidedDice[diceRoll] + " Can you tell what Footbal Assoisation this country belongs to (For example England belongs to UEFA) ?", "");
              }
    else {
           if(diceRoll === 1 || diceRoll === 2 || diceRoll === 3){
            if(userinput === "AFC"){
            alert("Very impresed with you football knowledge");
              } 
              } 
            if(diceRoll === 4 || diceRoll === 5 || diceRoll === 6){
                if(userinput ==="CAF"){
            alert("Very impresed with you football knowledge");
              }
              } 
            if(diceRoll === 7 || diceRoll === 8 || diceRoll === 9){
                if(userinput === "CONCACAF"){
                alert("Very impresed with you football knowledge");  
                }
                }
            if(diceRoll === 10 || diceRoll === 11 || diceRoll === 12){
                if(userinput === "CONMEBOL"){
                    alert("Very impresed with you football knowledge");
                }
            if(diceRoll === 13 || diceRoll === 14 || diceRoll === 15 || diceRoll === 16 || diceRoll === 17 || diceRoll === 18){
                if (userinput === "UEFA"){
                alert("Very impresed with you football knowledge");
            }
             }
             }
                else {
                    alert("Oh no. This was not easy question for you to answer. Better luck next time.");
                }
    
            
            }
            }
