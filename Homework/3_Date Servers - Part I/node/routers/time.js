import { Router } from "express";
const router = Router();

/**
 * @openapi
 * /timestamp:
 *   get:
 *     summary: Returns current timestamp
 *     description: Get timestamp
 *     responses:
 *       200:
 *         description: Returns timestamp of current time.
 */
 router.get("/timestamp", (req, res) => {
    res.send(new Date());
});

export default router;