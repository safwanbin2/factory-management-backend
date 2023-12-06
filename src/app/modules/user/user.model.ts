import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["worker", "admin"],
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

export const UserModel = model<TUser>("User", userSchema);
