import { Router } from "express";
import { WorkerController } from "./worker.controller";

const router = Router();

router.get("/all", WorkerController.getAllWorkers);
// router.get("/:id", WorkerController.getSingleWorker);
router.get("/filter", WorkerController.getFilteredWorker);

export const WorkerRouter = router;
