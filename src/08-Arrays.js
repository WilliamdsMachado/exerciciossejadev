const variavel = 10
let array = [true, false, 0, 1, 2, "string aqui", "sejadev", variavel]


array.pop() //remove o ultimo elemento do array
console.log(array)
array.push(1000,"string")// adiciona elementos no array
console.log(array)

let newArray = [10, 20, 30]
let i = 0
/*while (i < newArray.length){
    console.log(i)
    console.log(newArray[i])
    i++
}
*/
for (let pos = 0; pos <newArray.length; pos++) {
    console.log(newArray[pos])
}
