export type TUser = {
  id?: string;
  password?: string;
  needsPasswordChange: boolean;
  role?: "worker" | "admin";
  sector: "manufacture" | "packaging";
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
