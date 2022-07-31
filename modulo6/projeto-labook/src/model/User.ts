import { v4 as uuid } from 'uuid'

export class User {
    constructor(
      private id: string,
      private email: string,
      private name: string,
      private password: string,
    ) {this.id = uuid()}
  
    public getId():string{
      return this.id
    }
  
    public getEmail():string{
      return this.email
    }
  
    public getName():string{
      return this.name
    }
  
    public getPassword():string{
      return this.password
    }
  }