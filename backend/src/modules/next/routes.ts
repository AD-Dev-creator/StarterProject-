import { Router } from "express";
import { nextController } from "./controllre/next.controller";

export const nextRouter = Router();

nextRouter.post("/next/create", nextController.create);
nextRouter.post("/next/create-ts", nextController.createTypeScript);
