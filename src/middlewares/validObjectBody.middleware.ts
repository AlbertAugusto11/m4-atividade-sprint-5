import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export class ValidObjectBody {
    static execute(shema: AnyZodObject) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                req.body = shema.parse(req.body)
    
                next()
            } catch (error) {
                if(error instanceof ZodError){
                    res.status(409).json(error)
                }else{
                    res.status(409).json({menssage: "Error Internal Server"})
                }
            }
        }
    }
}