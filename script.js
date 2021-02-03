/*1/28/2021 Troll Game project */

//definition of the trollGame() function which runs the game
function trollBattle() {
	// intial prompt question for the user which gets stored in a variable

	//swtch statement to handle the inital players choise
	var action = window.prompt("You're walking through the forest minding your own business and a troll suddently appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();
switch(action){
	case "FIGHT": {
		var skill = window.prompt('Are you a skilled fighter? (YES OR NO)').toUpperCase();
		var strong = window.prompt('Are you stronger than a troll? (YES OR NO)').toUpperCase();
		// If statement that analyzes the users responses
		if(skill === "YES" || strong === "YES") {
			// the user responded yes to at least one of those prompts
			// write the positive result to the document
			document.getElementById('result').innerHTML = "You can be either strong or more skilled than a troll to survive!<br>You live another day!";
			// clear any losing messages from the document
			document.getElementById("death").innerHTML = "";
			// play the winning audio file
			document.getElementById("win").play();

		} else {
			// the user responded no to both of the prompts
			//write the negative result to the document
			document.getElementById('death').innerHTML = "You're not skilled or strong? why did you fight a troll?<br>You have died!";
			// clear any positive messages from the document
			document.getElementById('result').innerHTML = '';
			// play the losing audio file
			document.getElementById('lose').play();

		}
		break;
	}
	case 'RUN':{
		var fast = window.prompt('Are you fast? (YES OR NO)').toUpperCase();
		// If statement that analyzes the users response
		if(fast === 'YES'){

		} else {
			//write the negative result to the document
			document.getElementById('death').innerHTML = "You're coward! if youre going to run be fast! <br>You have died...";
			// clear any positive messages from the document
			document.getElementById('result').innerHTML = '';
			// play the losing audio file
			document.getElementById('lose').play();
		}
		break;
	}

	case 'BRIBE':{
		var money = window.prompt('You have to pay the troll-toll.\nDo you have any money? (Yes OR NO)').toUpperCase();
		//if they statement that checks the value of the money variable
		if(money === "Yes") {
			var amount = window.prompt('How much money do you have?\nPlease enter a NUMERIC VALUE.').toUpperCase();
			// CONVER THE STRING FROM PROMPT TO AN INTERGER
			amount = parseInt(amount);
			// check to see if the amount is enought to survive
			if(amount > 50) {
				// write the positive result to the document
			document.getElementById('result').innerHTML = "Great job! the troll is happy.<br>You can pass with your life.";
			// clear any losing messages from the document
			document.getElementById("death").innerHTML = "";
			// play the winning audio file
			document.getElementById("win").play();

			} else {
				// you dont have enough money and you lose
				//write the negative result to the document
			document.getElementById('death').innerHTML = 'The troll needs more money than that to let you pass!<br>You have died...';
			// clear any positive messages from the document
			document.getElementById('result').innerHTML = '';
			// play the losing audio file
			document.getElementById('lose').play();
			}
		} else {
			// you said No to have money, you lose
			//write the negative result to the document
			document.getElementById('death').innerHTML = 'What were you going to bribe with, your looks?<br>You have died...';
			// clear any positive messages from the document
			document.getElementById('result').innerHTML = '';
			// play the losing audio file
			document.getElementById('lose').play();
		}
		break;
	}

	default:{
		// the useer has not entered a valid choice to the intial prompt
		window.alert("You entered: " + action + '. Not a valid choice, please try again!');
		trollBattle();
		break;
		}


	} // end of switch statement
}

