import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in ${address.address}:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/test", (req, res) => {
  res.status(200).send("ok");
});

app.post("/users", async (req: Request, res: Response) => {
  try {
    await connection.raw(`
    INSERT INTO TodoListUser
    (id, name, nickname, email)
    VALUES(
    "${req.body.id}",
    "${req.body.name}",
    "${req.body.nickname}",
    "${req.body.email}"
    )
    `);
    res.status(200).send(`Usuário criado com sucesso!`);
  } catch (error:any) {
    res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
      const userById = await connection.raw(`
  SELECT * FROM TodoListUser WHERE id = '${id}'
  `);
      res.status(200).send(userById[0][0]);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  });

  app.put("/users/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const { name, nickname, email } = req.body;
    try {
      const updatedUser = await connection.raw(`
    UPDATE TodoListUser
    SET name = '${name}', nickname = '${nickname}', email = '${email}'
    WHERE id =  '${id}'
  `);
      res.status(200).send(`${updatedUser[0][0]} Edição feita com sucesso!`);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  });

  app.post("/task", async (req: Request, res: Response) => {
    const { title, description, limitDate, creatorId} = req.body;
    try {
      await connection.raw(`
  INSERT INTO TodoListTask 
  (title, description, limitDate, creatorId )
  VALUES(
  "${title}",
  "${description}",
  "${limitDate.split("-").reverse().join("-")}",
  "${creatorId.generateId()}"
  )
  `);
      res.status(201).send("Tarefa criada com sucesso!");
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  });
  
  


