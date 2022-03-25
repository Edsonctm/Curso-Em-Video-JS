function contar(){
    var n1 = parseInt(document.getElementById('inicio').value)
    var n2 = parseInt(document.getElementById('final').value)
    var n3 =  parseInt(document.getElementById('passo').value)
    var msg = document.getElementById('mensagem')


    if (n3 == 0 || isNaN(n3))
        n3 = 1

    if (n1 > n2){
        msg.innerHTML = ''

        while(n1 > n2){
            msg.innerHTML += `&#x1F449; ${n1} `
            n1 = n1 - n3
            }
    }

    else if (n1 == n2) {
        msg.innerHTML = 'Se o início e o fim tem o mesmo valor, não há contagem para ser feita.'
    }

    else 
        msg.innerHTML = ''

        while(n1 <= n2){
            msg.innerHTML += `&#x1F449; ${n1} `
            n1 = n1 + n3
            }

        msg.innerHTML += `&#x270B;`

}