let num = document.getElementById('txtnum')
let lista = document.getElementById('valores')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
     return true
 } else {
     return false
 }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else {valores.sort()
        let maior = Number(valores[0])
        let menor = Number(valores[0])
        let soma = 0
        let média = 0
        for(let pos in valores){
            if (Number(valores[pos]) > maior) {
                maior = Number(valores[pos])
            }
            if (Number(valores[pos]) < menor){
                menor = Number(valores[pos])
            }
            soma += Number(valores[pos])
            média = soma/(valores.length)
        }
        res.innerHTML += `O maior valor é ${maior}.`
        res.innerHTML += `<br>O menor valor é ${menor}`
        res.innerHTML += `<br>A soma é ${soma}`
        res.innerHTML += `<br>A média é ${média}`
    }
}