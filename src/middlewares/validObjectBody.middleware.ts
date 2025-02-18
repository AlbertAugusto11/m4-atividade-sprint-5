import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

interface IValidRequest {
    params?: AnyZodObject,
    body?: AnyZodObject,
    query?: AnyZodObject,
}

export class ValidRequest {
    static execute(schema: IValidRequest) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                if(schema.params){
                    req.params = await schema.params.parseAsync(req.params)
                }
                if(schema.body){
                    req.body = await schema.body.parseAsync(req.body)
                }
                if(schema.query){
                    req.query = await schema.query.parseAsync(req.query)
                }
    
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