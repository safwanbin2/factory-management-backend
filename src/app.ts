import express from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { routeNotFound } from "./app/middlewares/routeNotFound";
import { UserRouter } from "./app/modules/user/user.route";
import { WorkerRouter } from "./app/modules/worker/worker.route";

const app = express();
app.use(express.json());
app.use(cors());

// routes

app.use("/api/v1/users", UserRouter);
app.use("/api/v1/workers", WorkerRouter);

app.use(globalErrorHandler);
app.use(routeNotFound);

export default app;
