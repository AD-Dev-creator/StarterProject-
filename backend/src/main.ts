import { Express } from "express";
import dotenv from "dotenv";
import { apiRouter } from "./routes";

dotenv.config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.get("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
