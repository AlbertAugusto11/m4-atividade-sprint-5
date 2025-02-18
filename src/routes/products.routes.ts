import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { ValidRequest } from "../middlewares/validObjectBody.middleware";
import { validCreateProduct } from "../schemas/validCreateProduct.schema";
import { validParams } from "../schemas/validParams.schema";
import { IsIdUnique } from "../middlewares/isIdUnique.middleware";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", ValidRequest.execute({ body: validCreateProduct }), IsProductNameUnique.execute, productsControllers.createProduct);

productsRoutes.get("/", productsControllers.getProduct)

productsRoutes.get("/:id", ValidRequest.execute({params: validParams}), IsIdUnique.execute, productsControllers.getOneProduct)