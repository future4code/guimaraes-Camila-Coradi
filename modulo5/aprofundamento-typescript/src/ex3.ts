const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  //a) 
type post = { 
autor: string|[], 
texto: string
}

const user1: post = {
autor: "Alvo Dumbledore",
texto: "Não vale a pena viver sonhando e se esquecer de viver"
}

const user2: post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}

const user3: post = {
    autor: "Hermione",
    texto: "É levi-ô-sa, não levio-sá!"
}

const user4: post = {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}

const user5: post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}


function buscarPostsPorAutor(posts:string[], autorInformado:[]) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
