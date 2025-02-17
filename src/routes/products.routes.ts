import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { ValidObjectBody } from "../middlewares/validObjectBody.middleware";
import { validCreateProduct } from "../schemas/validCreateProduct.schema";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", ValidObjectBody.execute(validCreateProduct), IsProductNameUnique.execute, productsControllers.createProduct);

productsRoutes.get("/", productsControllers.getProduct)