let playerChoice;
let computerWins = 0;
let playerWins = 0;

const computerDisplay = document.querySelector('.computerSelection');
const playerDisplay = document.querySelector('.playerSelection');
const resultDisplay = document.querySelector('.result');
const scoreBoard = document.querySelector('.scoreBoard');

const chooseComputer = function() {
    const availableChoices = ['rock', 'paper', 'scissors'];
    return availableChoices[Math.floor(Math.random() * 3)];
};

const playRound = function(playerSelection, computerSelection){
    computerDisplay.innerHTML = `computer: ${computerSelection}`
    playerDisplay.innerHTML = `player: ${playerSelection}`
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        playerWins += 1;
    }
    else if (playerSelection === computerSelection){}
    else {
        computerWins += 1;
    }
}

const playFirstToFive = function(){

    const choiceButtons = document.querySelectorAll('.choice');

    choiceButtons.forEach(choice => choice.addEventListener('click', () => {
        playerChoice = choice.innerHTML;
        playRound(playerChoice, chooseComputer());
        scoreBoard.innerHTML = `Computer: ${computerWins}| Player: ${playerWins}`;
        if(computerWins === 5 || playerWins === 5){
            resultDisplay.innerHTML = playerWins === 5 ? 'player wins' : 'computer wins';
            computerWins = playerWins = 0;
        }
    }))


}

playFirstToFive();