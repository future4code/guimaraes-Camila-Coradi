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

//Exercício 2

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
        return this.residentsQuantity
      }
  };

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
  };

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

  const residence = new Residence(4, "05038040")
  console.log(residence)
  
  const commerce = new Commerce(8, "05061150")
  console.log(commerce)

  const industry = new Industry(6, "00578030")
  console.log(industry)

  residence.getDwellersQuantity()
  console.log(residence)

  commerce.getFloorsQuantity()
  console.log(residence)

  industry.getMachinesQuantity()
  console.log(industry)

  
