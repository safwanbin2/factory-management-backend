import QueryBuilder from "../../builders/QueryBuilder";
import { WorkerModel } from "./worker.model";

const getAllWorkerFromDB = async () => {
  const result = await WorkerModel.find().populate("user");
  return result;
};

const getSingleWorkerFromDB = async (id: string) => {
  const result = await WorkerModel.findOne({ id });

  return result;
};

const getFilteredWorkerFromDB = async (query: Record<string, any>) => {
  const workerQuery = new QueryBuilder(WorkerModel.find(), query)
    .search(["name.firstName"])
    .filter()
    .paginate()
    .sort();
  const result = workerQuery.modelQuery;

  return result;
};

export const WorkerService = {
  getAllWorkerFromDB,
  getSingleWorkerFromDB,
  getFilteredWorkerFromDB,
};
