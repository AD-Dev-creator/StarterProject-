import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { apiRouter } from "./routes";
import { swaggerSpec } from "./swagger";
import swaggerUI from "swagger-ui-express";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
