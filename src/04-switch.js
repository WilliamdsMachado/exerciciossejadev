/* 
Dado um número, construir uma logica pra imprimir
o nome do mês do número
exemplo:

1 - console.log("Janeiro")
2- console.log("Fevereiro")
...
12 - console.log("Dezembro")
!== 12- console.log("Mês inexistente")
*/

const numeroDoMes = 1

switch (numeroDoMes) {
  case 1:
    console.log("Janeiro")
  break
  case 2:
    console.log("Fevereiro")
  break
  case 3:
    console.log("Março")
  break
  case 4:
    console.log("Abril")
  break
  default:
    console.log("Mês inexistente")
  break
}