
let sum = 0
cards = []

let hasBlackjack = false
let isAlive = false

let message = ""

let player = {
    name: "Niko",
    chips: 765
}

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " " + "$" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) +1
    if (randomNumber < 2) {
        return 11
    } else if (randomNumber > 9) {
        return 10
    } else {
        return randomNumber
    }
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
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent += cards[i] + " "
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function startGame() {
    if (isAlive === false) {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCardCard = getRandomCard()
    sum = firstCard + secondCardCard
    cards = [firstCard, secondCardCard]
    renderGame()
    }
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
    }
}
