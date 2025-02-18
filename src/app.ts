import helmet from "helmet";
import express, { json } from "express";
import { productsRoutes } from "./routes/products.routes";
import "express-async-errors"

export const app = express();

app.use(helmet());

app.use(json());

app.use("/products", productsRoutes);