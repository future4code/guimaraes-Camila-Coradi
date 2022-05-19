// Exercício 2

const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (num1 == process.argv[3] && num2 == process.argv[4] ) {
} else {
    console.log("Esperava 2 parâmetros só recebi um.")
}

switch(operacao){
	case "add":
		total= num1+num2
		break;
	case "subt":
        total=num1-num2
        break;
    case "mult":
        total=num1*num2
        break;
    case "div":
        total=num1/num2   
        break;
        default:
            ('Escolher um número')     
}
console.log(`\u001b[35m Respota: ${total}`)