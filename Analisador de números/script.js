var numeroincluido = []
function incluir() {
    
    var n1 = Number(document.getElementById('numero').value)
    var add = document.getElementById('adicionados')

    if (n1<1 || n1>100) {
        alert(`Você digitou ${n1}, o valor precisa ser entre 1 e 100`)
    } else if (numeroincluido.indexOf(n1) >= 0) {
        alert(`O número ${n1} já foi incluido, digite um número diferente`)
    } else{
    numeroincluido.push(n1)

    add.innerHTML += `O valor ${n1} foi adicionado <br>`
    }
}

function finalizar(){
    numeroincluido.sort(function (a, b){
        return a - b
      })

      var maior = numeroincluido.length - 1

      var resultado = document.getElementById('resultado')

      var soma = 0
      var media = 0

      for(c=0;c<numeroincluido.length;c++){
          soma += numeroincluido[c] 
      }

      media = soma / numeroincluido.length 


      resultado.innerHTML = `Você adiciounou ${numeroincluido.length} números.
      <br>
      O maior valor informado foi ${numeroincluido[maior]}
      <br>
      O menor valor informado foi ${numeroincluido[0]}
      <br>
      A soma dos valores informados é de ${soma}
      <br>
      A média dos números incluidos é de ${media}`

}