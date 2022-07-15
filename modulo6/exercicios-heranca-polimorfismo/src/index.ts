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
//A - Foi possivel imprimir a "senha" na estancia abaxio
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

//A e B- A frase foi impressa apenas 1 vez no terminal, pois está imprimindo a frase classe pai(User) e nada foi estanciado na classe filha (Customer)

const customer1 = new Customer(
  "2",
  "teste2@email.com",
  "teste2",
  "6789",
  "500"
);
console.log(customer1);

//Exercicio 3

//A - Foi possivel imprimir a "senha" pois ela está se extendendo da classe User

const customer = new Customer("3", "teste3@email.com", "teste4", "5588", "300");
console.log(customer.interoduceYourself());
