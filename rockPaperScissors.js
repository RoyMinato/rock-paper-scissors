function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}


function winOrLose (playerChoice, compChoice) {
    if (playerChoice === 'rock' && compChoice === 'scissors' ||
        playerChoice === 'paper' && compChoice === 'rock' ||
        playerChoice === 'scissors' && compChoice === 'paper') {
            return true;
    } else {
        return false;
    }
}


function playOneRound (playerChoice, compChoice) {
    playerChoice = playerChoice.toLowerCase();
    
    while(playerChoice === compChoice) {
        compChoice = getComputerChoice();
    }

    let playerWin = winOrLose(playerChoice, compChoice);
    let res;

    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    compChoice = compChoice[0].toUpperCase() + compChoice.slice(1);

    if (playerWin) {
        res = `You Win! ${playerChoice} beats ${compChoice}.`;
    } else {
        res = `You Lose! ${compChoice} beats ${playerChoice}.`;
    }

    return res;
}
