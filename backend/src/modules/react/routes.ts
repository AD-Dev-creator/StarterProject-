import { Router } from "express";
import { reactController } from "./controller/react.controller";

export const reactRouter = Router();

reactRouter.post("/react/create", reactController.create);
