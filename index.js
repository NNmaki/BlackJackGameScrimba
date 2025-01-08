

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard

cards = [firstCard, secondCard]

let hasBlackjack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function getRandomCard() {
    return 5
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
    renderGame()
}

function newCard() {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
}


// console.log(hasBlackjack)
// console.log(isAlive)
