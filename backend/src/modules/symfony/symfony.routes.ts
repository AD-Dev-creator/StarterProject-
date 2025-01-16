import e, { Router } from "express";
import { symfonyController } from "./controller/symfony.controller";

export const symfonyRouter = Router();

/**
 * @swagger
 * /api/symfony/create:
 *   post:
 *     summary: Create a new Symfony API
 *     description: Create a new Symfony API with PHP
 *     tags: [Symfony]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               apiName:
 *                 type: string
 *                 example: my-symfony-api
 *     responses:
 *       200:
 *         description: Symfony API created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Symfony API created successfully"
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "API name is required"
 *       500:
 *         description: Symfony not created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Project Symfony not created"
 */
symfonyRouter.post("/symfony/create", symfonyController.createSymfonyAPI);
