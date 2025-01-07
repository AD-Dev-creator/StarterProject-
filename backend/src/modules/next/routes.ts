import { Router } from "express";
import { nextController } from "./controllre/next.controller";

export const nextRouter = Router();

nextRouter.post("/next/create", nextController.create);
