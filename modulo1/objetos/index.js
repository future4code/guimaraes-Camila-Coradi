// Exercícios de interpretação de código

// 1

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?
// resposta: Será impresso no console as seguintes informações, Matheus Nachtergaele, Virginia Cavendish e em objeto
// Globo, horario 14h

//2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?
// resposta: Será impresso os 3 objetos, com as informações de nome, idade e raça, porém cada um com um nome 
//diferente, o primeiro Juca depois Juba e por ultimo Jubo

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//resposta: Ela serve para "colar" a informação de um objeto ou array anterior permitindo alterar alguma valor ou adicionar uma nova chave

//3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
//resposta: Será impresso o false e depois undefined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//resposta: a primeira foi o resultado da chave backender que tinha um valor false, a outra chave com a informação
//da altura da pessoa não estava definida no objeto.

//Exercícios de escrita de código

//1

    //    const pessoa = {

    //     nome: 'Camila',
    //     apelidos: ['Cá','Camis','Coradi']
    //                 }

    //      console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
         
    //      const imprimirConsole = () =>{

    //         const pessoa2 = {
    //             ...pessoa,
    //             novoApelido: ['Mila', 'Cacá', 'Cami']
    //               }
    //               const frase = (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa2.novoApelido[0]}, ${pessoa2.novoApelido[1]} ou ${pessoa2.novoApelido[2]}`)
    //               return frase
    //             }
    //      console.log(imprimirConsole())

//2

// function dadosPesoais () {
//     const pessoa = 
//     {
//     nome:'Camila',
//     idade: 31,
//     profissao: 'Analista'
//     }
//     const dados = {
//     dados2:[pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length ]}
//     return dados
// }
// console.log(dadosPesoais())

//3

// let carrinho = []

// function frutas () {
//     const fruta1 = {
//         nome1: 'Banana', disponivel1: true,
//         nome2: 'Maçã', disponivel2: true,
//         nome3: 'Uva', disponivel3: true
//       }
//       carrinho.push(`nome: ${fruta1.nome1}, disponibilidade: ${fruta1.disponivel1}`)
//       carrinho.push(`nome: ${fruta1.nome2}, disponibilidade: ${fruta1.disponivel2}`)
//       carrinho.push(`nome: ${fruta1.nome3}, disponibilidade: ${fruta1.disponivel3}`)
//       return carrinho
// }
// console.log(frutas())

//desafio

let nomeUsuario = prompt('Informe o seu nome')
let idadeUsuario = Number = prompt('Qual a sua idade?')
let profissaoUsuario = prompt('Qual a sua profissão?')

const usuario = {
nome: nomeUsuario,
idade: idadeUsuario,
profissao: profissaoUsuario,

}
console.log(`nome:${usuario.nome}, profissão: ${usuario.profissao}, idade: ${usuario.idade}`)
console.log(typeof usuario)

