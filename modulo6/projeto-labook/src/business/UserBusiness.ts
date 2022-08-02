import { UserDatabase } from "../data/UserDatabase";
import { v4 as generateId } from "uuid";
import { User } from "../model/User";

export class UserBusiness {
  async createUser(email: string, name: string, password: string,): Promise<void> {
    let message = "Success!"
    let statusCode 
    if (!email || !name || !password) {
        message = '"name", "email" and "password" must be provided'
        statusCode = 406
      throw new Error(message);
    }
    const id = generateId();
    const user = new User(
        id,
        name,
        email,
        password
    )
    const userDB = new UserDatabase(); 
    console.log(user)   
    await userDB.createUser(user)
  }

  getAllUsers = async (): Promise<void> => {
    return await new UserDatabase().getUser();
  };
}