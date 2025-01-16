import { Request, Response, NextFunction } from "express";
import { initializeReactProject } from "../react.services";

class ReactController {
  public createReactApp = async (
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

      const result = await initializeReactProject(projectName);

      if (!result) {
        res.status(500).json({ message: "Project React.js not created" });
        return;
      }

      res.status(201).json({ result });
    } catch (error) {
      next(error);
    }
  };
}

export const reactController = new ReactController();
