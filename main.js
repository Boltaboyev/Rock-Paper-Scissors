const userScore = document.querySelector(".user-score")
const pcScore = document.querySelector(".pc-score")
const emoji = document.querySelectorAll(".emoji")

const userChoice = document.querySelector(".user-select") // user img
const pcChoice = document.querySelector(".pc-select") // pc img

const scoreInfo = document.querySelector(".scoredName") 

const rock = document.querySelector(".rock") 
const scissors = document.querySelector(".scissors") 
const paper = document.querySelector(".paper") 

let userCount = 0
let pcCount = 0


let imgArray = ["./img/rock.png", "./img/scissors.png", "./img/paper.png"]

let pcPlayer = () => Math.floor(Math.random() * 3)

paper.addEventListener("click", () => {
    userChoice.classList.add("user-choose-active")
    userChoice.src = paper.src
    pcChoice.src = imgArray[pcPlayer()]
})

rock.addEventListener("click", () => {
    userChoice.src = rock.src
    pcChoice.src = imgArray[pcPlayer()]
})

scissors.addEventListener("click", () => {
    userChoice.src = scissors.src
    pcChoice.src = imgArray[pcPlayer()]
})

let time = setTimeout(() => {
    userChoice.classList.remove('user-choose-active')
}, 0)
