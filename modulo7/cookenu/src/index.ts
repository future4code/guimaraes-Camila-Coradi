import app from "./controller/app";
import { recipeRouter } from "./controller/recipeRouter";
import { userRouter } from "./controller/userRouter";

app.use("/user/", userRouter);
app.use("/recipe/", recipeRouter)
