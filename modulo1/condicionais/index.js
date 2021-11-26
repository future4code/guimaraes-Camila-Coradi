/*Exercícios de interpretação de código
1)
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a) Esse código testa se o numero que o usuario inserir é Par 
b) Numeros pares
c) Numeros imapares

2)

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para verficar o preço da fruta que o usuário pergunta
b) Será impresso no console ""O preço da fruta ", maçã, " é ", "R$ ", 2,25"
c) O console iria imprimir "O preço da fruta ", pera, " é ", "R$ ", 5), pois sem o break o valor "caira no default"

3)
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) Está pedindo para o usuário digitar um número
b) Se o usuário digitar 10 a mensagem será "Esse número passou no teste", porém se ele digitar -10
vai dar erro pois é aceito apenas numeros maior que zero
c) Haverá erro apenas se o usuário digitar um valor menor que zero*/



/* Exercícios de escrita de código

1)

let idadeUsuario = Number(prompt('Qual a sua idade?'))

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir")
}else {
    console.log("Você não pode dirigir.")
}

2)

let turnoEstudante = prompt(('Qual turno você estuda? Se for matutino digitar M, se for Vespertino digitar V e se for noturno digitar N')).toUpperCase()

if (turnoEstudante === 'M') {
    console.log("Bom dia!")
}else if  (turnoEstudante === 'V'){
    console.log("Boa tarde!")
}
else if (turnoEstudante === 'N'){
    console.log("Boa noite!")
} 
else{
    console.log('Turno inválido')
}

3)
let turnoEstudante = prompt(('Qual turno você estuda? Se for matutino digitar M, se for Vespertino digitar V e se for noturno digitar N')).toUpperCase()

switch (turnoEstudante) {
    case 'M':
        console.log("Bom dia!")
    break
    case 'V':
        console.log("Boa tarde!")
    break
    case 'N':
        console.log("Boa noite!")
    break
    default: 
        console.log("Turno Inválido")      
}

4)

const generoFantasia = prompt('Escolha um gênero de filme').toLocaleLowerCase() ==='fantasia'
const precoIngresso = Number(prompt('Qual o valor do ingresso? ')) <= 15
const lanchinhoComprar = prompt('Qual snack que você quer comprar?')
const vaiAoCinema = (generoFantasia, precoIngresso) => {

    if(generoFantasia && precoIngresso){
        console.log("Bom filme!")
        console.log(`Aproveite o seu`+lanchinhoComprar)
    }else {
        console.log("Escolha outro filme :(")
    }
    
}
vaiAoCinema(generoFantasia, precoIngresso)*/


