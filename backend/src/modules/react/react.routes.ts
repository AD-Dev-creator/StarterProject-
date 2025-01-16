import { Router } from "express";
import { reactController } from "./controller/react.controller";

export const reactRouter: Router = Router();

/**
 * @swagger
 * /api/react/create:
 *   post:
 *     summary: Create a new React App
 *     description: Create a new React App
 *     tags: [React]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the React App
 *                 example: ReactApp
 *     responses:
 *       200:
 *         description: React App created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   example: { message: "React App created successfully" }
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Project name is required
 *       500:
 *         description: React not created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Project React App not created
 */
reactRouter.post("/react/create", reactController.createReactApp);
