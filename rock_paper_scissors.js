//Welcome the user to the game and explain how to play
console.log("Welcome to Rock, Paper, Scissors!");
console.log("Rock beats scissors, scissors beats paper, and paper beats rock!")
console.log("First to win three rounds wins the game! Good Luck!")

//The playing function is determined, with paper beating rock, scissors beating paper, and rock beating scissors
//If computer selects Paper, user wins if scissors and loses if rock
//If computer selects Scissors, user wins if rock and loses if paper
//If computer selects Rock, user wins if paper and loses if scissors

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

//function to run the game until someone has won three rounds
function playGame() {

  let userScore = 0
  let compScore = 0

  while (userScore < 3 || compScore < 3) {

    //The computer generates a number, 0 is rock 1 is paper and 2 is scissors
    const computerNumber = Math.floor(Math.random() * 3);
    let computerSelection =  ""

    if (computerNumber == 0) {
      computerSelection = "rock"
    }  else if (computerNumber == 1) {
      computerSelection = "paper"
    } else {
      computerSelection = "scissors"
    }

    //User is prompted for their selection
    let userSelection = prompt("Please enter your rock, paper, or scissors:");

    //Run the function and output the winner

    if (playRound(userSelection, computerSelection) == "user") {
      console.log("You win this round!")
      userScore += 1
    } else if (playRound(userSelection, computerSelection) == "comp") {
      console.log("You lost this round :/")
      compScore += 1
    } else {
      console.log("The game is a tie!")
    }
    //Tally the final 

    if (userScore == 3) {
      return "You won the game!"
    } else if (compScore == 3) {
      return "You lost the game :("
    }
  }
}

// Run the game and declare final winner

console.log(playGame())
