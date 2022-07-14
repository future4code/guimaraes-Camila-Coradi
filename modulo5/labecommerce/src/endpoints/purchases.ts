import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from "uuid";

//Busca das compras de um usuário
export async function getIdPurchases(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const user_id = req.params.user_id;

    const purchasesGet = await connection("labecommerce_purchases")
      .select("product_id", "quantity", "total_price")
      .where("user_id", "like", `${user_id}`);

    res.status(200).send(purchasesGet);
  } catch (err) {
    res.status(500).send(err);
  }
}

const getProductId = async (idProduct: string): Promise<any> => {
  const result = await connection("labecommerce_products")
    .select("name", "price")
    .where("id", "like", `${idProduct}`);

  return result[0];
};

//Registro de compra
export const postPurchases = async (
  req: Request,
  res: Response
): Promise<void> => {
  let statusCode;
  try {
    const { id, user_id, product_id, quantity, total_price } = req.body;

    if (user_id === "" || product_id === "" || quantity === "") {
      statusCode = 404;
      throw new Error("Parâmetros enviados no body não podem ser vazios");
    }
    if (!user_id || !product_id || !quantity) {
      statusCode = 404;
      throw new Error("Parâmetro necessário não enviado.");
    }
    const product = await getProductId(product_id);
    const totalPrice = product.price * quantity;

    await connection("labecommerce_purchases").insert({
      id: generateId(),
      user_id,
      product_id,
      quantity,
      total_price: totalPrice,
    });
    res.status(201).send(`Compra efetuada com sucesso!`);
  } catch (error: any) {
    res.status(statusCode || 400).send(error.message);
  }
};
