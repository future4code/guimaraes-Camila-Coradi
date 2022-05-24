// Exercício 1
const name = process.argv[2]
const age = Number(process.argv[3])
const sevenYears= age + 7

if (name == process.argv[2] && age == process.argv[3] ) {
} else {
    console.log("Esperava 2 parâmetros só recebi um.")
}

console.log(` \u001b[34m Olá, ${name}! Você tem ${age} anos.`)
console.log(` \u001b[31m Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${sevenYears}`)
