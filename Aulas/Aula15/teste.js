let num = [5, 4, 1]
num[3] = 6
num.push(7) //cria o elemento na ultima posição
num.length //comprimento do Array(vetor)(quuantindade de elementos)
console.log(num)
num.sort() //organiza em ordem crescente
console.log(num)
/*for (let c = 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
} */
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
num.indexOf(6) //procura o elemento dentro do vetor, se a resposta for -1 é pq n tem.
console.log(num.indexOf(6))