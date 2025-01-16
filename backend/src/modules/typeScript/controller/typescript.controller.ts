import { Request, Response, NextFunction } from "express";
import { initializeTypeScriptAPI } from "../typescipt.services";
import { TypeScriptRepository } from "../repository/typescript.repository";

export class TypeScriptController {
  createTypeScriptAPI = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { projectName } = req.body;

      if (!projectName) {
        res.status(400).json({ message: "Project name is required" });
        return;
      }

      const result = await initializeTypeScriptAPI(projectName);

      if (!result) {
        res.status(500).json({ message: "Project TypeScript not created" });
        return;
      }

      res
        .status(201)
        .json({ result, message: "TypeScript API created successfully" });
    } catch (error) {
      next(error);
    }
  };
}

export const typeScriptController = new TypeScriptController();
