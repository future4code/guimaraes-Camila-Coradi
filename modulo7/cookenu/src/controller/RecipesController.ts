import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipesBusiness";

const recipeBusiness = new RecipeBusiness();

export class RecipeController {
  public create = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;

      const token = req.headers.authorization as string;

      const input = {
        title,
        description,
        token,
      };

      await recipeBusiness.createRecipe(input);

      res.status(201).send("Receita criada com sucesso!");
    } catch (error: any) {console.log(error)
      res.status(error.statusCode).send(error.message);

    }
  };

  public getRecipe = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const token = req.headers.authorization as string;

      const input = {
        id,
        token,
      };

      const result = await recipeBusiness.getRecipe(input);

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.statusCode).send(error.message);
    }
  };
}
