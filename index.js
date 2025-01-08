
let firstCard = 7
let secondCard = 8

let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackjack = true        
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " & " + secondCard 
}

function newCard() {
    let card = 4
    sum += card
    renderGame();
}







