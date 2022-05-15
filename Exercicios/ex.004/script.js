function gerar(){
    let res = document.getElementById('res')
    res.innerHTML = ''
    let num = document.getElementById('txtnum')
    if (num.value.length == 0){
        window.alert('Faltam dados')
    } else {
        let n = Number(num.value)
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab ${c}`
            res.appendChild(item)
        }
    }
}