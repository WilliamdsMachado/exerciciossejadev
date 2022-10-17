
//const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]

//forEach: passa por todos os elementos do array
//array.forEach ((elemento, posicao) => {
// console.log(`${elemento} - posicao ${posicao}`)
 //})

// find: retorna o elemento
//const valor = array.find((elemento) => {
 // if (elemento === 10) return true

 // return false
//})

//console.log(valor)

//findIndex: Retorna a posicao do elemento

//const index = array.findIndex((elemento) => {
  //if (elemento === 10) return true

  //return false
//})
//console.log(index)

//findIndex: SIMPLIFICADO 
//const index = array.findIndex(elemento => elemento === 10)
//findIndex:SIMPLIFICADO

//some: retorna true se pelo menos um numero satisfazer a condicao
//const some = array.some((elemento) => {
 // if (elemento >= 10) return true
 // return false
//})
//console.log(some)

//some:SIMPLIFICADO
//const some = array.some(elemento => elemento >=10)
//some:SIMPLIFICADO


//every: retorna true se Todos os numeros respeitarem a condição
//const every = array.every((elemento) => {
  //if (elemento >= 10) return true
  //return false
//})
//console.log(every)

//every:SIMPLIFICADO
  //const every = array.every(elemento => elemento >=1)
//every:SIMPLIFICADO


const newArray = [1, 2, 3, 4, 5]

// splice: corta o array, o primeiro parametro é o inicio e o segundo parametro é a quantidade

//console.log(newArray.splice(2, 2))

//map: alterar os valores dentro do array seguindo uma regra
/*console.log(newArray.map((elemento) => {
  return elemento * 2
}))
*/

//filter: filtrar os elementos dentro do array

/*console.log(newArray.filter((elemento) => {
  return elemento % 2 === 0  // aqui está filtrando todos elementos que forem PAR ou resto 1 filtra tosos Impares dentro do array.
}))// pode usar também como filtro true ou false.
*/

//reduce: reduz o array para algum outro elemento
console.log(newArray.reduce((acumulado, elemento) => {
  return acumulado - elemento
}, 0))