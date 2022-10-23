//filtar o nome das naves com > de 9 tripulantes
// *informar o numero da plataforma de engate que está a primeira nave que está com engate pendente
// *usar finIndex que indica o índice de um filtro 
// destacar o nome de todas as naves colocando em caixa alta e exibindo
// exibir um alerta com todas as informacoes

const hitchedSpaceships = [
  ['Fenix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false]
]


let maisDeNoveTripulantes = hitchedSpaceships.filter(spaceship => {
  return spaceship[1] > 9
}).map(spaceship => {
  return spaceship[0]
})


console.log(maisDeNoveTripulantes)

let engatePendente = hitchedSpaceships.findIndex(spaceship => {
  return spaceship[2] == false} )
console.log(engatePendente)

let upperCased = hitchedSpaceships.map(function(upperCased){
  let maiusculo = upperCased[0].toUpperCase()
  return maiusculo
})

console.log(upperCased)


alert(`Naves com mais de 9 tripulantes: ${maisDeNoveTripulantes}\nEngate pendente: ${engatePendente}\nNomes em maiúsculo: ${upperCased}`)
