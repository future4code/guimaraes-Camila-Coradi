import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private tableName = "Cookenu_users"

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
        })
        .into(this.tableName);
    } catch (error: any) {
      console.log(error);
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Cookenu_users")
        .select()
        .where({ email });
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public getUser = async (id: string) => {
    try {
      const result = await UserDatabase.connection(this.tableName)
        .select("id", "name", "email")
        .where("id", "like", id);

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };
}
