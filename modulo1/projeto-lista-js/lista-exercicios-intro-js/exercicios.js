// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  
  let altura = Number(prompt("Informe o valor da altura"))
  let largura= Number(prompt("Informe o valor da largura"))
  let calculaAreaRetangulo = altura * largura

  console.log(calculaAreaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  
  const anoAtual = Number (prompt("Informe o ano atual"))
  const anoDeNascimento = Number(prompt("Informe o seu ano de nascimento"))
  const imprimeIdade = anoAtual - anoDeNascimento

  console.log(imprimeIdade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

return peso / (altura * altura)
conseole.log(calculaIMC)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

const nome = prompt ("Qual o seu nome?")
const idade = Number(prompt("Qual a sua idade?"))
const email = prompt("Qual o seu email?")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual a sua cor favorita?")
const cor2 = prompt("Qual a sua segunda cor favorita?")
const cor3 = prompt("Qual a sua terceira cor favorita?")

const cores = [cor1, cor2, cor3]
console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

let letraMaiuscula = string.toUpperCase()

return letraMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let valor = custo / valorIngresso

  return valor
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let primeiraString = string1.length
let segundaString = string2.length

return primeiraString === segundaString


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  let ultimo = array[array.length - 1]; 
  return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, arrayInicial) {
  // implemente sua lógica aqui
  arrayInicial = array[0] 


  array[0] = array[array.length-1] 

  array[array.length-1] = arrayInicial 


  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let comparacao = string1.toUpperCase() === string2.toUpperCase()

return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  
       
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}