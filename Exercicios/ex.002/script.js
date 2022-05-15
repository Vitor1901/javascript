function verificar(){
    var agora = new Date()
    var data = agora.getFullYear()
    var ano = document.getElementById('txtano')
    var idade = data - ano.value
    var res = document.getElementById('res')
    if (ano.value.length == 0 || ano.value > data){
        window.alert('[ERRO] Digite um ano válido!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = ' Homem'
            if (idade >=0 && idade <= 12) {
                //Criança
                img.setAttribute('src', 'fotoch.gif')
            } else if (idade > 12 && idade <= 18){
                 //Jovem
                 img.setAttribute('src', 'fotojh.gif')
            } else if (idade > 18 && idade < 60){
                //Adulto
                img.setAttribute('src', 'fotoah.png.gif')
            } else if (idade >= 60){
                //Idoso
                img.setAttribute('src', 'fotoih.gif')
            }
        } else if (fsex[1].checked){
            gen = 'a Mulher'
            if (idade >= 0 && idade < 12){
                //cirança
                img.setAttribute('src', 'fotocm.gif')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotojm.gif')
            } else if (idade < 60){
                //Adulto
                img.setAttribute('src', 'fotoam.gif')
            } else {
                //idoso
                img.setAttribute('src', 'fotoim.gif')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos um${gen} de ${idade} anos`
        res.appendChild(img)
    }
}