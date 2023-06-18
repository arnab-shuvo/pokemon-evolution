import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import rootRouter from "./routes";

dotenv.config();
const PORT = process.env.PORT || 8080;

const app: Express = express();

app.use(express.json());

app.use("/", rootRouter);

app.listen(PORT, () => {
  console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
});
