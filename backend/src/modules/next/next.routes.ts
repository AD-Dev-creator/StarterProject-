import { Router } from "express";
import { nextController } from "./controllre/next.controller";

export const nextRouter = Router();

/**
 * @swagger
 * /api/next/create-ts:
 *   post:
 *     summary: Create a new Next.js app
 *     description: Create a new Next.js app with TypeScript
 *     tags: [Next.js]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               appName:
 *                 type: string
 *                 example: my-next-app
 *     responses:
 *       200:
 *         description: Next.js app created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Next.js app created successfully"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project name is required"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project Next.js not created"
 */
nextRouter.post("/next/create-ts", nextController.createNextApp);
