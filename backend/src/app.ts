import { Express } from "express";
import execa from "execa";
import dotenv from "dotenv";
import { apiRouter } from "./routes";

dotenv.config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
