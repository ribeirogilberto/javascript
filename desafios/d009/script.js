function d009() {
    let name = prompt('Qual é o nome do funcionário?')
    let salary = Number(prompt(`Qual é o salário de ${name}?`).replace(",", "."))
    let percent_ajust = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem?`).replace("%"))

    let ajust_salary = salary * (percent_ajust / 100)
    let new_salary = salary + ajust_salary

    let res = document.querySelector("div#result")
    res.innerHTML = `
    <h1>${name} recebeu um aumento salarial!</h1>
    <p>O salário atual era ${moneyFormat(salary)}.</p>
    <p>Com um aumento de ${percent_ajust}%, o salário vai aumentar ${moneyFormat(ajust_salary)} no próximo mês.</p>
    <p>E a partir daí, ${name} vai passar a ganhar ${moneyFormat(new_salary)}.</p>
    `
}

function moneyFormat(element) {
    return Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(element)
}