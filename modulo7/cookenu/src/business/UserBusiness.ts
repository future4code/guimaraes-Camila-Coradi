import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  InvalidPassword,
  InvalidToken,
  UserNotFound,
} from "../error/customError";
import { AuthenticationData } from "../model/types";
import {
  UserInputDTO,
  user,
  LoginUserInputDTO,
  UserOutput,
} from "../model/user";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

export class UserBusiness {
  private userDB: UserDatabase;
  constructor() {
    this.userDB = new UserDatabase();
  }
  public createUser = async (input: UserInputDTO) => {
    let { name, email, password, role } = input;

    if (!name || !email || !password || !role) {
      throw new CustomError(422, "Ausência de parâmetro");
    }

    if (role !== "NORMAL" && role !== "ADMIN") {
      role = "NORMAL";
    }

    const id = IdGenerator.generateId();
    const hash = await HashManager.generateHash(password);

    const user: user = {
      id,
      email,
      password: hash,
      name,
      role,
    };

    await this.userDB.insertUser(user);
    const token = Authenticator.generateToken({ id, role });

    return token;
  };

  public login = async (input: LoginUserInputDTO) => {
    let { email, password } = input;

    if (!email || !password) {
      throw new CustomError(400, "Ausência de parâmetros");
    }

    const user = await this.userDB.findUserByEmail(email);
    const hashCompare = await HashManager.compareHash(password, user.password);

    if (!hashCompare) {
      throw new InvalidPassword();
    }

    const payload: AuthenticationData = {
      id: user.id,
      role: user.role,
    };

    const token = Authenticator.generateToken(payload);

    return token;
  };

  public profile = async (input: any): Promise<UserOutput> => {
    try {
      const tokenData = Authenticator.getTokenData(input);

      const user = await this.userDB.getUser(tokenData.id);

      if (!user) {
        throw new UserNotFound();
      }

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public anotherProfile = async (input: any): Promise<UserOutput> => {
    try {
      const { token, id } = input;

      const tokenData = Authenticator.getTokenData(token);

      const userExists = await this.userDB.getUser(tokenData.id);

      if (!userExists) {
        throw new InvalidToken();
      }

      const user = await this.userDB.getUser(id);

      if (!user) {
        throw new UserNotFound();
      }

      return user;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
