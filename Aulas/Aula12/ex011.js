var idade = 15
if (idade < 16){
    console.log('Não vota')
} else {
    if (idade < 18){
        console.log('Voto opicional')
    } else if (idade >= 18){
        console.log('Voto obrigatorio')
    }
}