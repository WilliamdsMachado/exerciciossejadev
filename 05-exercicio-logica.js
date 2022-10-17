const limite = 50 // limite em kg definido
const valorDaMulta = 4 //valor da multa em R$ definido
const pesoDePeixes = 60 //peso de peixes do joão


let excesso = pesoDePeixes > limite ? pesoDePeixes - limite : 0   //usando operdor ternário 
let multa = excesso * valorDaMulta
//let excesso = 0 //excesso de peso
//let multa = 0 // valor da multa

/*if (pesoDePeixes > limite) { // usando If e Else
  excesso = pesoDePeixes -limite
} else {
  excesso = 0
}*/

//multa = excesso * valorDaMulta
console.log("Excesso: ", excesso)
console.log("Multa: R$", multa)