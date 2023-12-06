import z from "zod";

const createUserValidationScheam = z.object({
  body: z.object({
    password: z.string().optional(),
    worker: z.object({
      id: z.string().optional(),
      needsPasswordChange: z.boolean().default(true),
      role: z.enum(["worker", "admin"]).optional(),
      sector: z.enum(["manufacture", "packaging"]),
      isDeleted: z.boolean().default(false),
    }),
  }),
});

const updateUserValidationScheam = z.object({
  password: z.string(),
  body: z.object({
    id: z.string().optional(),
    needsPasswordChange: z.boolean().default(true),
    role: z.enum(["worker", "admin"]).optional(),
    sector: z.enum(["manufacture", "packaging"]),
    isDeleted: z.boolean().default(false),
  }),
});

export const UserValidation = {
  createUserValidationScheam,
  updateUserValidationScheam,
};
