import express from "express";
import { RecipeController } from "./RecipesController";

export const recipeRouter = express.Router();

const recipeController = new RecipeController();
recipeRouter.post("/recipe", recipeController.create);
recipeRouter.get("/recipe/:id", recipeController.getRecipe);
