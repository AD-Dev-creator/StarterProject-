import { Router } from "express";
import { reactRouter } from "./modules/react/routes";
import { symfonyRouter } from "./modules/symfony/routes";
import { typeScriptRouter } from "./modules/typeScript/routes";
import { nextRouter } from "./modules/next/next.routes";

export const apiRouter = Router();

apiRouter.use("/react", reactRouter);
apiRouter.use("/symfony", symfonyRouter);
apiRouter.use("/typeScript", typeScriptRouter);
apiRouter.use("/next", nextRouter);
