import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 8080;

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json("tadadadada");
});

app.listen(PORT, () => {
  console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
});
