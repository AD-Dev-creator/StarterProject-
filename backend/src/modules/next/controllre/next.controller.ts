import { Request, Response, NextFunction } from "express";
import nextRepository from "../repository/next.repository";

export class NextController {
  createTypeScript = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { appName } = req.body;
      await nextRepository.createNextAppTypeScript(appName);

      res.status(201).json({ message: "Next.js app created successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred while creating the Next.js app" });
      next(error);
    }
  };
}

export const nextController = new NextController();
