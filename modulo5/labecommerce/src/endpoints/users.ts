import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from "uuid";

//Busca por todos os usuários
export const selectAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    const allUsers = await connection.raw(`
  SELECT * FROM labecommerce_users 
`);
    res.status(200).send(allUsers[0]);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};

//Cadastro de usuário
export const postAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    const { name, email, password } = req.body;
    if (name === "" || email === "" || password === "") {
      statusCode = 404;
      throw new Error("Parâmetros enviados no body não podem ser vazios");
    }
    if (!name || !email || !password) {
      statusCode = 404;
      throw new Error("Parâmetro requerido não enviado.");
    }
    await connection.raw(`
           INSERT INTO labecommerce_users
           (id, name, email, password)
           VALUES(
           "${generateId()}",
           "${name}",
           "${email}",
           "${password}"
           )
           `);
    res.status(200).send(`Usuário ${name} criado com sucesso!`);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};
