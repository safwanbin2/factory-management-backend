import { ZodError, ZodIssue } from "zod";

const handleZodError = (err: ZodError) => {
  let statusCode = 500;
  let message = "Validation error";

  const error = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1] as string,
      message: issue.message,
    };
  });

  return {
    statusCode,
    message,
    errorSources: error,
  };
};

export default handleZodError;
