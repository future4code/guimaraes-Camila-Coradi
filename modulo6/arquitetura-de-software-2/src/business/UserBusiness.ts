import { UserDatabase } from "../data/UserDatabase";
import { UserDTO } from "../model/userDTO";
import { IdGenerator } from "../services/IdGenerator";


export class UserBusiness {
  async create(input:UserDTO): Promise<void> {
    const { name, email, password } = input;
    if (!email || !name || !password){
      throw new Error("Dados inválidos (email, name, password)");
    }
    const id:string = IdGenerator()

    const userDatabase = new UserDatabase();
    await userDatabase.create({
      id,
      name,
      email,
      password,
    });

  }

  getAllUsers = async (): Promise<void> => {
    return await new UserDatabase().getUser();
  };
}
