import { Request, Response, NextFunction } from "express";
import { SymfonyRepository } from "../repository/symfony.repository";

export class SymfonyController {
  create = async (req: Request, res: Response, next: NextFunction) => {};
}

export const symfonyController = new SymfonyController();
