import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { IsCreateProductValid } from "../middlewares/isCreateProductValid.middlewares";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", IsCreateProductValid.execute, IsProductNameUnique.execute, productsControllers.createProduct);
