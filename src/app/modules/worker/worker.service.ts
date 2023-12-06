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
  let searchTerm = "";
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm;
  }

  const result = await WorkerModel.find({
    "name.firstName": { $regex: searchTerm, $options: "i" },
  });

  return result;
};

export const WorkerService = {
  getAllWorkerFromDB,
  getSingleWorkerFromDB,
  getFilteredWorkerFromDB,
};
