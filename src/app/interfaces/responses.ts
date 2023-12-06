export type TErrorSources = {
  path: string;
  message: string;
}[];

export type TResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
