function start(){
    var nascimento = window.document.getElementById('nasc')
    var sexo = window.document.getElementsByClassName('sexo')
    var res = window.document.getElementById('resultado')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var ano = data.getFullYear()
    var idade = ano - Number(nascimento.value)


        if (nascimento.value.length == 0 || nascimento.value > ano) {
            res.innerHTML = 'Verifique os dados informados.'
        } 
        
        else if (sexo[0].checked){
            if(idade <4) {
                //bebe - masc
                res.innerHTML = `Você é apenas um bebezinho de ${idade} anos, favor se manter fora deste site até atingir a idade adulta.`
                img.src = './imagens/menino_bebe.jpg'

            }
            
            else if(idade <14) {
                //criança - masc
                res.innerHTML = `Criança teimosa, aposto que seus pais não sabem que você está usando a internet, não é?!`
                img.src = './imagens/menino_crianca.jpg'
            }

            else if (idade <19){
                //jovem - masc
                res.innerHTML = `Com a sua idade eu estaria em outros sites numa hora dessas... Não esquece de lavar BEM as mãos antes de ir jantar.`
                img.src = './imagens/menino_jovem.jpg'
            }

            else if (idade <40){
                //adulto - masc
                res.innerHTML = `Nessa idade você já deveria ter arrumado um emprego sério e não estar perdendo tempo num site como esse.`
                img.src = './imagens/menino_adulto.jpg'
            }

            else {
                //velho - masc
                res.innerHTML = `Apesar de eu achar patético estar num site como esses na sua idade, não vou criticar. Tu já tá mais pra lá do que pra cá, deixa morrer feliz né.`
                img.src = './imagens/menino_velho.jpg'
            }



        }
        else {
            if(idade <4) {
                //bebe - fem
                res.innerHTML = `Você é apenas um bebezinho de ${idade} anos, favor se manter fora deste site até atingir a idade adulta.`
                img.src = './imagens/menina_bebe.jpg'
            }
            
            else if(idade <14) {
                //criança - fem
                res.innerHTML = `Criança teimosa, aposto que seus pais não sabem que você está usando a internet, não é?!`
                img.src = './imagens/menina_crianca.jpg'
            }

            else if (idade <19){
                //jovem - fem
                res.innerHTML = `Isso aqui pode não ser tão legal quanto os vlogs de maquiagem que você assiste, mas também sei dar conselhos: Cuidado com os meninos, eles só pensam naquilo.`
                img.src = './imagens/menina_jovem.jpg'
            }

            else if (idade <40){
                //adulto - fem
                res.innerHTML = `Nessa idade você já deveria ter arrumado um emprego sério e não estar perdendo tempo num site como esse.`
                img.src = './imagens/menina_adulto.jpg'
            }

            else {
                //velho - fem
                res.innerHTML = `Apesar de eu achar patético estar num site como esses na sua idade, não vou criticar. Tu já tá mais pra lá do que pra cá, deixa morrer feliz né.`
                img.src = './imagens/menina_velha.jpg'
            }
        }

       


}