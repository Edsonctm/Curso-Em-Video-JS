function start(){

    var n1 = parseInt(document.getElementById('seletor').value)
    var msg = document.getElementById('resultado')
    var valor = 0

    msg.innerHTML = `Você escolheu a tabuada do ${n1}, aqui está: <br>`

    for(c=1; c<11; c++){
        valor = c * n1
        msg.innerHTML += `${n1} X ${c} = ${valor} <br>`
    }

    msg.innerHTML += '<br>Obrigado por usar a Tabuada Online.'

}