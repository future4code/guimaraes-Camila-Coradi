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
    let sort = req.query.sort as string
    let order = req.query.order as string

    if (!sort) { sort='name' }
    if (order?.toUpperCase() !== 'ASC' || order?.toUpperCase() !== 'DESC') { 
      order  }

    const allProducts = await connection('labecommerce_products')
    .orderBy(sort,order)
    .select()
    res.status(200).send(allProducts)
    
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

    if (name === "" || price === "" || image_url === "") {
      statusCode = 404;
      throw new Error("Parâmetros enviados no body não podem ser vazios.");
    }
    if (!name || !price || !image_url) {
      statusCode = 404;
      throw new Error("Parâmetro requerido não enviado.");
    }

    await connection("labecommerce_products").insert({
      id: generateId(),
      name,
      price,
      image_url,
    });
    res.status(200).send(`Produto ${name} adicionado com sucesso! `);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};
