let result = 0
let isAlive = false
let message = ""
let cards = []
let sum = 0
let hasBlackJak = false

let player = {
        name: "abdulkarim",
        chips: 145
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let testEl = document.getElementById("test-el")

testEl.textContent = player.name + " " + "$" + player.chips

function getrolldice() {

        let randnum = Math.floor(Math.random() * 13) + 1

        if (randnum === 1) {
                return 11
        } else if (randnum > 10) {
                return 10
        }
        else {
                return randnum
        }
}

function start() {
                isAlive = true
                let firstcard = getrolldice()
                let secondcard = getrolldice()

                cards.push(firstcard, secondcard)

                // ALWAYS calculate from ALL cards
                result = 0
                for (let i = 0; i < cards.length; i++) {
                        result += cards[i]
                }

                if (result === 21) {

                        message = "You've got Blackjack!! 🥳"
                        hasBlackJak = true

                } else if (result < 21) {

                        message = "Do you wanna draw a new card? 😅"

                } else {

                        message = "Sorry, you are out of the game! 😭"
                        isAlive = false
                }

                messageEl.textContent = message
                sumEl.textContent = "Sum: " + result

                cardsEl.textContent = "Cards: "
                for (let i = 0; i < cards.length; i++) {
                        cardsEl.textContent += cards[i] + " "
                }




}

function newcard() {

        if (isAlive === true && hasBlackJak === false) {

                let card = getrolldice()
                cards.push(card)

                // recalculate sum from all cards
                result = 0
                for (let i = 0; i < cards.length; i++) {
                        result += cards[i]
                }

                if (result === 21) {
                        message = "You've got Blackjack!! 🥳"
                        hasBlackJak = true
                } else if (result < 21) {
                        message = "Do you wanna draw a new card? 😅"
                } else {
                        message = "Sorry, you are out of the game! 😭"
                        isAlive = false
                }

                sumEl.textContent = "Sum: " + result

                cardsEl.textContent = "Cards: "
                for (let i = 0; i < cards.length; i++) {
                        cardsEl.textContent += cards[i] + " "
                }

                messageEl.textContent = message
        }
}