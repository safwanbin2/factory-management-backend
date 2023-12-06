import { Schema, model } from "mongoose";
import { TWorker } from "./worker.interface";

const workerSchema = new Schema<TWorker>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    role: {
      type: String,
      enum: ["worker", "admin"],
      required: true,
      default: "worker",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contactNo: {
      type: String,
      min: 11,
      max: 15,
      required: true,
    },
    sector: {
      type: String,
      enum: ["manufacture", "packaging"],
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const WorkerModel = model<TWorker>("Worker", workerSchema);
