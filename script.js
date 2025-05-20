const result = document.querySelector('.result')

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
        result.innerHTML = 'Deu empate'
    } else if(human === 'paper' && machine === 'stone' || human === 'stone' && machine === 'scissors' || human === 'scissors' && machine === 'paper') {
        result.innerHTML = 'Você Ganhou'
    } else {
        result.innerHTML = 'Você perdeu'
    }

 }