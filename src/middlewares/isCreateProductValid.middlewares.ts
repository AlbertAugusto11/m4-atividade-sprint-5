import { NextFunction, Request, Response } from "express";
import { validCreateProduct } from "../schemas/validCreateProduct.schema";

export class IsCreateProductValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        try {
            validCreateProduct.parse(req.body)

            next()
        } catch (error) {
            res.status(409).json({menssage: "Dados recebidos não são validos"})
        }
    }
}