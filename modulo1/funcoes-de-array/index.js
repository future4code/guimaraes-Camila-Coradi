//Exercícios de interpretação de código
//1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

//a) resposta: Será impresso todos os nomes e apelidos

//2

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//a) resposta: Será impresso os nomes

//3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  //b) respota: não será impresso Chijo

//Exercícios de escrita de código

//1

  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((item) => {
            return item.nome
 })

 console.log(nomePets)

 const apenasSalsicha = pets.filter((item) => {
            return item.raca === "Salsicha"
            
 })
 console.log(apenasSalsicha)


const descontoTosa = pets.filter((item) => {
            return item.raca === "Poodle" 
 })
console.log(descontoTosa)

const nomePoodle = descontoTosa.map((item) => {
            return (`Você ganhou um cupom de desconto de 10% para tosar o/a, ${item.nome}`)
})

console.log(nomePoodle)

//2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map((item) => {
            return item.nome
 })
 console.log(nomeProdutos)


const produtosPreco= produtos.map((item) => {
        item.preço = (item.preco * 0.95).toFixed(2)
        return [item.nome, item.preco]

})

console.log(produtosPreco)

const produtosBebidas= produtos.filter ((elemento) => {
        const bebida = elemento.categoria === "Bebidas"
        return bebida
})

console.log(produtosBebidas)

const nomeYpe = produtos.filter((item) =>
{
      return item.nome.includes("Ypê")
})

console.log(nomeYpe)

const fraseYpe = produtos.filter((item)=>{
    const nomeYpe = item.nome.includes("Ypê")
    return nomeYpe

})
const ypeFrase = fraseYpe.map((item) => {
        return (`Compre ${item.nome} por ${item.preco}`)
})
console.log(ypeFrase)