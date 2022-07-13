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

  getDate(): string {
    return this.date;
  }
  getValue(): number {
    return this.value;
  }
  getDescription(): string {
    return this.description;
  }
}

const transaction1 = new Transaction("12/07/2022", 550, "transferência");

export class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
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
  getTransaction(): Transaction[] {
    return this.transactions;
  }

  setTransaction(newTransaction: Transaction): void {
    this.transactions.push(newTransaction);
  }
}

const user1 = new UserAccount("54424408094", "Maria", 55);
user1.setTransaction(transaction1);
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
