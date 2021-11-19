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
    const statusContainer = document.querySelector('#statusUpdates');

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
      statusContainer.textContent = "You win this round!";
      userScore += 1;
    } else if (playRound(userSelect, compSelection) == "comp") {
      statusContainer.textContent = "You lost this round :/";
      compScore += 1;
    } else {
      statusContainer.textContent = "The game is a tie!";
    };

    //Writes the computer and user scores to the webpage
    const userContainer = document.querySelector('#user');
    userContainer.textContent = userScore;

    const compContainer = document.querySelector('#computer');
    compContainer.textContent = compScore;

    if (compScore == 5) {
      statusContainer.textContent = 'The computer wins the game :/ \nPress the button to play again';
      compScore = 0;
      userScore = 0;
    } else if (userScore == 5) {
      statusContainer.textContent = 'You won the game! \nPress a button to play again!';
      compScore = 0;
      userScore = 0;
    };

  });
});
