import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {
  createUser = async (user: user): Promise<void> => {
    try {
      await UserDatabase.connection()
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  getAllUsers = async (): Promise<user[]> => {
    try {
      const users: user[] = [];

      const result = await BaseDatabase.connection()
        .select("*")
        .from("User_Arq");

      for (let user of result) {
        users.push(user);
      }

      return users;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  deletUser = async (id: string): Promise<void> => {
    try {
      await BaseDatabase.connection().where({ id }).from("User_Arq").delete();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
