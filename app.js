let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let score = document.querySelector('.score')
let win = document.querySelector('.win')
let playerScore = document.getElementById('playerScore')
let computerScore = document.getElementById('computerScore')
let playerScoreValue = 0
let computerScoreValue = 0
let choices = ['rock', 'paper', 'scissors']


rock.addEventListener('click', function () {
    startGame('rock')
})
paper.addEventListener('click', function () {
    startGame('paper')
})
scissors.addEventListener('click', function () {
    startGame('scissors')
})
function startGame(userChoice) {
    // выбирается случайный элемент масиива , а потом сохраняется в перемнную
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    
    

    if (computerChoice == userChoice) {
        // playerScoreValue = 0
        // computerScoreValue = 0
        score.innerHTML = 'Ничья'
        
    }
    else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        win.innerHTML = "Вы Победили!"
         playerScoreValue++
    }
    else {
        win.innerHTML = "Вы проиграли!"
         computerScoreValue++
    }
    computerScore.textContent = "Компьютер:" + computerScoreValue
    playerScore.textContent = "Игрок:" + playerScoreValue





}
