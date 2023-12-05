import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { routeNotFound } from "./app/middlewares/routeNotFound";

const app = express();
app.use(express.json());
app.use(cors());

// routes

app.get("/api/v1", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Sever is running fine",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error Occured",
      errorSource: null,
    });
  }
});

app.use(globalErrorHandler);
app.use(routeNotFound);

export default app;
