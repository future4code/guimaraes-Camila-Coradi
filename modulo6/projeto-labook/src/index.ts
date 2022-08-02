import { app } from "./app";
import { Request, Response } from "express";
import { userRouter } from "./router/UserRouter"

app.use("/user", userRouter)

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor em pé! 👣");
});
