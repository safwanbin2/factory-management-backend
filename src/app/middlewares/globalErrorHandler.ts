import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";
  let errorSource = [
    {
      path: "",
      message: "Error",
    },
  ];

  res.status(statusCode).json({
    success: false,
    message: message,
    errorSource,
  });
};

export default globalErrorHandler;
