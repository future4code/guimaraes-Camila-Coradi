//Exercícios de interpretação de código

//1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor = valor + i //valor +=i
// }
// console.log(valor)
//resposta: está mantendo o valor de i e sempre aumentando será impresso no console 10

//2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
//respota: a) Será impresso no console os numeros a partir de 18
//         b) Não é possivel acessar o indice do elemento pelo for of pois é preciso declarar uma variavel exemplo let i = 0

//3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//resposta: Ele vai adicionar sempre mais um asterico no console imprimindo quatro ****

//Exercícios de escrita de código

//1

let quantidadePet = Number(prompt("Quantos pets você tem?"))

if(quantidadePet > 0)
{
    let i = 0
    let arrayPet = []
    while (i < quantidadePet)
        {
        arrayPet[i] = prompt("Digite o nome do seu pet")
        i++
        }
    console.log(arrayPet)

}
else{
    console.log("Que pena! Você pode adotar um pet!")
}

//2

const array2 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function arrayOriginal(array)
{    
    for(let i = 0; i < 12; i++)
    {
    console.log(array[i])
    }

}

function arrayDivisao(array)
{    
    for(let i = 0; i < 12; i++)
    {
    array[i] = array[i] / 10 
    console.log(array[i])
    }

}

function arrayPar(array)
{   let array3 = []
    let i = 0
    while( i < 12)
    {
        if(array2[i] % 2 === 0 )
            {
            array3.push(array2[i])
            i++
            }
        else
            {
            i++
            }
    }
    console.log(array3)
    
}


function arrayFrase(array)
{   let array4 = [] 
    for(let i = 0; i < 12; i++)
        {
    array4[i] = array2[i] 
    console.log(` O elemento do índex i é: numero `  +  array4[i] )
    }
}

const arrayMaiorMenor = (array) => {
    let maiorNum = 0
    let menorNum = Infinity
    for(let i=0; i < array.length; i++)
        {
            if(array[i]< menorNum)
            {
                menorNum = array[i]
            }else if (array[i]> maiorNum){
                maiorNum = array[i]
            }
        }
    console.log("O maior número é", + maiorNum, "me e o menor é", menorNum)
}

