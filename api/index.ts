import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import rootRouter from "./routes";
import { initRedis } from "./client/redis";
import cors from "cors";

dotenv.config();
var corsOptions = {
  origin: process.env.UI_URL || "http://localhost:3000",
};

const PORT = process.env.PORT || 8080;

const app: Express = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", rootRouter);

initRedis().then(() => {
  app.listen(PORT, () => {
    console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
  });
});
