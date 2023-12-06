import { Response } from "express";
import { TResponse } from "../interfaces/responses";

const sendResponse = (res: Response, data: Record<string, any>) => {
  res.status(data.statusCode).json({
    success: true,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
