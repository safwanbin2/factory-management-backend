import { Server } from "http";
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

let server: Server;

async function bootstrap() {
  server = app.listen(config.port, () => {
    console.log(`Server running on ${config.port}`);
  });

  // connecting to mngoose
  await mongoose.connect(config.db_url as string);
}

bootstrap();

process.on("unhandledRejection", () => {
  console.log(`Unhandles Rejection, going offline...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(`Uncaught exception, going offline`);
  process.exit(1);
});
