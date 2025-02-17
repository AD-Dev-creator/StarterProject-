import { Router } from "express";
import { accountRouter } from "./modules/account/routes/account.routes";
import { configurationRoutes } from "./modules/configuration/routes/configuration.routes";
import { dependancesRouter } from "./modules/dependances/routes/depandances.routes";
import { deploymentRoutes } from "./modules/deployment/routes/deployment.routes";
import { logRoutes } from "./modules/log/routes/log.routes";
import { projectRouter } from "./modules/project/routes/project.routes";
import { sessionRouter } from "./modules/session/routes/session.routes";
import { userRoutes } from "./modules/user/routes/user.routes";


export const apiRouter: Router = Router();

apiRouter.use("/account", accountRouter);
apiRouter.use("/configuration", configurationRoutes);
apiRouter.use("/dependances", dependancesRouter);
apiRouter.use("/deployment", deploymentRoutes);
apiRouter.use("/log", logRoutes);
apiRouter.use("/project", projectRouter);
apiRouter.use("/session", sessionRouter);
apiRouter.use("/user", userRoutes);

