import { NextFunction, Request, Response } from "express";
import handleZodError from "../error/handleZodError";
import { TErrorSources } from "../interfaces/responses";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";
  let errorSources = [
    {
      path: "",
      message: "Error",
    },
  ];

  if (err.name === "ZodError") {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    err,
    errorSources,
  });
};

export default globalErrorHandler;
