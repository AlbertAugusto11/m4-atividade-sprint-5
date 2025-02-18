import { Request, Response } from "express";
import { ProductServices } from "../services/products.services";

export class ProductsControllers{
    createProduct(req: Request, res: Response){
        const productsServices = new ProductServices();

        const response = productsServices.createProduct(req.body);

        return res.status(201).json(response);
    }

    getProduct(req: Request, res: Response) {
        const productsServices =  new ProductServices()

        const response = productsServices.getProduct()

        return res.status(200).json(response)
    }

    getOneProduct(req: Request, res: Response) {
        const productsServices = new ProductServices()

        const response = productsServices.getOneProduct(req.params.id)

        return res.status(200).json(response)
    }
}