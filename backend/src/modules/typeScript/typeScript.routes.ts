import { Router } from "express";
import { typeScriptController } from "./controller/typescript.controller";

export const typeScriptRouter = Router();

/**
 * @swagger
 * /api/typeScript/create:
 *   post:
 *     summary: Create a new TypeScript
 *     description: Create a new TypeScript
 *     tags: [TypeScript]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the TypeScript
 *                 example: TypeScript
 *     responses:
 *       200:
 *         description: TypeScript created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   example: { message: "TypeScript created successfully" }
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
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Project TypeScript not created
 */
typeScriptRouter.post(
  "/typeScript/create",
  typeScriptController.createTypeScriptAPI
);
