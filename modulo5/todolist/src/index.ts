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

//Criar usuário
app.post("/user", async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body;
    if (!name || !nickname || !email) {
      throw new Error("Parâmetro requerido não enviado.");
    }
    await connection.raw(`
    INSERT INTO TodoListUser
    (id, name, nickname, email)
    VALUES(
    "${generateId()}",
    "${req.body.name}",
    "${req.body.nickname}",
    "${req.body.email}"
    )
    `);
    res.status(200).send(`Usuário ${nickname} com sucesso!`);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

//Pegar usuário pelo id
app.get("/users/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const userById = await connection.raw(`
  SELECT * FROM TodoListUser WHERE id = '${id}'
  `);
    res.status(200).send(userById[0][0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//Editar usuário
app.put("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("Parâmetro 'id' não enviado.");
    }
    const { name, nickname, email } = req.body;

    if (name === "" || nickname === "" || email === "") {
      throw new Error("Parâmetros enviados no body não podem ser vazios.");
    }
    await connection("TodoListUser")
      .update({
        name,
        nickname,
        email,
      })
      .where({ id });
    res.status(200).send(`Edição de ${nickname} feita com sucesso!`);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

//Criar tarefa
app.post("/task", async (req: Request, res: Response) => {
  try {
    const { id, title, status, description, limit_date, creator_user_id } =
      req.body;

    if (!title || !description || !limit_date) {
      throw new Error("Parâmetro necessário não enviado.");
    }
    if (title === "" || description === "" || limit_date === "") {
      throw new Error("Parâmetros enviados no body não podem ser vazios");
    }

    await connection("TodoListTask").insert({
      id,
      title,
      status,
      description,
      limit_date,
      creator_user_id,
    });
    res.status(201).send("Tarefa criada com sucesso!");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response) => {
  const creator_user_id = req.params.id;
  if (!creator_user_id) {
    throw new Error("Parâmetro 'creator_user_id' não enviado.");
  }
  try {
    const taskById = await connection.raw(`
  SELECT * FROM TodoListTask WHERE id = '${creator_user_id}'
  `);
    res.status(200).send(taskById[0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//Pegar todos os usuários
app.get("/users", async (req: Request, res: Response) => {
  try {
    const allUsers = await connection.raw(`
  SELECT * FROM TodoListUser 
`);
    res.status(200).send(allUsers[0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
