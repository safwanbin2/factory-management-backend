import sendResponse from "../../middlewares/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { WorkerService } from "./worker.service";

const getAllWorkers = catchAsync(async (req, res, next) => {
  const result = await WorkerService.getAllWorkerFromDB();

  sendResponse(res, {
    statusCode: 200,
    message: "Retrieved all the worker successfully",
    data: result,
  });
});

const getSingleWorker = catchAsync(async (req, res, next) => {
  const result = await WorkerService.getSingleWorkerFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    message: "Retrieved single worker successfully",
    data: result,
  });
});

const getFilteredWorker = catchAsync(async (req, res, next) => {
  const result = await WorkerService.getFilteredWorkerFromDB(req.query);

  sendResponse(res, {
    statusCode: 200,
    message: "Retrieved filtered workers",
    data: result,
  });
});

export const WorkerController = {
  getAllWorkers,
  getSingleWorker,
  getFilteredWorker,
};
