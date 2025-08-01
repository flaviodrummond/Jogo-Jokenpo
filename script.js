// Seleciona todos os elementos com a classe 'user-choice' (pedra, papel e tesoura que o jogador pode clicar)
let userChoices = document.querySelectorAll('.user-choice')

// Seleciona o elemento principal que contém o jogo
let container = document.querySelector('.container')

// Seleciona o elemento que mostra o texto de resultado (quem venceu)
let resultText = document.querySelector('.result-text')

// Seleciona a imagem do resultado do jogador
let userResult = document.querySelector('.user-result img')

// Seleciona a imagem do resultado da CPU
let computerResult = document.querySelector('.computer-result img')

// Seleciona o elemento onde aparece a pontuação do jogador
let myScore = document.querySelector('.humanScore')

// Seleciona o elemento onde aparece a pontuação da máquina (CPU)
let machineScore = document.querySelector('.scoringMachine')

// Inicializa a pontuação do jogador em 0
let humanScore = 0

// Inicializa a pontuação da CPU em 0
let scoringMachine = 0

// Array com os caminhos das imagens para pedra, papel e tesoura
let imageSrc = ['assets/pedra.png', 'assets/papel.png', 'assets/tesoura.png']

// Objeto que define quem vence em cada combinação (ex: RP = CPU ganha porque Papel ganha da Pedra)
let winner = {
    RR: "Empate",      // R = Pedra, empate com Pedra
    RP: "CPU",         // Pedra perde para Papel
    RS: "Jogador",     // Pedra ganha de Tesoura
    PR: "Jogador",     // Papel ganha de Pedra
    PP: "Empate",      // Papel com Papel é empate
    PS: "CPU",         // Papel perde para Tesoura
    SR: "CPU",         // Tesoura perde para Pedra
    SP: "Jogador",     // Tesoura ganha de Papel
    SS: "Empate"       // Tesoura com Tesoura é empate
}

// Função executada quando o jogador clica em uma das imagens:
function userChoiceOption(event) {
    // Guarda o elemento clicado (pedra, papel ou tesoura)
    let clickedImagem = event.currentTarget

    // Pega o índice da imagem clicada dentro da lista de opções
    let userClick = Array.from(userChoices).indexOf(clickedImagem)

    // Adiciona a classe 'start' no container para animação de "Jo-ken-pô"
    container.classList.add("start")

    // Define o texto inicial da rodada
    resultText.innerHTML = "Jo-ken-Pô"

    // Mostra a imagem padrão (pedra) para o jogador e para a CPU enquanto "carrega" o resultado
    userResult.src = computerResult.src = 'assets/pedra.png'

    // Aguarda 2 segundos (tempo da animação) para mostrar o resultado
    setTimeout(() => {
        // Remove a classe de animação
        container.classList.remove("start")

        // Define a imagem escolhida pelo usuário com base no índice clicado
        userResult.src = imageSrc[userClick]

        // Gera um número aleatório entre 0 e 2 para a CPU (pedra, papel ou tesoura)
        let randomNumber = Math.floor(Math.random() * imageSrc.length)

        // Define a imagem da CPU com base no número aleatório
        computerResult.src = imageSrc[randomNumber]

        // Define o valor da jogada do jogador: R (pedra), P (papel), ou S (tesoura)
        let userValue = ['R', 'P', 'S'][userClick]

        // Define o valor da jogada da CPU
        let cpuValue = ['R', 'P', 'S'][randomNumber]

        // Junta os dois valores para formar a chave de decisão (ex: RP, SR etc.)
        let userCpuResult = userValue + cpuValue

        // Busca no objeto `winner` quem venceu
        let endResult = winner[userCpuResult]

        // Verifica se houve empate
        if (userValue === cpuValue) {
            resultText.innerHTML = "Empate"
        }

        // Verifica se o jogador venceu
        else if (endResult === "Jogador") {
            humanScore++  // Adiciona ponto para o jogador
            myScore.textContent = humanScore  // Atualiza o placar na tela
            resultText.innerHTML = "Jogador Ganhou"
        }

        // Caso contrário, a CPU venceu
        else {
            scoringMachine++  // Adiciona ponto para a CPU
            machineScore.textContent = scoringMachine  // Atualiza o placar na tela
            resultText.innerHTML = "CPU Ganhou"
        }

    }, 2000);  // Espera 2 segundos para mostrar o resultado (simulando suspense da rodada)
}




// Adiciona o evento de clique nas imagens de escolha do jogador:
// Para cada imagem de escolha (pedra, papel e tesoura), adiciona o evento de clique
userChoices.forEach(img => {
    img.addEventListener("click", userChoiceOption)
})

