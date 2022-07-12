//Exercício 1

//a- O construtor é usado quando você precisa inicializar com algum valor que será usado em outros metodos

//b- Foi impressa uma vez a mensagem "Chamando o construtor da classe User"

//c- Conseguimos ter acesso utilizando os métodos

class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description;
  }

  getDate() {
    return this.date;
  }
  getValue() {
    return this.value;
  }
  getDescription() {
    return this.description;
  }
}

const transaction1 = new Transaction("12/07/2022", 550, "transferência");
console.log(transaction1);

export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number,
    transactions: [string, number, string]
  ) {
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
  getCpf() {
    return this.cpf;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getTransaction() {
    return this.transactions;
  }
}
const user1 = new UserAccount("54424408094", "Maria", 55, [
  "12/07/2022",
  550,
  "transferência",
]);
console.log(user1);

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  getAccounts() {
    return this.accounts;
  }
}
