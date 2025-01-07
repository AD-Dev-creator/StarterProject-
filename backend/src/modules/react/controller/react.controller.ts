import { Request, Response, NextFunction } from "express";
import { ReactRepository } from "../repository/react.repository";

export class ReactController {
  create = async (req: Request, res: Response, next: NextFunction) => {};
}

export const reactController = new ReactController();
