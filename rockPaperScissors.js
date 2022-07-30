let playerScore = 0;
let compScore = 0;
let scoreKeep = `Player: ${playerScore}   Computer: ${compScore} \r\n`

function updateScoreKeep (addPlayer, addComp){
    playerScore += addPlayer;
    compScore += addComp;
    scoreKeep = `Player: ${playerScore}   Computer: ${compScore} \r\n`
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
        res.textContent = scoreKeep + `It's a draw! Both picked ${playerChoice}.`
        return;
    }

    let playerWin = winOrLose(playerChoice, compChoice);

    if (playerWin) {
        updateScoreKeep(1,0);
        res.textContent = scoreKeep + `You Win! ${playerChoice} beats ${compChoice}.`;
    } else {
        updateScoreKeep(0,1);
        res.textContent = scoreKeep + `You Lose! ${compChoice} beats ${playerChoice}.`;
    }

    if(playerScore == 5 || compScore == 5){
        if (playerScore > compScore) {
            res.textContent = scoreKeep + `You won 5 rounds first! You won the game!`;
        }
        else {
            res.textContent = scoreKeep + `You lost 5 rounds so you lost the game.`;
        }
    }

}


const res = document.querySelector('#results');
res.setAttribute('style', 'white-space: pre;')
res.textContent = scoreKeep + `Make your move!`;

//div containing buttons but only respond to button clicks
const btns = document.querySelector('#choices'); 
btns.addEventListener('click', playRound);

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    updateScoreKeep(-playerScore, -compScore);
    res.textContent = scoreKeep + `Make your move!`;
});

