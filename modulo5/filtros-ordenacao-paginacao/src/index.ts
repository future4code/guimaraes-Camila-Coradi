import { app } from "./app";
import {getAllUsers, getTypeUsers, getUsersOrder} from "./endpoints/getAllUsers";

app.get("/users", getAllUsers);
app.get("/users/:type", getTypeUsers);
app.get("/users?sort=email&order=ASC", getUsersOrder);


