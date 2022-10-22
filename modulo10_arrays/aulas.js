/*

--- Aula 115 | Funções básicas de arrays ---
let array = ['Oi', 'tudo', 'suave']


aula 115 pop push shift unshift length indexof
console.log(array)3333333333

array.push('uai so')

console.log(array)

array.unshift(' lero lero ')

console.log(array)

let pos =  array.indexOf('tudo')
console.log(array.length)
console.log(pos)

*/


/*
  --- Aula 116 | Array Bidimensional ou +de 1 dimensão ---

  let arrayBidimensional = [["Barney", 20], ["Arthur", 20], ["Samuel", 14]]
  
  console.log(arrayBidimensional[0][0])
*/



/*
--- Aula 117 | Splice e Slice ---
// Splice
let arrayAnimais = ['Cachorro', 'Gato', 'Guaxinim', 'Cobra', 'Peixe']

console.log(arrayAnimais)

let animaisRemovidos = arrayAnimais.splice(0, 2, 'Libélula', 'Macaco', 'Arara')

console.log(arrayAnimais)

console.log(animaisRemovidos)

//Slice

let arrayAnimais = ['Cachorro', 'Gato', 'Guaxinim', 'Cobra', 'Peixe']

let animaisRemovidos = arrayAnimais.slice(0, 1, 'Libélula', 'Macaco', 'Arara')

console.log(arrayAnimais)

console.log(animaisRemovidos)

*/

/*
--- Aula 118 |  Iteração em Arrays ---
//forEach = iterar o array
let arraySetup = ['Mouse', 'Teclado', 'Monitor', 'Gabinete']

arraySetup.forEach(function(itemAtual, index){
  console.log(`Item: ${itemAtual} \nÍndice: ${index}\n`)
})


//map = modifica os elementos sem alterar o array
let arraySetup = ['Mouse', 'Teclado', 'Monitor', 'Gabinete']

let arrayMaiusculo = arraySetup.map(function(arrayMaiusculo){
  let maiusculo = arrayMaiusculo.toUpperCase()
  return maiusculo
})

console.log(arrayMaiusculo)



//filter = filtra os elementos de um array de acordo com uma condição
let arraySetupFilter = ['Mouse', 'Teclado', 'Monitor', 'Gabinete', 'CPU']

let moreThanFiveCharacters = arraySetupFilter.filter(element => {return element.length >= 7})

console.log(moreThanFiveCharacters)



//find = encontra o primeiro elemento que satisfaça uma condição
let arraySetupFilter = ['Mouse', 'Teclado', 'Monitor', 'Gabinete', 'CPU']

let moreThanFiveCharacters = arraySetupFilter.find(element => {return element.length >= 7})

console.log(moreThanFiveCharacters)

*/


