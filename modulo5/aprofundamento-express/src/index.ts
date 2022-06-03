import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { todo } from "./data";

const app = express();

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong! 🏓");
});

app.get("/todos/", (req: Request, res: Response) => {
  try {
    const listToDo = todo;
    if (req.query.done === "true") {
      const filterToDo = listToDo.filter(
        (element) => element.completed === true
      );
      res.status(200).send(filterToDo);
    }
  } catch (error) {
    res.status(400).end("errou");
  }
});

app.post("/todos/:id", (req:Request, res:Response)=>{
 try{

 }catch(error){

 }
})


app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
