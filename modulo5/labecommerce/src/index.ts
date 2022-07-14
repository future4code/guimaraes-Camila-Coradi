import { app } from "./app";
import { postAllProducts, selectAllProducts } from "./endpoints/products";
import { getIdPurchases, postPurchases } from "./endpoints/purchases";
import { selectAllUsers, postAllUsers } from "./endpoints/users";

app.post("/user", postAllUsers);
app.get("/users", selectAllUsers);
app.get("/products", selectAllProducts);
app.post("/products", postAllProducts);
app.post("/purchases", postPurchases);
app.get("/users/:user_id/purchases", getIdPurchases);


