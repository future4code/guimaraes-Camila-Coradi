// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) 
{
    let arrayRetorna = array.length
        return arrayRetorna
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) 
{
    let arrayInvertido = array.reverse()
        return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) 
{
    return array.sort((function compararNumeros(a, b) 
    {
        return a - b;
    }))
}

// EXERCÍCIO 04
function retornaNumerosPares(array) 
{
    array = array.filter(function (numeros) 
    {
        if (numeros % 2 === 0) 
        {
          return true
        }
    })
      return array
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) 
{
    let arrayParesPorDois = [];
    for (const n of array) {
        if (n % 2 === 0)
            arrayPares.push(n * n)

    }
    return arrayParesPorDois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) 
{
    let arrayMaior = array.reduce(function (a, b) 
    {
        return Math.max(a, b)
    })
    
      return arrayMaior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) 
{
    let maiorNumero = [];
    let menorNumero = [];
    let maiorDivisivelPorMenor = [];
    let diferenca = [];
        maiorNumero = Math.max(num1, num2);
        menorNumero = Math.min(num1, num2);
        diferenca = Math.max(num1, num2) - Math.min(num1, num2);
        for (let i = menorNumero; i <= maiorNumero; i++) 
    {
            if (i % menorNumero === 0) 
            {
                maiorDivisivelPorMenor = true;
            } else 
            {
                maiorDivisivelPorMenor = false;

        }
    }
    return {maiorNumero, maiorDivisivelPorMenor, diferenca};
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) 
{
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) 
    {
        if (i % 2 == 0) 
        {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC)
{
    if (ladoA === ladoB && ladoB === ladoC) 
    {
        return 'Equilátero'

    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC)
    {
        return 'Isósceles'
    } else 
    {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) 
{
    array.sort(function (a, b) 
    {
        return a - b
    })

    let menor = array[1];
    let maior = array[array.length-2];
    array = [maior, menor]

    return array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme)
{
 return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por 
 ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) 
{
    const novosDados = 
    {
        ...pessoa,
        nome: 'ANÔNIMO'
    }
      return novosDados
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) 
{
    let autorizadas = pessoas.filter((pessoa) => 
    {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) 
{
    let naoAutorizadas = pessoas.filter((pessoa) => 
    {
        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return naoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas)
{
contas[0].saldoTotal = 500;
contas[1].saldoTotal = 6260;
contas[2].saldoTotal = 3340;
contas[3].saldoTotal = 1900;
contas[4].saldoTotal = 1300;
contas[5].saldoTotal = 1400;

contas[0].compras = [];
contas[1].compras = [];
contas[2].compras = [];
contas[3].compras = [];
contas[4].compras = [];
contas[5].compras = [];

    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas)
{
    let consultasOrdenadas = [];
    for (let i = 0; i < consultas.length; i++) 
    {
        consultasOrdenadas.push(consultas[i].nome);
    }
    consultasOrdenadas.sort();
    let consultacomp = [];
    for (let i = 0; i < consultasOrdenadas.length; i++) 
    {
        for (let j = 0; j < consultas.length; j++)
        {
            if (consultasOrdenadas[i] === consultas[j].nome) 
            {
                consultacomp.push(consultas[j]);
            }
        }
    }
    return consultacomp;

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}