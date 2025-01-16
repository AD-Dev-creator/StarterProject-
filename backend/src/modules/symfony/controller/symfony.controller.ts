import { Request, Response, NextFunction } from "express";
import { initializeSymfonyProject } from "../symfony.services";
import { SymfonyRepository } from "../repository/symfony.repository";

export class SymfonyController {
  createSymfonyAPI = async (
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

      const result = await initializeSymfonyProject(projectName);

      if (!result) {
        res.status(500).json({ message: "Project Symfony not created" });
        return;
      }

      res
        .status(201)
        .json({ result, message: "Symfony App created successfully " });
    } catch (error) {
      next(error);
    }
  };
}

export const symfonyController = new SymfonyController();
