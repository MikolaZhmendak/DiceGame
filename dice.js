"use strict"

function selectPrevoiusFourWorlCupHostCountrys(){
    let fourSidedDice = [" ", "Brazil(20??)", "South Africa(20??)",
                       "Germany(20??)", "South Korea and Japan(20??)"];
   let answerCounter = 0;                    
   let diceRoll = Math.random() *4 +1;
   diceRoll = Math.floor(diceRoll);
   let userinput = window.prompt(fourSidedDice[diceRoll] + ". Can you gess what year the country above hosted the World Cup?", "");
   if ((userinput === null) || (userinput === "")) {
   	alert("This input is not valid. Plese try again.");
  	window.prompt(fourSidedDice[diceRoll] + ". Can you gess what year the country above hosted the World Cup?", "");

   }
   else{
   	switch(diceRoll){


   		case 4:
   		if (userinput === "02"){
   			alert("You are correct");
   			answerCounter ++;
   			break;
        }
   		case 2:
   		if (userinput === "10") {
            alert("You are correct");
            answerCounter ++;
   		    break;
   		}
   		case 3:
   		if (userinput === "06"){
   			alert("You are correct");
   			answerCounter ++;
   			break;
   		}
   		case 1:
   		if (userinput === "14"){
   			alert("You are correct");
   			answerCounter++;
   		}
   		else{
   			alert("You are wrong");
   			answerCounter --;
   		}
   }
}
}




function selectAssosiation(){
	let sixSidedDice = [" ", "AFC(Asian Footbal Confederation)",
	                    "CAF(Confederation African Footbal)",
	                    "CONCACAF(Confederation of North, Centural America and Carabian Assoisation)",
	                    "CONMEBOL(South America Footbal Assisiation)",                                   
	                    "OFC(Oceania Footbal Assisiation",
	                    "UEFA(Union of Europian Assisiation)"];
	let  diceRoll = Math.random() *6 +1;
	     diceRoll = Math.floor(diceRoll);
   // return (sixSidedDice[diceRoll]);
    alert(sixSidedDice[diceRoll]);
}

function selectWorldCupWinners(){
	let eightSidedDice = [" ", "Brazil(?)", "Germany(?)", "Italy(?)", "Argentina(?)",
	                      "Uruguay(?)", "France(?)", "England(?)", "Spain(?)"];
	let answerCounter = 0;                      
	let diceRoll = Math.random()* 8 +1;
	    diceRoll = Math.floor(diceRoll);
	    let userinput = window.prompt(eightSidedDice[diceRoll] + ". Can you guess how many World Cup titles this country has?", "");
	    if ((userinput === null) || (userinput === "")) {
   	alert("This input is not valid. Plese try again.");
  	window.prompt(eightSidedDice[diceRoll] + ". Can you guess what year the country above hosted the World Cup?", "");
  }
    else {
    	   if(diceRoll === 1){
        	if(userinput === "5"){
    	   	alert("You are spot on");
    	   	answerCounter++;
    	      }	
    	      } 
    	    if(diceRoll === 2 || diceRoll === 3){
    	    	if(userinput === "4"){
    	    alert("You are spot on");
    	    answerCounter++;		
    	    	}
    	    }
    	    if(diceRoll === 4 || diceRoll === 5){
    	    	if(userinput === "2"){
    	    alert("You are spot on");
    	    answerCounter++;		
    	    	}
    	    }
    	    if (diceRoll === 6 || diceRoll === 7 || diceRoll === 8){
    	    	if (userinput === "1"){
    	    alert("You are spot on");
    	    answerCounter++;		
    	    	}
    	    }
    	    else {
    	    	alert ("You answer is not correct.");
    	    	answerCounter--;
    	    }
    	  }
      //   return(eightSidedDice[diceRoll]);
}



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

function selectWorldCupFirstApperance(){
	let tenSidedDice = [" ",
	                            "Ecuador", "Senedal", "Slovenia", "Ghana", "Ukraine",
	                            "Ivory Coast", "Croatia", "Japan", "Icland", "Panama"];
	let diceRoll = Math.random() *10 +1;
	    diceRoll = Math.floor(diceRoll);
	    diceRoll = Math.floor(diceRoll);
	    let userinput = window.prompt(tenSidedDice[diceRoll] + ". Can you guess what year this country first appeared in World Cup?", "");
	    if ((userinput === null) || (userinput === "")) {
   	alert("This input is not valid. Plese try again.");
  	window.prompt(tenSidedDice[diceRoll] + ". Can you guess what year this country first appeared in World Cup?", "");
  }
    else {
    	   if(diceRoll === 1 || diceRoll === 2 || diceRoll === 3){
        	if(userinput === "2002"){
    	   	alert("Very nice! You go it");
    	      }	
    	      } 
    	    if(diceRoll === 4 || diceRoll === 5 || diceRoll === 6){
    	    	if(userinput ==="2006"){
    		alert("Very nice! You go it");
    	      }
    	      }	
    		if(diceRoll === 7 || diceRoll === 8){
    			if(userinput === "1998"){
    			alert("Very nice! You go it")	
    	    	}
    	    	}
    	    if(diceRoll === 9 || diceRoll === 10){
    	    	if(userinput === "2018"){
    	    		alert("Very nice! You go it")
    	    	}
    	    	else {
    	    		alert("Almost there. Nice try");
    	    	}
    	    }
            }
            }
                     
    		
	    
  	   
	   function selectTopGoalScorers(){
    let twelveSidedDice = [" ",
                                "Miroslav Klose", "Pele", "Ronaldo",
                                "Gabriel Batistuta", "Diego Maradona", "Roberto Baggio",
                                "Paolo Rossi", "Gary Lineker", "David Villa",
                                "Eusebio", "Just Fontaine", "Oleg Salenko"];
    let diceRoll = Math.random() *12 +1;
        diceRoll = Math.floor(diceRoll);
        let userinput = window.prompt(twelveSidedDice[diceRoll] + ". Can you guess what country this player is from?", "");
        if ((userinput === null) || (userinput === "")) {
    alert("This input is not valid. Plese try again.");
           userinput = window.prompt(twelveSidedDice[diceRoll] + ". Can you guess what country this player is from?", "");
    }
    else {
           if(diceRoll === 1){
            if(userinput === "Germany"){
            alert("Ding Ding Ding. You got yourself a chicken wing");
                }   
 } 
            if(diceRoll === 2 || diceRoll === 3){
                if(userinput === "Brazil"){
            alert("Ding ding ding. You got yourself a chicken wing");       
                }
            }
            if(diceRoll === 4 || diceRoll === 5){
                if(userinput === "Argentina"){
            alert("Ding ding ding. You got yourself a chicken wing");       
                }
            }
            if (diceRoll === 6 || diceRoll === 7){
                if (userinput === "Italy"){
            alert("Ding ding ding. You got yourself a chickn wing");        
                }
            }
            if (diceRoll === 8){
                if (userinput === "England"){
                    alert("Ding ding ding. You got yourself a chicken wing");
                }
            }
            if (diceRoll === 9){
                if (userinput === "Spain"){
                    alert("Ding ding ding. You got yourself a chicken wing");
                }
            }
            if(diceRoll === 10){
                if (userinput === "Portugal"){
                    alert("Ding ding ding. You got yourself a chicken wing");
                }
            }
            if(diceRoll === 11){
                if(userinput === "France"){
                    alert("Ding ding ding. You got yourself a chicken wing");
                }
            }
            if(diceRoll === 12){
                if(userinput ==="Russia"){
                    alert("Ding ding ding. You got yourself a chicken wing");
                }
            }
            else {
                alert ("You answer is not correct.");
            }
          }
          }
    
