let num = [5, 8, 2, 9, 3] // Variáveis Compostas devem ser capazes de armazenar vários valores em uma mesma estrutura
num.push(1) // Caso você queira adicionar um número no final, independente de onde o final seja.
num.sort() // Coloca de forma ordenada, ou seja, em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9) // indeOf() Pesquisa dentro do vetor em qual posição se encontra a chave/indice
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}