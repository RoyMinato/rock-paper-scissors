function getComputerChoice () {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}


function winOrLose (playerChoice, compChoice) {

}


function playOneRound (playerChoice, compChoice) {
    playerChoice = playerChoice.toLowerCase();
    let outcome = winOrLose(playerChoice, compChoice)

    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
    compChoice = compChoice[0].toUpperCase() + compChoice.slice(1);

    if (outcome) {
        let res = `You Win! ${playerChoice} beats ${compChoice}.`;
    } else {
        let res = `You Lose! ${compChoice} beats ${playerChoice}.`;
    }

    return res
}