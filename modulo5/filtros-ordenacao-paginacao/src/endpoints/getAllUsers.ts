import { Request, Response } from "express";
import { connection } from "../data/connection";
import { users } from "../types";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    let name = req.query.name as string;

    if (!name) {
      name = "%";
    }

    const users = await connection("aula48_exercicio").where(
      "name",
      "like",
      `%${name}%`
    );

    if (!users.length) {
      statusCode = 404;
      throw new Error("Nenhum usuário encontrado");
    }

    res.status(200).send(users);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};

export const getTypeUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    let type = req.params.type as string;
    if (!type) {
      type = "%";
    }
    const users = await connection("aula48_exercicio").where(
      "type",
      "=",
      `%${type}%`
    );
    if (!users.length) {
      statusCode = 404;
      throw new Error(`"Tipo" não existente`);
    }
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};

export const getUsersOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    let sort = req.query.sort as string;
    let order = req.query.order as string;

    if (!sort) {
      sort = "email";
    }
    if (order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC") {
      order = "ASC";
    }

    const users = await connection("aula48_exercicio")
      .orderBy(sort, order)
      .select();
    if (users.length < 1) {
      statusCode = 404;
      throw new Error("Usuário não encontrado com esses parêmetros.");
    }
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};
