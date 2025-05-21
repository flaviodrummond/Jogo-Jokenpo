const result = document.querySelector('.result')
const myScore = document.querySelector('.humanScore')
const machineScore = document.querySelector('.scoringMachine')

let humanScore = 0
let scoringMachine = 0

const playHuman = (humanChoice) => {
    playTheGamer(humanChoice, playMachine())
}

const playMachine = () => {
    const choise = ['stone', 'paper', 'scissors']

    const random = Math.floor(Math.random() * 3)

    return choise [random]
}

 const playTheGamer = (human, machine) => {

    if(human === machine) {

        result.innerHTML = 'Deu empate !'

    } else if(human === 'paper' && machine === 'stone' || human === 'stone' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {

        humanScore++
        myScore.innerHTML = humanScore
        result.innerHTML = 'Você Ganhou !'

    } else {

        scoringMachine++
        machineScore.innerHTML = scoringMachine
        result.innerHTML = 'Você perdeu !'

    }

 }