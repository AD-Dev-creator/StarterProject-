import { Request, Response, NextFunction } from "express";
import { TypeScriptRepository } from "../repository/typescript.repository";

export class TypeScriptController {
  create = async (req: Request, res: Response, next: NextFunction) => {};
}

export const typeScriptController = new TypeScriptController();
