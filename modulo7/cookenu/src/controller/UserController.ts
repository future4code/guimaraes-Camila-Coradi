import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginUserInputDTO, UserInputDTO } from "../model/user";

export class UserController {
  private userBusiness: UserBusiness;
  constructor() {
    this.userBusiness = new UserBusiness();
  }

  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password, role } = req.body;
      const input: UserInputDTO = {
        email,
        password,
        name,
        role,
      };

      const token = await this.userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginUserInputDTO = {
        email,
        password,
      };

      const token = await this.userBusiness.login(input);

      res.status(200).send({ message: "Login efetuado com sucesso!", token });
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };

  public profile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization;

      const result = await this.userBusiness.profile(token);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };

  public anotherProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization;
      const id = req.params.id;

      const info = {
        token,
        id,
      };

      const result = await this.userBusiness.anotherProfile(info);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };
}
