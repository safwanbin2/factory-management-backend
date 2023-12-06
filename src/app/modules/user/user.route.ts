import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";
import { UserController } from "./user.controller";

const router = Router();

router.post(
  "/create-worker",
  // validateRequest(UserValidation.createUserValidationScheam),
  UserController.createWorker
);

export const UserRouter = router;
