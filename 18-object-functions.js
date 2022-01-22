/*const person = {
  name: "José",
  lastName: "Fortes"
}
*/

//Object.keys(): Cria um array com todas as chaves do objeto
//console.log(Object.keys(person))

//Object.values(): Cria um array com todos os valores do objeto
//console.log(Object.values(person))

//Object.entries(): criar um array dentro de objetos e valores
//console.log(Object.entries(person))
/*
  [['name', 'José'], ['lastname', 'Fortes']]
*/

const livros = {
  'Livro A': 19.90,
  'Livro B': 97.00,
  'Livro C': 20.00
}

const values = Object.values(livros)
//values = [19.90 , 97.00, 20.00]
const sum = values.reduce((valor,acumulado) => valor + acumulado , 0) //pegando esses elementoe e para cada um deles a gente pega o valor e soma com o acumulado desse valor começando em Zero.

console.log(sum)//o que fizemos foi pegar todos os objetos de livros e transformando os valores destes livro em outro array