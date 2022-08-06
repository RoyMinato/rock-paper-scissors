let playerScore = 0;
let compScore = 0;

function updateScoreKeep (addPlayer, addComp){
    playerScore += addPlayer;
    compScore += addComp;
    score.textContent = `Player: ${playerScore}     Computer: ${compScore}`;
}


function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}


function winOrLose(playerChoice, compChoice) {
    if (playerChoice === 'Rock' && compChoice === 'Scissors' ||
        playerChoice === 'Paper' && compChoice === 'Rock' ||
        playerChoice === 'Scissors' && compChoice === 'Paper') {
            return true;
    } else {
        return false;
    }
}


//Each game is 5 rounds
function playRound (e) {
    if (e.target.nodeName != 'BUTTON' || e.target.textContent === 'Reset Game' ||
        playerScore >= 5 || compScore >= 5){ 
        return;
    }

    playerChoice = e.target.textContent;
    compChoice = getComputerChoice();

    if(playerChoice === compChoice) {
        prompt.textContent = `It's a draw! Both picked ${playerChoice}.`;
        return;
    }

    let playerWin = winOrLose(playerChoice, compChoice);

    if (playerWin) {
        updateScoreKeep(1,0);
        prompt.textContent = `You Win! ${playerChoice} beats ${compChoice}.`;
    } else {
        updateScoreKeep(0,1);
        prompt.textContent = `You Lose! ${compChoice} beats ${playerChoice}.`;
    }

    if(playerScore == 5 || compScore == 5){
        if (playerScore > compScore) {
            prompt.textContent = `You won the game! Reset to play again.`;
        }
        else {
            prompt.textContent = `You lost the game. Reset to play again.`;
        }
    }

}


const score = document.querySelector('.score');
const prompt = document.querySelector('.prompt');

score.setAttribute('style', 'white-space: pre;');

//div containing buttons but only respond to button clicks
const btns = document.querySelector('.choices'); 
btns.addEventListener('click', playRound);

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    updateScoreKeep(-playerScore, -compScore);
    prompt.textContent = `Make your move!`;
});

