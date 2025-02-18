import { NextFunction, Request, Response } from "express";
import { productsDatabase } from "../database/database";

export class IsIdUnique {
    static execute (req: Request, res: Response, next: NextFunction) {
        if(productsDatabase.some(product => product.id == Number(req.params.id))) {

            next()
        }else{
            return res.status(200).json({menssage: "ID NÃO ENCONTRADO"})
        }
    }
}