// Exercícios de interpretação de código

//1
//let array
//console.log('a. ', array)
//resposta: Esse array vai ficar indefinido pois não recebeu nenhuma infomação 
//quando a variavel foi declarada e não tem o []

//array = null
//console.log('b. ', array)
//resposta: Esse array vai imprimir nulo no console pois está recebendo esse valor null

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)
//resposta: Vai imprimir no console o tamanho do array que é igual a 11

//let i = 0
//console.log('d. ', array[i])
//resposta: será impresso no console o numero 3 pois a posição dele no array é 0

//array[i+1] = 19
//console.log('e. ', array)
//resposta: o 19 ficará no lugar do 4 pois foi declarado na variavel que a posição 0 "i" + 1 seria 19 e não mais 4

//const valor = array[i+6]
//console.log('f. ', valor)
//resposta: o valor impresso no console será 9 pois está somando o i(que seria o 3) mais 6

//2

//const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
//resposta: "SUBI NUM ÔNIBUS EM MIRROCOS" 29


//Exercícios de escrita de código

//1

// const nomeDoUsuario = prompt("Me fale o seu nome :)")
// const emailDoUsuario = prompt("Agora informe o seu email")

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2

// let comidasFavoritas =  ["pastel" , "lasanha" , "hamburguer" , "feijoada" , "chocolate"]

// comidasFavoritas[1] = prompt("Qual a sua comida favorita?")

// console.log(`Essas são as minhas comidas favoritas`)
// console.log(comidasFavoritas[0])
// console.log(comidasFavoritas[1])
// console.log(comidasFavoritas[2])
// console.log(comidasFavoritas[3])
// console.log(comidasFavoritas[4])

//rascunhos da 2 questão
//const favoritas = prompt("Qual a sua comida favorita?")
//const favoritaDoUsuario = comidasFavoritas.replace("lasanha", favoritas)
//console.log(favoritaDoUsuario)
//console.log(comidasFavoritas)



//3

// let listaDeTarefas = []

// tarefas1 = prompt("Informe uma tarefa")
// tarefas2 = prompt("Informe outra tarefa")
// tarefas3 = prompt("Informe uma ultima tarefa")

// console.log(tarefas1, tarefas2, tarefas3)

// listaDeTarefas.push(tarefas1, tarefas2, tarefas3)

// const indice = prompt("Digite um indice 0, 1 ou 2")
// const indiceNumero = Number(indice)
// console.log(indiceNumero)

// listaDeTarefas.splice(indiceNumero, 1)

// console.log(listaDeTarefas)


//desafio

//1 

// let frases = prompt("Digite a sua frase")
// console.log(frases.split(''))

//2

//let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
//let posicao = frutas.indexOf('Abacaxi')
//console.log(frutas.length)
//console.log(posicao)

