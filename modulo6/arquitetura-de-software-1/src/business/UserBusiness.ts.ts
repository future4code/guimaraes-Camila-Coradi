import { UserDatabase } from "../data/UserDatabase";
import { v4 as generateId } from "uuid";
import { user } from "../types/user";

export class UserBusiness {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;
      if (!input.name || !input.email || !input.password) {
        throw new Error("Please fill all the fields");
      }

      if (input.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }
      if (input.password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const useDatabase = new UserDatabase();
      await useDatabase.createUser({
        id: generateId(),
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  getAllUsers = async (): Promise<user[]> => {
    return await new UserDatabase().getAllUsers();
  };

  deleteUser = async (input: any) => {
    if (!input.id) {
      throw new Error("Insira um id!");
    }

    return await new UserDatabase().deletUser(input.id);
  };
}
