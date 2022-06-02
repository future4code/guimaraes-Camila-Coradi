function imprimeNomeData(nome:string, data:string):string[]{
    const dataSeparada=data.split("/",3)
    console.log(`"Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês de ${dataSeparada[1]} do ano de ${dataSeparada[2]}"`)
    return dataSeparada
 }

 console.log(imprimeNomeData("Camila","19/07/1990"))