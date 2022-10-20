/*

 - Programa para simular o computador de bordo de uma espaçonave 
   no momento em que ela inicia a parada 
   até abrir as portas para os pilotos saírem
   
   -----------------------------------

   > velocidade inicial = 0
   > criar uma função para desacelerar 20km/s a cada segundo
   > a funcao será HOF e imprimir cada atualização na velocidade da nave
   > ao final exiba uma mensagem informando que a nave está parada e as portas abertas

*/

let velocidadeInicial = 150

alert(`Velocidade inicial: ${velocidadeInicial}`)

function desacelerarNave(velocidade, printer){
  let desacelerar = 20

  while(velocidade >= 0){
    printer(velocidade)
    velocidade -= desacelerar
    alert(`Velocidade atual: ${velocidade}`)
  }
  alert('Nave parada, portas abertas.')
}

desacelerarNave(velocidadeInicial, (velocity) =>  console.log(`Velocidade atual: ${velocity}`))