import { UserModel } from "../modules/user/user.model";

const lastId = async (role: string) => {
  const lastUser = await UserModel.findOne(
    {
      role: role,
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastUser?.id?.substring(2) || undefined;
};

const generateId = async () => {
  let currentId = (await lastId("worker")) || "0";
  let newId = (Number(currentId) + 1).toString().padStart(4, "0");

  return `A-${newId}`;
};

export default generateId;
