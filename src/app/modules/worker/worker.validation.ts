import z, { object } from "zod";

const createWorkerValidationSchema = z.object({
  body: z.object({
    id: z.string(),
    user: z.string(),
    name: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }),
    role: z.enum(["worker", "admin"]).default("worker"),
    email: z.string().email(),
    contactNo: z.string().min(11).max(15),
    sector: z.enum(["manufacture", "packaging"]),
    isDeleted: z.boolean().default(false),
  }),
});

export const WorkerValidation = {
  createWorkerValidationSchema,
};
