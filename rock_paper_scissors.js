//Function to determine the winner at the end of each round
//Rock beats Scissors, Scissors beat Paper, and Paper beats Scissors

function playRound(userChoice, compChoice) {
	if (compChoice == "rock") {
		if (userChoice == "paper") {
			return("user")
		} else if (userChoice == "scissors") {
			return("computer")
		} else {
			return("tie")
		}
	} else if (compChoice == "paper") {
		if (userChoice == "scissors") {
			return("user")
		} else if (userChoice == "rock") {
			return("comp")
		} else {
			return("tie")
		}
} else {
		if (userChoice == "rock") {
			return("user")
		} else if (userChoice == "paper") {
			return("comp")
		} else {
			return("tie")
    }
  }
}


//Set the initial score for the start of the game
let userScore = 0;
let compScore = 0;

//Select all the buttons on the page and place them into a node

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {

    let userSelect = button.id;

    //After user presses a button the computer makes a random choice
    const computerNumber = Math.floor(Math.random() * 3);
    let compSelection =  "";

    if (computerNumber == 0) {
      compSelection = "rock";
    }  else if (computerNumber == 1) {
      compSelection = "paper";
    } else {
      compSelection = "scissors";
    };

    //Runs the function and outputs the winner
    if (playRound(userSelect, compSelection) == "user") {
      console.log("You win this round!");
      userScore += 1
    } else if (playRound(userSelect, compSelection) == "comp") {
      console.log("You lost this round :/");
      compScore += 1
    } else {
      console.log("The game is a tie!");
    };

    console.log(userScore + ",  " + compScore);

  });
});
