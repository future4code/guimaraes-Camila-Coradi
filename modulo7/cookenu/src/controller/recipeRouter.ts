import express from "express";
import { RecipeController } from "./RecipesController";

export const recipeRouter = express.Router();

const recipeController = new RecipeController();
recipeRouter.post("/", recipeController.create);
recipeRouter.get("/:id", recipeController.getRecipe);
