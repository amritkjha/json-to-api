import type { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError.js";

export function ErrorHandler(err:any, req:Request, res:Response, next:NextFunction) {
    console.log('error: ', err);
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({error: {
            code: err.code,
            message: err.message
        }})
    }
    console.error('error: ', err);
    return res.status(500).json({error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong."
    }})
}