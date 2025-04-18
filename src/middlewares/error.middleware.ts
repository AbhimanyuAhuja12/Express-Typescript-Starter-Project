import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error";


export const AppErrorHandler = ( err: AppError,
    req: Request,
    res: Response,
    next: NextFunction) =>{

        console.log(err);

        res.status(err.statusCode).json({
            success : false ,
            message : err.message
        })

}

export const genericErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);

  res.status(500).json({
    message: "Internal Server Error",
    success: false,
  });
};
