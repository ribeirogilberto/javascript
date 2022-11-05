function d004() {
    let produto = prompt('Que produto você está comprando?')
    let custo = prompt(`Quanto custa ${produto} que você está comprando?`).replace(",", ".")
    let valor_pago = prompt(`Qual foi o valor que você deu para pagar ${produto}?`).replace(",", ".")
    let result = valor_pago - custo
    
    alert(`Você comprou ${produto} que custou ${moneyFormat(custo)}. Deu R$ ${moneyFormat(valor_pago)} em dinheiro e vai receber ${moneyFormat(result)} de troco. Volte Sempre!`)
}

function moneyFormat(element) {
    return Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(element)
}