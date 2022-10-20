/*
 --------------------------------------
 Receber nome da nave
 Velocidade inicial 0 
 O usuário pode acelerar a nave em 5km/h
 O usuárifo pode desacelerar a nav em 5km/h
 A velocidade não pode ser menor que 0
 Deve ser impresso o nome da nave com a velocidade atual
 Caso escolha um nome diferente da lista, exiba o menu novamente
 Criar função pro Menu
 Uma função para cada ação
 Encerrar o app somente quando for solicitado
 --------------------------------------
*/

let spaceshipName = prompt("Insert the name of your spaceship: ")
let initialSpeed = 0
let chosenOption

alert(`You are currently travelling at : ${initialSpeed}km/h`)

function menu(){
  let option
  while(option != "1" && option != "2" && option != "3" && option != "4"){
    option = prompt ("Hello traveller, choose an option below: \n\n1 - Speed up your spaceship\n2 - Decrease your speed\n3 - Show Data\n4 - Exit")
  }
  return option
}

function speedUp(velocity){
  let newVelocity = velocity + 5
  return newVelocity
}

function slowDown(velocity){
  let newVelocity

  if(newVelocity < 0){
    newVelocity = 0
  }
  newVelocity = velocity - 5 
}

function printData(name, velocity){
  alert(`Name: ${name} | Velocity: ${velocity}km/s`)
}

do{
  chosenOption = menu()
  switch(chosenOption){
    case "1":
      initialSpeed = speedUp(initialSpeed)
      break
    case "2":
      initialSpeed = slowDown(initialSpeed)
      break
    case "3":
      printData(spaceshipName, initialSpeed)
      break
    default:
      alert('Exiting program')
  }

}while(chosenOption != "4")