import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../model/UserDTO";

export class UserController {
  signup = async  (
    req: Request, 
    res: Response) => {
    let message = "Success!";
    try {
      const { email, name, password } = req.body;

      const input: UserDTO = {email, name, password};

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);

      res.status(201).send({ message });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
