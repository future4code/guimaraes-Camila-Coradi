import { app } from "./app";
import { Request, Response } from "express";
import { userRouter } from "./router/UserRouter"
import { postRouter } from "./router/PostRouter";

app.use("/user", userRouter)

app.use("/post", postRouter )

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Servidor em pé! 👣");
});
