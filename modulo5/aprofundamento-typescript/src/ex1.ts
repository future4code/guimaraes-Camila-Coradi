//A// const minhaString: string=2  "O tipo number não pode ser atribuído ao tipo de string "

//B
type meuNumero = {
    numero: number | string;
  };

  //C
  type Pessoa = {
    nome: string;
    idade: number;
    corFavorita: string;
  };
    
  enum Cores {
    VERMELHA = "Vermelha",
    LARANJA = "Laranja",
    AMARELA = "Amarela",
    VERDE = "Verde",
    AZUL = "Azul",
    AZULESCURO = "Azul-Escuro",
    VIOLETA = "Violeta",
  }
  
  type Pessoas = Pessoa[];

 const Pessoa1: Pessoa = {
    nome: "Catarina",
    idade: 7,
    corFavorita: "Rosa"
  };
  
  const Pessoa2: Pessoa = {
    nome: "Laine",
    idade: 30,
    corFavorita: "Azul"
  };
  
  const Pessoa3: Pessoa = {
    nome: "André",
    idade: 32,
    corFavorita: "Verde"
  };

  
  const Pessoa4: Pessoa = {
    nome: "Camila",
    idade: 31,
    corFavorita: Cores.VERMELHA,
  };
  
  const PessoasArray: Pessoas = [];
  PessoasArray.push(Pessoa1,Pessoa2, Pessoa3,Pessoa4);
  console.log(Pessoa1,Pessoa2, Pessoa3,Pessoa4);
  