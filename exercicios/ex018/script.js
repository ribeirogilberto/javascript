// Todas as variáveis declaradas aqui em cima - fora das funções - são consideradas GLOBAIS e funcionam dentro de qualquer outra função!
let res = document.querySelector('section#result')
let comp = 0
let jogador = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    comp = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    jogador = Number(window.prompt('Qual é o seu palpite?'))
    if (jogador < comp) {
        res.innerHTML += `<p>Você falhou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (jogador > comp) {
        res.innerHTML += `<p>Você falhou ${jogador}. Meu número é <strong>MENOR</strong>!</p>` 
    } else if (jogador == comp) {
        res.innerHTML += `<p><strong>PARABÉNS</strong>! Você acertou! Eu tinha sorteado o valor ${comp}</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
    
}