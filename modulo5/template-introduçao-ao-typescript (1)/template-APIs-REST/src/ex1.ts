//Exercício 1

function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log(checaTriangulo(12, 7, 9));//Escaleno
  console.log(checaTriangulo(5, 5, 5));//Equilátero
  console.log(checaTriangulo(5, 5, 9));//Isósceles