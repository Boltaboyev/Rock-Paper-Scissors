const userScore = document.querySelector(".user-score")
const pcScore = document.querySelector(".pc-score")
const userEmoji = document.querySelector(".userEmoji")
const pcEmoji = document.querySelector(".pcEmoji")

const userChoice = document.querySelector(".user-select")
const pcChoice = document.querySelector(".pc-select")

const scoreInfo = document.querySelector(".scoredName")
const winnerBox = document.querySelector(".winner")
const winnerIfo = document.querySelector(".whoWin")
const restart = document.querySelector(".restart")

const rock = document.querySelector(".rock")
const scissors = document.querySelector(".scissors")
const paper = document.querySelector(".paper")

let userCount = 0
let pcCount = 0
const targetScore = 3
let imgArray = ["./img/rock.png", "./img/scissors.png", "./img/paper.png"]

let pcRandom = () => Math.floor(Math.random() * 3)

function scoreText(userSelection, pcSelection) {
    if (userSelection === pcSelection) return "draw"
    if (
        (userSelection === "rock" && pcSelection === "scissors") ||
        (userSelection === "scissors" && pcSelection === "paper") ||
        (userSelection === "paper" && pcSelection === "rock")
    ) {
        return "you"
    }
    return "pc"
}

function scoreCounter(result) {
    if (result === "you") {
        userCount++
        userScore.textContent = userCount
        userEmoji.src = "./img/laugh.png"
        pcEmoji.src = "./img/angry.png"
        scoreInfo.textContent = "You win !"
    } else if (result === "pc") {
        pcCount++
        pcScore.textContent = pcCount
        userEmoji.src = "./img/angry.png"
        pcEmoji.src = "./img/laugh.png"
        scoreInfo.textContent = "PC win !"
    } else {
        userEmoji.src = "./img/default-emoji.png"
        pcEmoji.src = "./img/default-emoji.png"
        scoreInfo.textContent = "Draw !"
    }

    if (userCount === targetScore) {
        gameEnd("You")
    } else if (pcCount === targetScore) {
        gameEnd("PC")
    }
}

function Main(userSelection) {
    userChoice.src = "./img/rock.png"
    pcChoice.src = "./img/rock.png"

    userChoice.classList.add("user-choose-active")
    pcChoice.classList.add("pc-choose-active")

    const pcSelectionIndex = pcRandom()
    const pcSelection = ["rock", "scissors", "paper"][pcSelectionIndex]

    setTimeout(() => {
        userChoice.classList.remove("user-choose-active")
        pcChoice.classList.remove("pc-choose-active")

        userChoice.src = `./img/${userSelection}.png`
        pcChoice.src = imgArray[pcSelectionIndex]

        const result = scoreText(userSelection, pcSelection)
        scoreCounter(result)
    }, 2000)
}

function gameEnd(winner) {
    winnerIfo.textContent = `${winner}`
    winnerBox.style.display = "flex"
}

paper.addEventListener("click", () => Main("paper"))
rock.addEventListener("click", () => Main("rock"))
scissors.addEventListener("click", () => Main("scissors"))
restart.addEventListener("click", () => {
    location.reload()
})
