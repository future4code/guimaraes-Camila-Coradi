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
  
  type Pessoa1 = {
    nome: "Catarina";
    idade: 7;
    corFavorita: "Rosa";
  };
  
  type Pessoa2 = {
    nome: "Laine";
    idade: 30;
    corFavorita: "Azul";
  };
  
  type Pessoa3 = {
    nome: "André";
    idade: 32;
    corFavorita: "Verde";
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
  
  const Pessoa4: Pessoa = {
    nome: "Camila",
    idade: 31,
    corFavorita: Cores.VERMELHA,
  };
  
  const PessoasArray: Pessoas = [];
  PessoasArray.push(Pessoa4);
  console.log(Pessoa4);
  