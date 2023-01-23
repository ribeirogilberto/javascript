function info() {
    let agora = new Date()
    let saída = document.getElementById('saida')

    saída.innerHTML = `<p>O que recebi do sistema foi <mark>${agora}</mark></p>`
}