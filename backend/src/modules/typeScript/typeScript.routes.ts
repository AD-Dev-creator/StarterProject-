import { Router } from "express";
import { typeScriptController } from "./controller/typescript.controller";

export const typeScriptRouter = Router();

typeScriptRouter.post(
  "/typeScript/create",
  typeScriptController.createTypeScriptAPI
);
