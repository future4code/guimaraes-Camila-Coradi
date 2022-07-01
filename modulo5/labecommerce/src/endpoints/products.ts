import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from "uuid";

//Cadastro de produto
export const selectAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    const allProducts = await connection.raw(`
  SELECT * FROM labecommerce_products 
`);
    res.status(200).send(allProducts[0]);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};

//Busca por todos os produtos
export const postAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    const { name, price, image_url } = req.body;
    if (!name || !price || !image_url) {
      statusCode = 404;
      throw new Error("Parâmetro requerido não enviado.");
    }
    await connection.raw(`
             INSERT INTO labecommerce_products
             (id, name, price, image_url)
             VALUES(
             "${generateId()}",
             "${name}",
             "${price}",
             "${image_url}"
             )
             `);
    res.status(200).send(`Produto ${name} adicionado com sucesso! `);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};
