import e, { Router } from "express";
import { symfonyController } from "./controller/symfony.controller";

export const symfonyRouter = Router();

symfonyRouter.post("/symfony/create", symfonyController.createSymfonyAPI);
