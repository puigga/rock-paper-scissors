let playerScore = 0;
let computerScore = 0;

const chooseComputer = function() {
    const availableChoices = ['rock', 'paper', 'scissors'];
    return availableChoices[Math.floor(Math.random() * 3)];
};

const playRound = function(playerSelection, computerSelection) {
    const computerDisplay = document.querySelector('.computerSelection');
    const playerDisplay = document.querySelector('.playerSelection');
    computerDisplay.innerHTML = `computer: ${computerSelection}`;
    playerDisplay.innerHTML = `player: ${playerSelection}`;
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ){
        playerScore += 1;
    }
    else {
        computerScore += 1;
    }
};

const playFirstToFive = function() {
    const resultDisplay = document.querySelector('.result');
    while (playerScore < 5 && computerScore < 5){
        const playerSelection = prompt('Enter your choice: rock, paper, or scissors');
        const computerSelection = chooseComputer();
        playRound(playerSelection, computerSelection);
        
        if (playerScore === 5 || computerScore === 5) {
            break; // Exit the loop when a player reaches a score of 5
        }
    }
    
    if (playerScore === 5){
        resultDisplay.innerHTML = 'player wins';
    }
    else {
        resultDisplay.innerHTML = 'computer wins';
    }
};

const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach(choice => choice.addEventListener('click', () => {
    const playerSelection = choice.innerHTML;
    const computerSelection = chooseComputer();
    playRound(playerSelection, computerSelection);
    
    if (playerScore === 5 || computerScore === 5) {
        playFirstToFive(); // Start a new game when a player reaches a score of 5
    }
}));

playFirstToFive();