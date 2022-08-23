import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  async createUser(user: User): Promise<void> {
    await UserDatabase.connection("labook_users").insert({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
    });
  }

  async getUser(): Promise<void> {
    try {
      return await UserDatabase.connection("labook_users");
    } catch (error: any) {
      throw new Error(error.sqlMessage);
    }
  }
}
