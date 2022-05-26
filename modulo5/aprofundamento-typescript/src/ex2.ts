function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//a) Resposta: As entradas são number e array, as saídas são number

//b Resposta: A tipagem das variaveis são number[]/ Array<number> e possui metodos de array 

//c)
type amostra ={
    numeros:number & [],
    obterEstatisticas: number & []
}

