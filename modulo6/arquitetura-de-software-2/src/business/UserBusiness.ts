import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { UserDTO } from "../model/userDTO";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  async create(input: UserDTO): Promise<void> {
    try {
      const { name, email, password } = input;

      if (!email || !name || !password) {
        throw new InvalidRequest();
      }
      const id: string = IdGenerator();

      const userDatabase = new UserDatabase();
      await userDatabase.create({
        id,
        name,
        email,
        password,
      });
    } catch (error: any) {
      throw new CustomError(
        error.message || error.sqlMessage,
        error.statusCode
      );
    }
  }

  getAllUsers = async (): Promise<void> => {
    return await new UserDatabase().getUser();
  };
}
