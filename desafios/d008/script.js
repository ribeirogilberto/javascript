function d008() {
    let produto = prompt(`Qual é o produto que você está comprando?`)
    let preço = prompt(`Qual é o preço de ${produto}`).replace(",", ".")
    let porc = 10
    let valor = (preço*porc)/100
    let novo = preço - valor

    let res = document.querySelector("div#result")
    res.innerHTML = `
    <h1>Calculando desconto de 10% para ${produto}</h1>
    <p>O preço original era R$ ${moneyFormat(preço)}.</p>
    <p>Você acaba de ganhar R$ ${moneyFormat(valor)} de desconto (-10%).</p>
    <p>No fim, você vai pagar R$ ${moneyFormat(novo)} no produto ${produto}.</p>
    `
}

function moneyFormat(element) {
    return Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(element)
}