function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 6) {
        //Madrugada
        img.src = './imagens/Madrugada.jpg'
        document.body.style.background = '#000'
    }

    else if(hora >=6 && hora < 12){
        //Dia
        img.src = './imagens/Manhã.jpg'
        document.body.style.background = '#78d3d5'
    }

    else if (hora >=12 && hora < 18){
        //Tarde
        img.src = './imagens/Tarde.jpg'
        document.body.style.background = '#457145'
    }

    else {
        //Noite
        img.src = './imagens/Noite.jpg'
        document.body.style.background = '#150f1a'
    }
}