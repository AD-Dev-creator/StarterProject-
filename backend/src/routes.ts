import { Router } from "express";
import { reactRouter } from "./modules/react/react.routes";
import { symfonyRouter } from "./modules/symfony/symfony.routes";
import { typeScriptRouter } from "./modules/typeScript/typeScript.routes";
import { nextRouter } from "./modules/next/next.routes";

export const apiRouter: Router = Router();

apiRouter.use("/react", reactRouter);
apiRouter.use("/symfony", symfonyRouter);
apiRouter.use("/typeScript", typeScriptRouter);
apiRouter.use("/next", nextRouter);
