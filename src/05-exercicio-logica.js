const limite = 50 //limite de kg definido pelo Estado são Paulo
const valorDamulta = 4 //valor de multa em R$ definido
const pesoDospeixes = 60 //peso de peixes do joão pescador

let excesso = pesoDospeixes > limite ? pesoDospeixes -  limite : 0 //linha simplificada mesmo resultado se fosse feito com if else
let multa  = excesso * valorDamulta

/*if (pesoDospeixes > limite) {
  excesso = pesoDospeixes -  limite 
} else {
  excesso = 0
}


multa = excesso * valorDamulta
*/

console.log("Excesso: ", excesso)
console.log("Multa: R$ ", multa) 