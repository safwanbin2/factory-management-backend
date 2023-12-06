import httpStatus from "http-status";
import sendResponse from "../../middlewares/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { UserService } from "./user.service";

const createWorker = catchAsync(async (req, res, next) => {
  const { password, worker } = req.body;
  const result = await UserService.createWorkerIntoDB(password, worker);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: "Student created successfully",
    data: result,
  });
});

export const UserController = {
  createWorker,
};
