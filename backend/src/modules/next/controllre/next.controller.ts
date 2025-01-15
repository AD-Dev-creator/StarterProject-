import { Request, Response, NextFunction } from "express";
import { createNextApp } from "../next.services";
import nextRepository from "../repository/next.repository";

export class NextController {
  createTypeScript = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { projectName } = req.body;

      if (!projectName) {
        return res.status(400).json({ message: "Project name is required" });
      }

      await nextRepository.createNextAppTypeScript(projectName);
      res
        .status(200)
        .json({ message: "Project created", details: projectName });
    } catch (error) {
      res.status(500).json({ message: "Error creating project" });
      next(error);
    }
  };
}

export const nextController = new NextController();
