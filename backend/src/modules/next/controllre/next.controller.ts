import { Request, Response, NextFunction } from "express";
import { initializeNextProject } from "../next.services";
import nextRepository from "../repository/next.repository";

export class NextController {
  createNextApp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { projectName } = req.body;

      if (!projectName) {
        res.status(400).json({ message: "Project name is required" });
        return;
      }

      const result = await initializeNextProject(projectName);

      if (!result) {
        res.status(500).json({ message: "Project Next.js not created" });
        return;
      }

      res
        .status(201)
        .json({ result, message: "Next.js App created successfully" });
    } catch (error) {
      next(error);
    }
  };
}

export const nextController = new NextController();
