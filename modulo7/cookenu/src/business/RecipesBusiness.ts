import { RecipeDatabase } from "../data/RecipesDatabase";
import { UserDatabase } from "../data/UserDatabase";
import {
  CustomError,
  MissingInformation,
  MissingToken,
  UnathorizedUser,
  UserNotFound,
} from "../error/customError";
import { recipeInputDTO, recipeOutput } from "../model/recipes";
import Authenticator from "../services/Authenticator";
import { DateOfCreation } from "../services/Date";
import IdGenerator from "../services/IdGenerator";

export class RecipeBusiness {
  private recipeDatabase: RecipeDatabase;
  private userDB: UserDatabase;
  constructor() {
    (this.recipeDatabase = new RecipeDatabase()),
      (this.userDB = new UserDatabase());
  }

  public createRecipe = async (input: recipeInputDTO): Promise<void> => {
      const { title, description, token } = input;

      if (!title || !description) {
        throw new MissingInformation();
      }

      if (!token) {
        throw new MissingToken();
      }

      const id: string = IdGenerator.generateId();
      const tokenData = Authenticator.getTokenData(token);
      const userExist = await this.userDB.getUser(tokenData.id);

      if (!userExist) {
        throw new UserNotFound();
      }

      if (!tokenData) {
        throw new UnathorizedUser();
      }

      const date = DateOfCreation();

      const recipe = {
        id,
        title,
        description,
        authorId: tokenData.id,
        createdAt: date,
      };

      const result = this.recipeDatabase.createRecipe(recipe);

      return result;
  };

  public getRecipe = async (input: any): Promise<recipeOutput> => {
      const { id, token } = input;

      if (!token) {
        throw new MissingToken();
      }

      const tokenData = Authenticator.getTokenData(token);
      const userExist = await this.userDB.getUser(tokenData.id);

      if (!userExist) {
        throw new UserNotFound();
      }

      const recipe = await this.recipeDatabase.getRecipe(id);

      if (!recipe) {
        throw new CustomError(
          400,
          "Não foi encontrada uma receita com o id informado."
        );
      }

      if (!tokenData) {
        throw new UnathorizedUser();
      }

      return recipe;
  };
}
