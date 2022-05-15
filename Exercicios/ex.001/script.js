function carrega(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var fundo = window.document.getElementById('fundo')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0  && hora < 12) {
        //Manha
        img.src = 'fotomanha.png'
        fundo.style.background = '#e2cd9f'
    }
    if (hora >= 12 && hora < 18){
        //Tarde
        img.src = 'fototarde.png'
        fundo.style.background = '#b9846f'
    }
    if (hora >= 18){
        //Noite
        img.src = 'fotonoite.gif'
        fundo.style.background = '#515154'
    }
}