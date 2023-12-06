import mongoose from "mongoose";
import config from "../../config";
import generateId from "../../utils/generateId";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { TWorker } from "../worker/worker.interface";
import { WorkerModel } from "../worker/worker.model";

const createWorkerIntoDB = async (password: string, payload: TWorker) => {
  let user: Partial<TUser> = {};
  user.password = password || config.default_password;
  user.role = "worker";
  user.sector = payload.sector;

  user.id = await generateId();

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const newUser: Record<string, any> = await UserModel.create([user], {
      session,
    });
    if (!newUser.length) {
      throw new Error("Could Not create user");
    }

    payload.id = newUser[0]?.id;
    payload.user = newUser[0]?._id;
    payload.role = newUser[0]?.role;

    const newWorker = await WorkerModel.create([payload], { session });

    if (!newWorker.length) {
      throw new Error("Could not create Worker");
    }

    await session.commitTransaction();
    await session.endSession();
    return newWorker;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Something went wrong");
  }
};

export const UserService = {
  createWorkerIntoDB,
};
