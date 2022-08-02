import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
    async signup(req: Request, res: Response):Promise<void> {
    let message = "Success!"
      try {
        const {name, email,  password } = req.body;
  
        const userBusiness = new UserBusiness();
        await userBusiness.createUser(name, email, password);
        
        res.status(201).send({message});
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };
}