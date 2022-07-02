import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from "uuid";

//Busca das compras de um usuário
export const getIdPurchases = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;

  try {
    const user_id = req.params.user_id as string;

    if (!user_id) {
      statusCode = 404;
      throw new Error(`Parâmetro ${user_id} não enviado.`);
    }
    const purchaseById = await connection.raw(`
        SELECT * FROM labecommerce_purchases WHERE id = '${user_id}'
        `);
    res.status(200).send(purchaseById[0]);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};

//Registro de compra
export const postPurchases = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    const { id, user_id, product_id, quantity, total_price } = req.body;

    if (quantity > 1 * total_price) {
    }
    if (user_id === "" || product_id === "" || quantity === "") {
      statusCode = 404;
      throw new Error("Parâmetros enviados no body não podem ser vazios");
    }
    if (!user_id || !product_id || !quantity) {
      statusCode = 404;
      throw new Error("Parâmetro necessário não enviado.");
    }

    await connection("labecommerce_purchases").insert({
      id: generateId(),
      user_id,
      product_id,
      quantity,
      total_price,
    });
    res.status(201).send(`Compra efetuada com sucesso!`);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};
