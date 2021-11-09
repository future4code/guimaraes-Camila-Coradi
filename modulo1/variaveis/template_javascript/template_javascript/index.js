// Exercícios de interpretação de código

/* Exercício 1 
let a = 10 // a recebe o valor de 10
let b = 10 // b recebe o valor de 10

console.log(b) // console imprime o valor 10

b = 5
console.log(a, b) // console imprime o valor 5 */

// Exercício 2
/* let a = 10
let b = 20
c = a // c recebe o valor de a
b = c // b recebe o valor de c
a = b // a recebe o valor de c

console.log(a, b, c) // console imprime 10, 10, 10 */

// Exercício 3
/* let p = prompt("Quantas horas você trabalha por dia?") horaDia
let t = prompt("Quanto você recebe por dia?") valorDia
alert(`Voce recebe ${valorDia} por hora`) */

const nome = prompt("Qual é o seu nome?") 
let idade = prompt("Qual é a sua idade?") 

console.log(typeof nome)
console.log(typeof idade)

// /* Ele trouxe no typeof como string pois a função prompt é uma string.*/

alert (" Olá " +  nome +  " você tem "  +  idade  +  " anos ")

let roupaVermelha = prompt("Você está usando roupa vermelha?");
let ehEstudante = prompt ("Você é estudante?");
let moraBrasil = prompt("Você mora no Brasil?");

let a=10
let b=25
let c=a

a=b
b=c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10