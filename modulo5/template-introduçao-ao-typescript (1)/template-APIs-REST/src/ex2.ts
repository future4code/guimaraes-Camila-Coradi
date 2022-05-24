//Exercício 2

function imprimeTresCoresFavoritas(
    cor1: string,
    cor2: string,
    cor3: string
  ): string[] {
    const arrayDeCores = [];
    arrayDeCores.push(cor1, cor2, cor3);
    return arrayDeCores;
  }
  console.log(imprimeTresCoresFavoritas("Preto", "Vermelho", "Azul"));