import express, { Request, Response } from "express";
import cors from "cors"

import { AddressInfo } from "net";
import { todo } from "./data";
import { match } from "assert";

const app = express();
app.use(cors());

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

app.post("/todos/", (req:Request, res:Response)=>{
 try{
const {title, completed} = req.body
todo.push({
  userId: Date.now(),
  id: Date.now(),
  title,
  completed
}); res.status(200).end(todo)

 }catch(error){
  res.status(400).end("Adicione uma nova tarefa");
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
