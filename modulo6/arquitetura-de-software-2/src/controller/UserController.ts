import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../model/userDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input: UserDTO = {
        name,
        email,
        password
     }
      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  getUser = async (req: Request, res: Response):Promise<void> => {
    try {
      const users = await new UserBusiness().getAllUsers();

      res.status(201).send(users);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

}
