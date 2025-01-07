import { Request, Response, NextFunction } from "express";
import { NextReposiroty } from "../repository/next.repository";

export class NextController {
  create = async (req: Request, res: Response, next: NextFunction) => {};
}

export const nextController = new NextController();
