function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}


function winOrLose(playerChoice, compChoice) {
    if (playerChoice === 'rock' && compChoice === 'scissors' ||
        playerChoice === 'paper' && compChoice === 'rock' ||
        playerChoice === 'scissors' && compChoice === 'paper') {
            return true;
    } else {
        return false;
    }
}


function playOneRound(playerChoice, compChoice) {
    playerChoice = playerChoice.toLowerCase();
    
    while(playerChoice === compChoice) {
        compChoice = getComputerChoice();
    }

    let playerWin = winOrLose(playerChoice, compChoice);
    let res;

    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    compChoice = compChoice[0].toUpperCase() + compChoice.slice(1);

    if (playerWin) {
        res = [`You Win! ${playerChoice} beats ${compChoice}.`, 1];
    } else {
        res = [`You Lose! ${compChoice} beats ${playerChoice}.`, 0];
    }

    return res;
}


function game() {
    let playerScore = 0;
    let playerChoice;
    let compChoice;
    let res;
    let options = ["rock", "paper", "scissors"];

    for(let round = 0; round < 5; round++) {
        playerChoice = prompt('Enter your choice:');
        compChoice = getComputerChoice();

        while(!options.includes(playerChoice.toLowerCase())) {
            playerChoice = prompt("Invalid input, please enter 'rock', 'paper', or 'scissors'.");
        }

        res = playOneRound(playerChoice, compChoice);
        console.log(res[0]);

        playerScore += res[1];
    }

    if (playerScore >= 3) {
        console.log(`You won ${playerScore} out of 5 rounds! You win the game!`)
    } else {
        console.log(`You won ${playerScore} out of 5 rounds. You lost the game.`)
    }
}

game();