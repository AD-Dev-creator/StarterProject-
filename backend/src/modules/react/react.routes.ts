import { Router } from "express";
import { reactController } from "./controller/react.controller";

export const reactRouter: Router = Router();

reactRouter.post("/react/create", reactController.createReactApp);
