import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness.ts";
import { v4 as generateId } from "uuid";

export default class UserController {
  createUser = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;

    try {
      const input = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      };

      await new UserBusiness().createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await new UserBusiness().getAllUsers();

      res.send(users).status(200);
    } catch (error: any) {
      res.send({ message: error.message }).status(error.status);
    }
  };
  deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = {
        id: req.params.id,
      };

      await new UserBusiness().deleteUser(input);

      res.status(200).send({ message: "Usuário apagado com sucesso" });
    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  };
}
