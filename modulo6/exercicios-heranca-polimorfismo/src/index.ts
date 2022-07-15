//Herança

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
  public interoduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`;
  }
}
//Exercicio 1
//A - Foi possivel imprimir a "senha" na instância abaxio
const user1 = new User("1", "teste@email.com", "teste", "123456");
console.log(user1);

//B - A frase foi impressa 1 vez no terminal

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

//Exercicio 2

//A e B- A frase foi impressa apenas 1 vez no terminal, pois está imprimindo a frase classe pai(User) e nada foi instanciando na classe filha (Customer)

const customer1 = new Customer(
  "2",
  "teste2@email.com",
  "teste2",
  "6789",
  "500"
);
console.log(customer1);

//Exercicio 3

//A - Foi possivel imprimir a "senha" pois ela está se estendendo da classe User

const customer = new Customer("3", "teste3@email.com", "teste4", "5588", "300");
console.log(customer.interoduceYourself());

//Polimorfismo

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}

const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  },
};
console.log(client);

//Exercício 1

//A - Consegui imprimir as seguintes propriedades:
//   {
//   name: 'Goli',
//   registrationNumber: 1,
//   consumedEnergy: 100,
//   calculateBill: [Function: calculateBill]
//   };
// Pois a função foi feita dentro de um objeto utilizando um metodo

export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

// const place = new Place("05038040")

//Exercício 2 e 3

//A - O erro que o TS gerou foi o seguinte: Não é possivel criar uma instância de uma classe abstrata ts (2511)

//B - Para criar a instância da classe Place é estendê-la a outras classes para utilizar a propriedade

export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
  public getDwellersQuantity(): number {
    return this.residentsQuantity;
  }
}

export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string
  ) {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

const residence = new Residence(4, "05038040");
console.log(residence);

const commerce = new Commerce(8, "05061150");
console.log(commerce);

const industry = new Industry(6, "00578030");
console.log(industry);

residence.getDwellersQuantity();
console.log(residence);

commerce.getFloorsQuantity();
console.log(residence);

industry.getMachinesQuantity();
console.log(industry);

//Exercício 4

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

const client1 = new ResidentialClient(
  "teste4",
  5,
  150,
  "65560078905",
  4,
  "18797547"
);
console.log(client1);

//A - Possui 2 metodos um getter para pegar o CPF que é uma propriade "private" e o outro metodo para o calculo do consumo

//Exercício 5

class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}

//A - Ambas classes possuem o metodo getter que pega uma propriedade "private" (CPF e CNPJ), também possuem semelhanças referente ao metodo que faz o calculo de consumo

//B - Uma das diferenças é a classe pai

//Exercício 6

class IndustrialClient  extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
//A - Ela deve ser filha da classe Industry pois possui as informações referentes a essa classe

//B - Implementa a interface de client por que é um cliente da companhia de energia

//C - Para pegar as propriedades private