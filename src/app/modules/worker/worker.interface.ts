import { Types } from "mongoose";

export type TName = {
  firstName: string;
  lastName: string;
};

export type TWorker = {
  id: string;
  user: Types.ObjectId;
  name: TName;
  role: "worker" | "admin";
  email: string;
  contactNo: string;
  sector: "manufacture" | "packaging";
  isDeleted: boolean;
};
